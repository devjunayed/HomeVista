import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/app/authContext/AuthProvider";
import Navbar from "@/components/Nav/Navbar";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-roboto",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable}`}>
        <AuthProvider>
          <AntdRegistry>
            <Navbar />
            {children}
            <Footer />
          </AntdRegistry>
        </AuthProvider>
      </body>
    </html>
  );
}
