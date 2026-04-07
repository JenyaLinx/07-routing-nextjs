"use client";

import ReactPaginate from "react-paginate";
import type { ReactPaginateProps } from "react-paginate";

import css from "./Pagination.module.css";

interface PaginationProps {
  totalPages: number;
  page: number;
  onChange: (page: number) => void;
}

export default function Pagination({ totalPages, onChange }: PaginationProps) {
  return (
    <div>
      {Array.from({ length: totalPages }, (_, i) => (
        <button key={i} onClick={() => onChange(i + 1)}>
          {i + 1}
        </button>
      ))}
    </div>
  );
}


// export default function Pagination({
//   totalPages,
//   page,
//   onChange,
// }: PaginationProps) {
//   if (totalPages <= 1) return null;

//   return (
//     <ReactPaginate
//       pageCount={totalPages}
//       pageRangeDisplayed={5}
//       marginPagesDisplayed={1}
//       onPageChange={({ selected }) => onChange(selected + 1)}
//       forcePage={page - 1}
//       containerClassName={css.pagination}
//       activeClassName={css.active}
//       nextLabel="→"
//       previousLabel="←"
//     />
//   );
// }