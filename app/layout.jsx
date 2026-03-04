import "./globals.css";

export const metadata = {
  title: "JavaScript Mini Challenges",
  description: "Practice JavaScript with curated mini challenge projects.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
