import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { TranslationProvider } from "@/hooks/useTranslation";
import ModernAlert from '@/components/ModernAlert';
import ClientLayout from "./ClientLayout";

const stackSansNotch = localFont({
  src: "./fonts/StackSansNotch/StackSansNotch-VariableFont_wght.ttf",
  variable: "--font-stack-sans-notch",
  display: "swap",
  weight: "100 900",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Steve Shanny | Développeur Full-Stack",
    template: "%s | Steve Shanny",
  },
  description:
    "Portfolio de Steve Shanny, développeur full-stack spécialisé en Next.js, React, Spring Boot, PostgreSQL et expériences web modernes.",
  keywords: [
    "Steve Shanny",
    "portfolio développeur",
    "full-stack",
    "Next.js",
    "React",
    "Spring Boot",
    "TypeScript",
    "PostgreSQL",
  ],
  applicationName: "Portfolio Steve",
  authors: [{ name: "Steve Shanny" }],
  creator: "Steve Shanny",
  publisher: "Steve Shanny",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Steve Shanny | Développeur Full-Stack",
    description:
      "Portfolio de Steve Shanny, développeur full-stack spécialisé en Next.js, React, Spring Boot et bases de données modernes.",
    url: "/",
    siteName: "Portfolio Steve",
    type: "website",
    locale: "fr_FR",
    images: [{ url: "/images/steve_shanny.jpg", width: 1200, height: 630, alt: "Steve Shanny" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Steve Shanny | Développeur Full-Stack",
    description:
      "Portfolio de Steve Shanny, développeur full-stack spécialisé en Next.js, React, Spring Boot et bases de données modernes.",
    images: ["/images/steve_shanny.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={stackSansNotch.variable}>
      <body className="min-h-screen bg-black text-white antialiased">
        <TranslationProvider>
          <ClientLayout>
            {children}
            <ModernAlert />
          </ClientLayout>
        </TranslationProvider>
      </body>
    </html>
  );
}