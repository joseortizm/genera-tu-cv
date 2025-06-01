import "globals.css";
import { TopNavBar } from "components/TopNavBar";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Genera Tu CV - Crea tu currículum vitae (CV) de forma accesible",
  description:
    "GeneraTuCV es un proyecto open source inspirado en OpenResume, diseñado para ayudar a personas con discapacidad a crear su currículum vitae (CV) en formato PDF de forma accesible, rápida y sin complicaciones.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <TopNavBar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
