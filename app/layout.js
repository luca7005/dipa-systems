export const metadata = {
  title: "DIPA Systems",
  description: "Konstruktion · Stahlbau · Maschinenbau"
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
