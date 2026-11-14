import "./globals.css";

export const metadata = {
  title: "Instship Checker",
  description: "A lightweight Next.js application for testing Instship deployments.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
