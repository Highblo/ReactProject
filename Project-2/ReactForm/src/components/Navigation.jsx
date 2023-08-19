import styled from "styled-components";

export const Navigation = () => {
  return (
    <SNav>
      <div className="logo">
        <img src="images/logo.png" alt="logo" />
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </SNav>
  );
};

const SNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8px;
  height: 72px;
  max-width: 1280px;
  margin: 0 auto;

  ul {
    display: flex;
    gap: 24px;
    font-weight: 500;
  }
`;
