import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { Button } from "./Button/Button";
import styled from "styled-components";
import { useState } from "react";

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    setName(e.target[0].value);
    setEmail(e.target[1].value);
    setText(e.target[2].value);
  };

  return (
    <SContainer>
      <div className="contact_form">
        <div className="top_btn">
          <Button icon={<MdMessage fontSize="24px" />}>VIA SUPPORT CHAT</Button>
          <Button icon={<FaPhoneAlt fontSize="24px" />}>VIA CALL</Button>
        </div>
        <Button outline={true} icon={<FaPhoneAlt fontSize="24px" />}>
          VIA CALL
        </Button>
        <form onSubmit={onSubmit}>
          <div className="form_control">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className="form_control">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" />
          </div>
          <div className="form_control">
            <label htmlFor="text">Text</label>
            <textarea name="text" row="8"></textarea>
          </div>
          <div className="submit_btn">
            <Button>SUMBIT BUTTON</Button>
          </div>
          <p>{`Name: ${name}`}</p>
          <p>{`Email: ${email}`}</p>
          <p>{`Text: ${text}`}</p>
        </form>
      </div>
      <div className="contact_image">
        <img src="images/contact.svg" alt="contactimage" />
      </div>
    </SContainer>
  );
};

const SContainer = styled.section`
  display: flex;
  max-width: 1000px;
  margin: 0 auto;
  margin-top: 40px;
  align-items: end;

  .contact_form {
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding-bottom: 20px;

    form {
      display: flex;
      flex-direction: column;
      padding-bottom: 20px;
      gap: 20px;

      .submit_btn {
        display: flex;
        justify-content: end;
      }
    }
  }

  .top_btn {
    display: flex;
    gap: 32px;
  }

  .form_control {
    display: flex;
    flex-direction: column;
    width: 100%;
    position: relative;

    label {
      position: absolute;
      top: -12px;
      left: 10px;
      background-color: white;
      padding: 0 10px;
      font-size: 14px;
    }

    input {
      height: 40px;
      padding: 0 8px;
    }

    textarea {
      padding: 8px;
    }
  }
`;
