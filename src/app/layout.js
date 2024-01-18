import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/app/authContext/AuthProvider";
import Navbar from "@/component/Navbar";

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
          <Navbar />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
