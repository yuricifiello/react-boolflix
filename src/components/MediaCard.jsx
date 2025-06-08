export default function MediaCard({ item }) {
  const imageUrl = `https://image.tmdb.org/t/p/w342${item.poster}`;
  const stars = "⭐".repeat(Math.ceil(item.vote / 2)).padEnd(5, "☆");

  let flag = "❓";
  if (item.language === "en") flag = "🇬🇧";
  else if (item.language === "it") flag = "🇮🇹";

  return (
    <div className="media-card" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="media-overlay">
        <h3>{item.title}</h3>
        <p>Titolo originale: {item.originalTitle}</p>
        <p>Lingua: {flag}</p>
        <p>Voto: {stars}</p>
      </div>
    </div>
  );
}
