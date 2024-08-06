import React from "react";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import "reset-css";
import s from "./App.module.css";

import { useSelector } from "react-redux";
import { selectContacts } from "../redux/contactsSlice";

const App = () => {
  const contacts = useSelector(selectContacts);

  return (
    <div>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList contacts={contacts} />
    </div>
  );
};

export default App;
