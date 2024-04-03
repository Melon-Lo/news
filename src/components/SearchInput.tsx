import { VscSearch } from "react-icons/vsc";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchInput() {
  const [term, setTerm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    navigate(`/search?term=${term}`)
  }

  return (
    <form onSubmit={handleSubmit} className="w-6/12 max-w-80">
      <div className="flex items-center border-2 border-gray-300 w-100 rounded-md">
        <div className="pl-3">
          <VscSearch className="w-5 h-5 text-gray-500" />
        </div>
        <input
          value={term}
          onChange={e => setTerm(e.target.value)}
          className="ml-3 pl-3 py-2 border-0 shadow-none w-full"
          placeholder="搜尋新聞..."
        />
      </div>
    </form>
  );
}