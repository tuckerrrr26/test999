import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "BITRA",
    template: "%s | BITRA",
  },
  description: "Digital reward mining app with daily check-ins",
  authors: [{ name: "BITRA" }],
  themeColor: "#FF7A00",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
  },
  openGraph: {
    title: "Digi Reward Mining",
    description: "Digital reward mining app with daily check-ins",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@bitra_official",
    title: "Digi Reward Mining",
    description: "Digital reward mining app with daily check-ins",
    images:
      "https://bitrataraxa.com/assets/images/image06.jpg?v=bd8f0a12",
  },
  icons: {
    icon: "/favicon.ico",            
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",  
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster richColors/>
        {children}
      </body>
    </html>
  );
}
