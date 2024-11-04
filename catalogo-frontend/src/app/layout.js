import {Inter, Montserrat} from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer/footer";
import Providers from '@/hooks/Providers';
import CartButton from "@/components/cart/CartButton";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Catalogo",
  description: "Catalogo de productos de la tienda",
};

export default function RootLayout({ children, modal}) {
  return (
    <html lang="es">
    <body className={montserrat.className}>
    <Providers>
      <nav className="nav-bar">
          <ul><a href="/">Negocio</a></ul>
          {/* <ul><a href="/about">Sobre nosotros</a></ul> */}
          <ul><CartButton/></ul>
      </nav>
        {children}
        {modal}
      <Footer/>
      <ToastContainer
            position="bottom-center"
            autoClose={550}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored" // Tema de la notificación
          />
    </Providers>
    </body>
    </html>
  );
}
