import { Inter, Nunito } from "next/font/google";
import "./globals.css";



export const metadata = {
  title: "CutieQuiz",
  description: "CutieQuiz",
}

const nunito = Nunito({
  subsets: ['cyrillic'],
  weight: ['800'],
  display: 'swap',
  variable: '--font-nunito',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunito.className} >{children}</body>
    </html>
  );
}
