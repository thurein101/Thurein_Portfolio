import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/components/language";
import Navbar from "@/components/Navigation/Nav";
import "./globals.css";
import { Toaster } from "sonner";
import { icons } from "lucide-react";
import FooterMain from "@/components/Footer/FooterMain";

export const metadata = {
  title: "Thurein MyoMin Portfolio",
  description: "Portfolio website of Thurein, a full stack developer building modern web applications.",
   robots: {
    index: true, 
    follow: true, 
  },
verification: {
   
    google: "pkMdpIv_NlGAmp2B-iQqPww76LXlzqwF0xuKO_70lJ0",
  },
  keywords: [
    "Thurein MyoMin",
    "Thurein MyoMin Portfolio",
    "Full Stack Developer",
    "Creative Web Developer",
    "Next.js Developer",
    "React Developer",
    "MERN Stack Developer",
    "Modern Web Applications",
    "UI/UX Design",
    "Frontend Engineer",
    "Web Developer Myanmar"
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-white dark:bg-[#0F0F1A] text-slate-900 dark:text-zinc-100 antialiased transition-colors duration-500 ease-in-out">
        <LanguageProvider>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <Navbar />
            {children}
            <FooterMain/>
            <Toaster
              position="top-center"
              richColors
              closeButton
              toastOptions={{
                style: {
                  borderRadius: "18px",
                  backdropFilter: "blur(12px)",
                  background: "rgba(255,255,255,0.8)",
                  border: "1px solid rgba(255,255,255,0.2)",
                },
              }}
              
            />
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
