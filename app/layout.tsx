import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "../providers/ThemeProvider";
import Navbar from "../components/shared/Navbar";

export const metadata: Metadata = {
  title: "T Aatreya",
  description: "Portfolio of T Aatreya",
  icons: {
    icon: "logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta httpEquiv="Content-Language" content="en" />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

const themeScript = `
  (function() {
    const theme = localStorage.getItem('theme') || 'dark';
    document.documentElement.classList.add(theme);
  })();
`;
