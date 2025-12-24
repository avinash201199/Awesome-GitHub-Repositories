import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { defaultMetadata } from "@/lib/seo";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { cn } from "@/lib/utils";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = defaultMetadata;

export const viewport: Viewport = {
  themeColor: "#020617",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="en" 
      className={cn(
        "dark scroll-smooth", 
        geistSans.variable, 
        geistMono.variable
      )}
      suppressHydrationWarning
    >
      <body
        className="min-h-screen bg-slate-950 text-slate-50 antialiased selection:bg-indigo-500/30 selection:text-indigo-200"
      >
        {/* Modern Background Shell */}
        <div className="relative flex min-h-screen flex-col">
          {/* High-fidelity Radial Gradients */}
          <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
            <div 
              className="absolute -top-[10%] left-[15%] h-[70%] w-[70%] rounded-full bg-indigo-500/10 blur-[120px]" 
              aria-hidden="true" 
            />
            <div 
              className="absolute top-[20%] -right-[10%] h-[60%] w-[50%] rounded-full bg-fuchsia-500/10 blur-[100px]" 
              aria-hidden="true" 
            />
            <div 
              className="absolute -bottom-[10%] left-[20%] h-[50%] w-[60%] rounded-full bg-amber-500/5 blur-[110px]" 
              aria-hidden="true" 
            />
          </div>

          {/* Grain Overlay for Texture */}
          <div 
            className="pointer-events-none fixed inset-0 z-[1] opacity-[0.03] mix-blend-overlay"
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/svg%3E")` }}
          />

          {/* Main App Shell */}
          <div className="relative z-10 flex min-h-screen flex-col">
            <Header />
            
            <main className="flex-1">
              {children}
            </main>
            
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}