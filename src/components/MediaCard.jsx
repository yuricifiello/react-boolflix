export default function MediaCard({ item }) {
  let flag = "❓";
  if (item.language === "en") flag = "🇬🇧";
  else if (item.language === "it") flag = "🇮🇹";

  return (
    <div>
      <h3>{item.title}</h3>
      <p>Titolo originale: {item.original_title}</p>
      <p>Lingua: {flag}</p>
      <p>Voto: {item.vote}</p>
    </div>
  );
}
