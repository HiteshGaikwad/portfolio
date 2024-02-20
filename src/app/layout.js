
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import Header from "@/components/header/page";
import Navbar from "@/components/sidebar/page";
import { Inter } from "next/font/google";
import '../style.css'
import Providers from './redux/provider';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hitesh Gaikwad",
  description: "This is a portfolio of Hitesh Gaikwad.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex h-screen box-border p-0 m-0 justify-center items-center" >
        <Providers >
        <AppRouterCacheProvider>
        <div className="w-[21%] h-full flex justify-center items-center">
        <Navbar/>
        </div>
        <div className="flex flex-col items-center justify-center w-full h-full relative ml-[1px]">
        <Header/>
        {children}
        </div>
        </AppRouterCacheProvider>
        </Providers>
        </body>
    </html>
  );
}
