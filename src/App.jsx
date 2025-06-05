import Header from "./components/Header";
import Main from "./components/Main";
import { MediaProvider } from "./context/MediaContext";

function App() {
  return (
    <MediaProvider>
      <Header />
      <Main />
    </MediaProvider>
  );
}

export default App;
