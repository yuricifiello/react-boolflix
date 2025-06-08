import { useContext } from "react";
import { MediaContext } from "../context/MediaContext";
import MediaCard from "./MediaCard";

export default function Main() {
  const { mediaList } = useContext(MediaContext);

  return (
    <main>
      <ul className="media-list">
        {mediaList.map((item) => (
          <li key={item.id + item.type}>
            <MediaCard item={item} />
          </li>
        ))}
      </ul>
    </main>
  );
}
