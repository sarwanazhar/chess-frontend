import { auth, currentUser } from '@clerk/nextjs/server';
import { prisma } from './db';

export const initialProfile = async () => {
    try {
        const profile = await currentUser();

        if (!profile) {
            return auth().redirectToSignIn();
        }

        let user = await prisma.user.findUnique({
            where: {
                userId: profile.id,
            },
        });

        if (user) {
            return user;
        }

        user = await prisma.user.create({
            data: {
                userId: profile.id,
                name: `${profile.firstName} ${profile.lastName}`,
                email: profile.emailAddresses[0].emailAddress,
                imageUrl: profile.imageUrl,
                whiteGames: {},
                blackGames: {},
            },
        });

        return user;
    } catch (error) {
        console.error("Error fetching user profile:", error);
        return auth().redirectToSignIn();
    }
};
