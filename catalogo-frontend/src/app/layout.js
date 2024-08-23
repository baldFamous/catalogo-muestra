import {Inter, Montserrat} from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer/footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Catalogo XXXX",
  description: "Catalogo de productos de la tienda XXXX",
};

export default function RootLayout({ children, modal}) {
  return (
    <html lang="es">
    <body className={montserrat.className}>
    <nav className="nav-bar">
        <ul><a href="/">NegocioXXXX</a></ul>
        <ul><a href="/about">Sobre nosotros</a></ul>
    </nav>
    {children}
    {modal}
    <Footer/>
    </body>
    </html>
  );
}
