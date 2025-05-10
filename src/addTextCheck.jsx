//проверка ответа на вопрос №8 (homework week 28)

import { useState } from "react";

function AddTextCheck() {
  const [text, setText] = useState("");
  const [newText, setNewText] = useState("");
  const [error, setError] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    setText(e.target.value);
  };
  const buttonClick = () => {
    setNewText(text);
    text !== "" ? setError("") : setError("add your text, please");
  };
  return (
    <div>
      <h1>Add Text (checking question 8)</h1>
      <textarea onChange={handleChange} value={text} />
      <button onClick={buttonClick}>click</button>
      {error ? <p style={{ color: "red" }}>{error}</p> : <p>{newText}</p>}
    </div>
  );
}
export default AddTextCheck;
