import { useState } from "react";
import axios from "axios";

function LinkPage() {
  const [linkInput, setLinkInput] = useState("");
  const [shortenedLink, setShortenedLink] = useState("");

  const fetchData = async () => {
    try {
      const response = await axios(
        `https://api.shrtco.de/v2/shorten?url=${linkInput}`
      );
      setShortenedLink(response.data.result.full_short_link);
    } catch (e) {
      console.log(e);
    }
  };

  const handleClick = () => {
    navigator.clipboard.writeText(shortenedLink);
    console.log(shortenedLink);
  };
  return (
    <>
      <div>
        <div>
          <input
            value={linkInput}
            onChange={(e) => {
              setLinkInput(e.target.value);
            }}
            type="text"
            placeholder="Shorten a link here..."
          />
          <button
            type="submit"
            onClick={() => {
              fetchData();
            }}
          >
            Shorten it!
          </button>
        </div>
        <div
          onClick={(e) => {
            handleClick();
          }}
        >
          {shortenedLink}
        </div>
      </div>
    </>
  );
}

export default LinkPage;
