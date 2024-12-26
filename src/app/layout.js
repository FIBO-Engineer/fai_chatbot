import { Geist } from "next/font/google";
import Script from "next/script";
import "./globals.css";

export const metadata = {
  title: "FAI Chatbot",
  description: "A chatbot application using Next.js and Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          type="module"
          src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
          strategy="lazyOnload"
        />
        <Script
          nomodule
          src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
          strategy="lazyOnload"
        />
      </head>
      <body className="bg-grayLight text-grayDark font-sans h-screen">
        {children}
      </body>
    </html>
  );
}
