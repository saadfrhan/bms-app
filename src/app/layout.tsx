import '../styles/globals.css';

export const metadata = {
  title: "Create Next App",
  description: "Next.js 13 Website"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}