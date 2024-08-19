import { Roboto } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider,
  RedirectToSignIn,
  SignedIn,
  SignedOut,
} from '@clerk/nextjs';
import { ThemeProvider } from "@/components/theme-provider";
import { ModalProvider } from "@/components/providers/modal-provider";
import { Toaster } from "@/components/ui/toaster";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"], // Adjust weights as needed
  style: ["normal", "italic"], // Include styles if needed
});

export const metadata = {
  title: "Chess",
  description: "Made by sarwan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <ClerkProvider>
            <ModalProvider />
            {children}
            <Toaster />
          </ClerkProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
