export const metadata = {
  title: "Ana Freire",
  description: "Site de Ana Freire",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body>{children}</body>
    </html>
  );
}
