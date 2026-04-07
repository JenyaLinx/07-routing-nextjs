"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

interface NotePreviewProps {
  id: string;
}

export default function NotePreview({ id }: NotePreviewProps) {
  const router = useRouter();

  useEffect(() => {
    console.log("Preview note ID:", id);
  }, [id]);

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Note Preview</h2>
        <p>ID: {id}</p>
        <button onClick={() => router.back()}>Close</button>
      </div>
      <style jsx>{`
        .modal {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .modal-content {
          background: white;
          padding: 2rem;
          border-radius: 8px;
        }
      `}</style>
    </div>
  );
}