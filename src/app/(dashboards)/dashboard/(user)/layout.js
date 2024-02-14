import { Poppins } from "next/font/google";
import "@/app/globals.css";
import { AuthProvider } from "@/context/authContext/AuthProvider";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import AdminNavBar from "@/components/admin-components/AdminNavBar/AdminNavBar";
import Navbar from "@/components/ui-components/Nav/Navbar";
import AdminTopNavBar from "@/components/admin-components/AdminTopNavBar/AdminTopNavBar";

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
            <AdminTopNavBar />
            <div className="flex gap-4">
              <div className=" hidden md:flex min-h-[90vh]  justify-start   bg-gray-200">
                <AdminNavBar />
              </div>
              <div className="">{children}</div>
            </div>
          </AntdRegistry>
        </AuthProvider>
      </body>
    </html>
  );
}
