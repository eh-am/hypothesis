import "./style";
import { useEffect } from "preact/hooks";

const viaUrl = "https://via.hypothes.is/";

function App() {
  useEffect(() => {
    let parsedUrl = new URL(window.location.href);
    let text = parsedUrl.searchParams.get("text");
    let url = parsedUrl.searchParams.get("url");

    if (url) {
      window.open(viaUrl + url);
    } else if (text) {
      window.open(viaUrl + text);
    }
  }, []);

  return <></>;
}

export default App;

