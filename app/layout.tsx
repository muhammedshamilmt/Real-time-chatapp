import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from 'next-themes';

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "ChatApp - Connect Instantly, Anywhere",
  description: "A modern, secure, and intuitive real-time chat application with end-to-end encryption, multi-device support, and beautiful design.",
  keywords: ["chat", "messaging", "real-time", "secure", "modern", "responsive"],
  authors: [{ name: "ChatApp Team" }],
  openGraph: {
    title: "ChatApp - Connect Instantly, Anywhere",
    description: "Experience the future of messaging with our secure, fast, and intuitive chat platform.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}