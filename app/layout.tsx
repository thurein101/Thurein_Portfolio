import type { Metadata } from "next";
import Script from "next/script";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { PageTransition } from "@/components/providers/page-transition";
import { LanguageProvider } from "@/components/providers/language-provider";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { BackToTop } from "@/components/ui/back-to-top";
import { themeInitScript } from "@/lib/theme";
import "./globals.css";

export const metadata: Metadata = {
  title: "Thurein MyoMin Portfolio",
  description:
    "Portfolio website of Thurein, a full stack developer building modern web applications.",
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "Vxg2SUP4EUIAvIu2WBKR2t-qdV896usdG3cl8D-lExM",
  },
  keywords: [
    "Thurein MyoMin",
    "Thurein MyoMin Portfolio",
    "Full Stack Developer",
    "Creative Web Developer",
    "Software Developer",
    "Next.js Developer",
    "React Developer",
    "React Native",
    "Expo",
    "MERN Stack Developer",
    "Modern Web Applications",
    "UI/UX Design",
    "Frontend Engineer",
    "Web Developer Myanmar",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInitScript}
        </Script>
        <div className="app-shell">
          <LanguageProvider>
            <ThemeProvider>
              <Navbar />
              <main id="main" className="min-h-screen pt-[68px] md:pt-[72px]">
                <PageTransition>{children}</PageTransition>
              </main>
              <Footer />
              <BackToTop />
              <Toaster
                position="top-center"
                closeButton
                toastOptions={{
                  style: {
                    borderRadius: "12px",
                    background: "var(--surface-elevated)",
                    color: "var(--foreground)",
                    border: "1px solid var(--border-strong)",
                    boxShadow: "0 20px 50px -28px rgba(0, 0, 0, 0.75)",
                  },
                }}
              />
            </ThemeProvider>
          </LanguageProvider>
        </div>
      </body>
    </html>
  );
}
