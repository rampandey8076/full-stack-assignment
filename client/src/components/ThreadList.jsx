import { useState } from "react";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { getThreads } from "../services/threads.service";
import { useDebounce } from "../hooks/useDebounce";
import SearchBar from "./SearchBar";
import SortDropdown from "./SortDropdown";
import ThreadCard from "./ThreadCard";

export default function ThreadList() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("newest");

  const debouncedSearch = useDebounce(search, 300);

  const { data, isPending, isError } = useQuery({
    queryKey: ["threads", { search: debouncedSearch, sort }],
    queryFn: ({ queryKey }) => getThreads(queryKey[1]),
    placeholderData: keepPreviousData,
  });

  return (
    <div>
      <SearchBar value={search} onChange={setSearch} />

      <SortDropdown value={sort} onChange={setSort} />

      {isError && <p>Something went wrong.</p>}

      {isPending ? (
        <p>Loading...</p>
      ) : (
        data?.map((thread) => (
          <ThreadCard key={thread.id} thread={thread} />
        ))
      )}
    </div>
  );
}
