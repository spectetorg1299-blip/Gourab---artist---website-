import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GOURAB — Artist",
  description: "Official artist website — music, videos, lyrics and bookings.",
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="en"><body>{children}</body></html>;
}
