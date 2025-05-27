import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface SearchBarProps {
  onSearch: (query: string) => void;
  onFilterClick: () => void;
}

const SearchBar = ({ onSearch, onFilterClick }: SearchBarProps) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="flex gap-3">
        <div className="relative flex-1">
          <Icon
            name="Search"
            size={20}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Поиск по названию или локации..."
            className="pl-10 h-12 bg-white border-gray-200 focus:border-blue-500"
          />
        </div>
        <Button
          type="button"
          onClick={() => navigate("/filters")}
          variant="outline"
          className="h-12 px-4 border-gray-200 hover:bg-gray-50"
        >
          <Icon name="SlidersHorizontal" size={20} />
        </Button>
      </form>
    </div>
  );
};

export default SearchBar;
