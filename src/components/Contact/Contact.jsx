import React from "react";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import s from "./Contact.module.css";
import { FaPhone } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <li className={s.contact}>
      <div>
        <p className={s.contactName}>
          <FaUser />
          <span className={s.contactSpan}>{name}</span>
        </p>
        <p className={s.contactNumber}>
          <FaPhone />
          <span className={s.contactSpan}>{number}</span>
        </p>
      </div>
      <div className={s.wrapper}>
        <button
          className={s.contactBtn}
          type="submit"
          onClick={() => dispatch(deleteContact(id))}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default Contact;
