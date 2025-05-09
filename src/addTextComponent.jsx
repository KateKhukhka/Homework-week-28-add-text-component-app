import { useState } from "react";
import "./addTextComponent.css";

function AddTextComponent() {
  const [text, setText] = useState("");
  const [paragraph, setParagraph] = useState("");

  const onClick = () => {
    setParagraph(text.toUpperCase());
  };

  const handleChange = (e) => {
    e.preventDefault();
    setText(e.target.value);
  };

  return (
    <>
      <h1>Add and Transform Your Text</h1>
      <div className="text-input-wrapper">
        <textarea onChange={handleChange} value={text} />
        <button onClick={onClick}>click</button>
      </div>
      <div className="text-result-wrapper">
        <p style={{ color: "rgb(165, 47, 165)" }}>{paragraph}</p>
      </div>
    </>
  );
}

export default AddTextComponent;
