import { Inter } from "next/font/google";
import "./globals.css";
import Navbartop from "./components/Navbartop";
import Menuleft from "./components/Navbarleft";
import Navbarleft from "./components/Navbarleft";
import Providers from "./providers"
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "App",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <Navbartop />
        <main className=" flex sm:flex-row h-[calc(100vh-66px)] overflow-y-auto">
          <Navbarleft />
          <Providers>
            <div className="flex-1 p-10  max-h-100% overflow-y-auto">

                {children}

            </div>
          </Providers>
        </main>
      </body>
    </html>
  );
}
