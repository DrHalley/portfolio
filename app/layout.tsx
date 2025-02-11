import "./globals.css";
import { Navbar } from "./components/Navbar";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="h-full">
      <body className="bg-slate-800">
        <Navbar />
        <main className="pt-16 h-full">{children}</main>
      </body>
    </html>
  );
}
