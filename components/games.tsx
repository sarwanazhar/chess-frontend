'use client';
import { User } from "@prisma/client";
import { useEffect, useState } from "react";
import axios from 'axios';
import { cn } from "@/lib/utils";
import { LoaderCircle, ServerCrash } from "lucide-react";

interface GamesProps {
    profile: User;
}

interface Game {
    id: string;
    pgn: string;
    fen: string;
    result: string;
    whitePlayerId: string;
    blackPlayerId: string;
    WhitePlayer: User;
    BlackPlayer: User;
    moves: any[];
    createdAt: string;  // Add this field if it's not already included in the Game type
}

export const Games = ({ profile }: GamesProps) => {
    const [games, setGames] = useState<Game[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchGames() {
            try {
                setLoading(true);
                const response = await axios.post(`https://secret-chess-backend-production.up.railway.app/fetch-games`, { id: profile.id });
                const sortedGames = response.data.sort((a: Game, b: Game) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
                setGames(sortedGames);
                setError(null);
            } catch (error) {
                console.error('Error fetching games:', error);
                setError('Something went wrong while fetching the games.');
            } finally {
                setLoading(false);
            }
        }

        if (profile.id) {
            fetchGames();
        }
    }, [profile.id]);

    return (
        <div className={cn(
            'h-full w-full',
            loading && 'flex items-center justify-center',
            error && 'flex items-center justify-center'
        )}>
            {loading && <div className="text-center animate-spin"><LoaderCircle className="h-20 w-20" /></div>}
            {error && <div className="text-center text-red-600 flex items-center justify-center flex-col"><ServerCrash className="h-20 w-20" /> <h1 className="text-3xl">Server Crashed</h1> </div>}
            {!loading && !error && games.slice(0, 8).map((game: any) => {
                const isWhitePlayer = game.WhitePlayer.id === profile.id;
                const isWinner = (isWhitePlayer && game.result === '1-0') || (!isWhitePlayer && game.result === '0-1');
                const isLoser = (isWhitePlayer && game.result === '0-1') || (!isWhitePlayer && game.result === '1-0');

                return (
                    <div
                        key={game.id}
                        className={cn(
                            'w-full h-[10vh] flex items-center justify-center flex-col',
                            isWinner && 'bg-green-700',
                            isLoser && 'bg-red-800',
                            !isWinner && !isLoser && 'bg-zinc-800'
                        )}
                    >
                        <div className="font-bold">
                            {game.WhitePlayer.name} vs {game.BlackPlayer.name}
                        </div>
                        <div>
                            {isWinner && 'You Won!'}
                            {isLoser && 'You lost.'}
                            {!isWinner && !isLoser && 'Draw or ongoing.'}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
