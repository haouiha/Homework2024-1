import "@/styles/global.css";
import Container from "@/components/layouts/Container";

export const metadata = {
  title: "MAQE Forum",
  description: "MAQE Assignment",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Container>{children}</Container>
      </body>
    </html>
  );
}
