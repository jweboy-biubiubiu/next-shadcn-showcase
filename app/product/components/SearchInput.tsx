"use client";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useSearchParams } from "next/navigation";
import QueryString from "qs";
import React from "react";

const SearchInput = () => {
  const searchParams = useSearchParams();
  const keyword = searchParams.get("keyword");
  const [value, setValue] = React.useState(keyword == null ? "" : keyword);

  const handleKeyDown = (evt: React.KeyboardEvent<HTMLInputElement>) => {
    if (evt.code === "Enter") {
      const { value } = evt.target as HTMLInputElement;
      const query = QueryString.stringify(
        { keyword: value },
        { addQueryPrefix: true }
      );
      window.location.href = "/product" + query;
    }
  };

  const handleInput = (evt: React.FormEvent<HTMLInputElement>) => {
    const { value } = evt.target as HTMLInputElement;
    setValue(value);
  };

  return (
    <div className="relative w-[400px] flex gap-x-4">
      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        type="search"
        placeholder="Please enter product name"
        className="pl-8"
        onKeyDown={handleKeyDown}
        onInput={handleInput}
        value={value}
      />
    </div>
  );
};

export default SearchInput;
