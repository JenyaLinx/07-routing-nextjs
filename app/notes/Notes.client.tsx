"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchNotes } from "@/lib/api";
import NoteList from "@/components/NoteList/NoteList";
import Pagination from "@/components/Pagination/Pagination";
import SearchBox from "@/components/SearchBox/SearchBox";
import NoteForm from "@/components/NoteForm/NoteForm";
import css from "./Notes.module.css";

interface Props {
  initialTag?: string;
}

export default function NotesClient({ initialTag = "" }: Props) {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const { data, isLoading, error } = useQuery({
    queryKey: ["notes", page, search, initialTag],
    queryFn: () => fetchNotes(page, search || initialTag),
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  return (
    <div className={css.container}>
      <SearchBox value={search} onChange={setSearch} />
      <NoteForm onClose={() => {}} />
      {data && <NoteList notes={data.notes} />}
      {data && (
        <Pagination
  page={page}
  totalPages={data.totalPages}
  onChange={setPage}
        />

      )}
    </div>
  );
}