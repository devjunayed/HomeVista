import { Poppins } from "next/font/google";
import "@/app/globals.css";
import { AuthProvider } from "@/context/authContext/AuthProvider";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import Footer from "@/components/ui-components/Footer/Footer";
import AdminNavBar from "@/components/admin-components/AdminNavBar/AdminNavBar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export default function AdminLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <AuthProvider>
          <AntdRegistry>
            <div className="flex gap-2">
              <div className="w-2/12 bg-gray-200">
                <AdminNavBar />
              </div>
              <div className="w-11/12">{children}</div>
            </div>
          </AntdRegistry>
        </AuthProvider>
      </body>
    </html>
  );
}
