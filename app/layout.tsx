import type {Metadata} from "next";
import "./globals.css";
import {Providers} from "encuestaraz/app/providers";
import '@fontsource-variable/montserrat';  // Peso medio para Montserrat
import '@fontsource-variable/bodoni-moda'; // Peso normal para Bodoni Moda


export const metadata: Metadata = {
  title: "Encuestaraz",
  description: "Tus respuestas serán nuestra guía para emprender el camino hacia un emocionante proyecto. #montaraz",
  //metadataBase: new URL("https://082a-181-32-90-102.ngrok-free.app"), //new URL("https://encuesta.montaraz.co"),
  openGraph: {
    images: [
      {
        url: '/listoncito.png', // 'https://encuesta.montaraz.co/public/listoncito.png',
        width: 800,
        height: 600,
        alt: 'Listoncito',
      },
    ],
  },
  icons: "/image/favicon.ico" // "https://encuesta.montaraz.co/public/favicon.ico"
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
