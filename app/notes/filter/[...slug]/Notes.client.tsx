"use client";

import { usePathname } from "next/navigation";

export default function NotesClient() {
  const pathname = usePathname();
  const slug = pathname?.split("/").pop();

  return (
    <div>
      <h2>Filtered Notes</h2>
      <p>Filter: {slug}</p>
      <ul>
        <li>Note 1 (filter: {slug})</li>
        <li>Note 2 (filter: {slug})</li>
      </ul>
    </div>
  );
}