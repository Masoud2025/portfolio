// app/layout.tsx
import { ReactNode } from "react";

export const metadata = {
  title: "My Next.js App",
  description: "A Next.js 13 TypeScript Boilerplate",
};

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className="">
        <main className="">{children}</main>
      </body>
    </html>
  );
}
