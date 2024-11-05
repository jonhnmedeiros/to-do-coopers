import { Provider } from  "./provider";

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const montserrat = localFont({
  src: "./fonts/Montserrat-VariableFont_wght.ttf",
  variable: "--font-montserrat",
  weight: "100 900",
});


export const metadata: Metadata = {
  title: "Coopers To-do list",
  description: "Organize your daily jobs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Provider>
        <body
          className={`${montserrat.variable} antialiased inter.className`}
        >
          {children}
        </body>
      </Provider>
    </html>
  );
}
