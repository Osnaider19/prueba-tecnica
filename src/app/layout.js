import { Nav } from "@/components/nav/Nav";
import "./globals.css";
import { Lato } from "next/font/google";
import { Tendecias } from "@/components/tendencia/Tendecias";
import { Header } from "@/components/header/Header";

const lato = Lato({
  subsets: ["latin"],
  weight: "400",
  style: ["italic", "normal"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <div className="relative flex w-[95%] m-auto justify-center items-center">
          <Nav />
          <main className="w-full border-x sticky top-0  flex flex-col justify-center items-center h-screen">
            <Header />
            {children}
          </main>
          <Tendecias />
        </div>
      </body>
    </html>
  );
}
