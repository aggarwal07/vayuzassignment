import {Quicksand,Playfair_Display } from "next/font/google";
import "./globals.css";

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-quicksand',
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-playfair",
});

export const metadata = {
  title: "Vayuz Assignment | Shivam Aggarwal",
  description: "Shivam Aggarwal's Vayuz Assignment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${quicksand.variable} ${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
