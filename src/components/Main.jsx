import { useContext } from "react";
import { MediaContext } from "../context/MediaContext";
import MediaCard from "./MediaCard";

export default function Main() {
  const { mediaList, isLoading } = useContext(MediaContext);

  return (
    <main>
      {isLoading && <p>Caricamento in corso...</p>}
      {!isLoading && mediaList.length > 0 && (
        <div>
          {mediaList.map((item) => (
            <MediaCard key={item.id + item.type} item={item} />
          ))}
        </div>
      )}
    </main>
  );
}
