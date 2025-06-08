import { useState, useContext } from "react";
import { MediaContext } from "../context/MediaContext";
import { useMedia } from "../context/MediaContext";

export default function Header() {
  const [searchInput, setSearchInput] = useState("");
  const { searchMedia } = useContext(MediaContext);

  const handleSearch = () => {
    searchMedia(searchInput);
  };

  return (
    <header>
      <h1>Boolflix 🎬</h1>
      <input
        type="text"
        placeholder="Cerca film o serie..."
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button onClick={handleSearch}>Cerca</button>
    </header>
  );
}
