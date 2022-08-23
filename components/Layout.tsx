import { PropsWithChildren } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const Layout = ({ children }: PropsWithChildren<{}>) => {
  return (
    <div className="min-h-screen">
      <div className="relative">
        <Header />
      </div>

      <main className="mb-12">{children}</main>
      <Footer />
    </div>
  );
};
