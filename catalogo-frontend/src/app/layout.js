import {Inter, Montserrat} from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Catalogo XXXX",
  description: "Catalogo de productos de la tienda XXXX",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
    <body className={montserrat.className}>
    {children}
    <footer className="footer">
      <p>© 2021 Catalogo XXXX</p><br/>
      <p>Pagina creada por <a href="mailto:bastian.dev24@gmail.com">DevBastian</a></p>
    </footer>
    </body>

    </html>
  );
}
