import React, { useState } from "react";

function JokeForm({onAddJoke}) {
  const [formData, setFormData] = useState({joke: ""})

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:4000/jokes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({joke: formData.joke})
    })
      .then((r) => r.json())
      .then(newJoke=> onAddJoke(newJoke))
  }

  return (
    <div className="new-plant-form">
      <h2>New Joke</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="joke" placeholder="Joke name" value={formData.joke} onChange={handleChange}/>
        <button type="submit">Add Joke</button>
      </form>
    </div>
  );
}

export default JokeForm;
