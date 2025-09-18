import { Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"], // ✅ This line fixes the preload error
});

export const metadata = {
  title: "Munene Builds Portfolio",
  description: "Mobile | Frontend Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${syne.className} antialiased`}
      suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
