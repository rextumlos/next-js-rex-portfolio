import { JetBrains_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";

// components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetbrainsMono = JetBrains_Mono ({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"] ,
  variable:  "--font-jetbrainsMono"
});

export const metadata = {
  title: {
    default: "Home | Rex.",
    template: "%s | Rex."
  },
  description: "Rex Tumlos - Software Engineer 👨‍💻| Ruby on Rails Developer 💎| Creating websites, specialized in backend",
  alternates: {
    canonical: "./"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <Header />
        <StairTransition />
        <PageTransition>
          {children}
        </PageTransition>
        <SpeedInsights />
      </body>
    </html>
  );
}
