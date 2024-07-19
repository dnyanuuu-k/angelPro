import { Inter } from "next/font/google";
import "./globals.css";
import Authprovider from '@/component/Authprovider/Authprovider'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sell USDT - AngelPro",
  description: "Safe and Fast USDT trading platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Authprovider>
        {children}
      </Authprovider>
        </body>
    </html>
  );
}
