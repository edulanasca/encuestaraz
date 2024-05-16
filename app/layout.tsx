import type {Metadata} from "next";
import "./globals.css";
import {Providers} from "encuestaraz/app/providers";
import '@fontsource-variable/montserrat';  // Peso medio para Montserrat
import '@fontsource-variable/bodoni-moda'; // Peso normal para Bodoni Moda


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
