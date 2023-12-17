import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "../scss/globals.scss";

const rubik = Rubik({ subsets: ["latin"], weight: ["400", "500"] });

export const metadata: Metadata = {
  title: "Bookmark | An user-friendly managaer",
  description:
    "A clean and simple interface to orginize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={rubik.className}>{children}</body>
    </html>
  );
}
