import "./globals.css";

export const metadata = {
  title: "intiZOM",
  description: "Motivation platform",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        {children}
      </body>
    </html>
  );
}
