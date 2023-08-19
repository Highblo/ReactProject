import React from "react";
import { styled } from "styled-components";

export function ContactHeader() {
  return (
    <SContactSection>
      <h1>CONTACT US</h1>
      <p>
        LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU!
        WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN
        REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE,
        EMAIL, OR SOCIAL MEDIA.{" "}
      </p>
    </SContactSection>
  );
}

const SContactSection = styled.div`
  max-width: 1000px;
  margin: 36px auto 0 auto;

  h1 {
    font-size: 48px;
    font-weight: 600;
    max-width: 80%;
  }

  p {
    font-weight: 500;
  }
`;