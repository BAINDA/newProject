import { notFound } from "next/navigation";
import React from "react";
import { fetchResults } from "@/lib/Fetchresults";

type Props = {
  searchParams: SearchParams;
};

export type SearchParams = {
  url: URL;
  group_adults: string;
  group_children: string;
  no_rooms: string;
  checkIn: string;
  checkOut: string;
};

async function SearchPage({ searchParams }: Props) {
  console.log(searchParams);
  if (!searchParams) return notFound();

  const results = await fetchResults(searchParams);

  if (!results) return <div> No Results..</div>;

  return <div>SearchPage</div>;
}

export default SearchPage;
