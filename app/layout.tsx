import type {Metadata} from "next";
import "./globals.css";
import {Providers} from "encuestaraz/app/providers";

export const metadata: Metadata = {
  title: "Encuestaraz",
  description: "Tus respuestas serán nuestra guía para emprender el camino hacia un emocionante proyecto. #montaraz",
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
    <body>
    <Providers>
      {children}
    </Providers>
    </body>
    </html>
  );
}
