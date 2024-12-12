import "./globals.css";

export const metadata = {
  title: "Ficha Editável - GURPS",
  description: "Ficha editável para GURPS 4ª edição",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">{children}</body>
    </html>
  );
}
