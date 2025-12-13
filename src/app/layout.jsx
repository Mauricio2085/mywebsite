import "../styles.css";
import { Inter } from "next/font/google";
import I18nClientProvider from "../components/I18nClientProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Mauricio | Desarrollador Full Stack",
  description:
    "Portafolio Full Stack especializado en React, Next.js y desarrollo backend con Node.js y bases de datos PostgreSQL",
  keywords: ["Next.js", "React", "Portafolio", "Desarrollador", "Fullstack"], // Añade palabras clave
  // Otras propiedades como viewport se manejan por defecto, pero se pueden especificar aquí.
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.className} ${inter.variable}`}>
      <body className="flex-col items-center bg-white dark:bg-gradient-to-r dark:from-[#1b2129] dark:to-[#111213]">
        <I18nClientProvider>{children}</I18nClientProvider>
      </body>
    </html>
  );
}
