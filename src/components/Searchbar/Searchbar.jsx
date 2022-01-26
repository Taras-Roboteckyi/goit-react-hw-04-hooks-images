import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import styles from "./Searchbar.module.css";

export default function Searchbar({ formSubmit }) {
  const [name, setName] = useState("");

  const handleNameChange = (event) => {
    event.preventDefault();

    setName(event.currentTarget.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (name.trim() === "") {
      toast.error("Enter the name of the picture");
      return;
    }

    formSubmit(name);

    reset();
  };

  const reset = () => setName("");

  const { Searchbar, SearchForm, button, buttonLabel, input } = styles;

  return (
    <header className={Searchbar}>
      <form className={SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={button}>
          <BsSearch className={buttonLabel} />
        </button>

        <input
          className={input}
          name="name"
          type="text"
          autoComplete="off"
          autoFocus={true}
          placeholder="Search images and photos"
          value={name}
          onChange={handleNameChange}
        />
      </form>
    </header>
  );
}
