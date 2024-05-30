import { useRef } from "react";

const ScrollImage = () => {
  const listRef = useRef(null);
  const scrollToIndex = (index) => {
    const listNode = listRef.current;
    const imgNode = listNode.querySelectorAll("li > img")[index];
    imgNode.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };
  return (
    <div>
      <nav>
        <button onClick={() => scrollToIndex(1)}>Tommy</button>
        <button onClick={() => scrollToIndex(2)}>Jhonny</button>
        <button onClick={() => scrollToIndex(3)}>Saka</button>
      </nav>
      <ul>
        <li>
          <img src="https://placekitten.com/g/200/200" alt="Tommy" />
        </li>
        <li>
          <img src="https://placekitten.com/g/300/200" alt="Jhonny" />
        </li>
        <li>
          <img
            src="data:image/jpeg;base64,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"
            alt="Jellylorum"
          />
        </li>
      </ul>
    </div>
  );
};

export default ScrollImage;
