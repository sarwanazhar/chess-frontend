'use client'

import ChessBoard from 'chessboardjsx';
import { useEffect, useMemo, useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { User } from '@prisma/client';
import socket from '@/lib/socket';
import { useRouter } from 'next/navigation';
import { Gem } from 'lucide-react';
import ActionTooltip from './ui/action-tooltip';

interface ChessBoardComponentProps {
    profile: User;
}

export const ChessBoardComponent = ({
    profile
}: ChessBoardComponentProps) => {
    const [waiting, setWaiting] = useState(false);
    const [fail, setError] = useState<boolean | string>(false);
    const [fen, setFen] = useState<string>("start");
    const [gameId, setGameId] = useState<null | string>(null);
    const [color, setColor] = useState<'white' | 'black'>('white');
    const [opponent, setOpponent] = useState<{ name: string; imageUrl: string; subscribed: boolean; } | null>(null);
    const router = useRouter();
    const id = profile.id


    useEffect(() => {
        if (!socket.connected) {
            socket.connect();
        }


        socket.emit('joinGame', profile.userId);

        socket.on('waitingList', () => {
            setWaiting(true);
        });

        socket.on('error', (message: string) => {
            alert(message)
            setWaiting(false); // Stop waiting if an error occurs
        });

        socket.on('gameStarted', (gameData: { gameId: string; fen: string; color: 'white' | 'black'; opponent: { name: string; imageUrl: string; subscribed: boolean; } }) => {
            setGameId(gameData.gameId);
            setFen(gameData.fen);
            setColor(gameData.color);
            setOpponent(gameData.opponent);
            setWaiting(false);
        });

        socket.on('gameEnd', (message: string) => {
            alert(message);
        });
        
        socket.on('moveMade', (gameData: {fen: string; pgn: string;}) => {
            setFen(gameData.fen)
        })
        socket.on('invalidMove', (message: string) => {
            alert(message)
        })
        socket.on('gameOver', (message: string) => {
            alert(message)
        })

        return () => {
            socket.emit('leaveGame', profile.userId);
            socket.off('waitingList');
            socket.off('gameStarted');
            socket.off('error');
            socket.off('moveMade');
            socket.off('gameEnd');
            socket.off('invalidMove')
            socket.disconnect();
        };
    }, [profile.userId, router]);

    const handleMove = (data: { sourceSquare: string; targetSquare: string; piece: string }) => {
        if (gameId) {
            const move = {
                from: data.sourceSquare,
                to: data.targetSquare,
                piece: data.piece
            };
            socket.emit('makeMove', gameId, profile.id, move)
        }
    };

    return (
        <div className=''>
            <div className="flex gap-5 items-center mb-5">
                <Avatar>
                    <AvatarImage src={profile.imageUrl} />
                </Avatar>
                <h1 className="font-bold flex gap-3">
                    {profile.name}
                    {profile.subscribed === true && (
                        <ActionTooltip label='Diamond Member' align='center' side='top'>
                            <Gem className='text-blue-500' />
                        </ActionTooltip>
                    )}
                </h1>
                <h1>VS</h1>
                {waiting ? (
                    <Avatar>
                        <AvatarFallback>P</AvatarFallback>
                    </Avatar>
                ) : opponent ? (
                    <Avatar>
                        <AvatarImage src={opponent.imageUrl} />
                        <AvatarFallback>{opponent.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                ) : null}
                <h1 className='font-bold'>
                    {fail ? fail : (!waiting ? (opponent ? (
                        <div className='flex gap-3'>
                            {opponent.name}
                            {opponent.subscribed === true && (
                                <ActionTooltip label='Diamond Member' side='top' align='center'>
                                    <Gem className='text-blue-500' />
                                </ActionTooltip>
                            )}
                        </div>
                    ) : '') : 'Searching for an opponent...')}
                </h1>
            </div>
            <ChessBoard
                width={350}
                position={fen}
                orientation={color === 'white' ? 'white' : 'black'}
                onDrop={(data) => handleMove(data)}
            />
        </div>
    );
};
