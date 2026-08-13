import "./globals.css";

export const metadata = {
  title: "Golden Hour Coffee | Coffee, Pastry & Good Company",
  description: "A neighborhood coffee shop for slow mornings, beautiful coffee, and good company.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
