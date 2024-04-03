import { IoFlashSharp } from "react-icons/io5";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="flex justify-around items-center w-screen py-3">
      <Link className="font-normal flex items-center cursor-pointer" to="/">
        <IoFlashSharp />
        <span className="ml-3 text-2xl">新聞快報</span>
      </Link>
      <SearchInput />
    </div>
  );
}