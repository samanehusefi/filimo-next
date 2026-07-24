import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import "./globals.css";
import { MenuProvider } from "@/components/Header/context/MenuContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className="flex min-h-screen flex-col">
        <MenuProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </MenuProvider>
      </body>
    </html>
  );
}
