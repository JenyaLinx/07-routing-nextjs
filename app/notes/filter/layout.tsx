import { ReactNode } from "react";

export default function FilterLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <header>
        <h1>Notes Filter</h1>
      </header>
      <main>{children}</main>
      <footer>
        <p>GoIT Homework</p>
      </footer>
    </div>
  );
}