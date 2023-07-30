import styled from "styled-components";

export const Navbar = styled.nav`
  position: relative;
  background-color: #f6f6f7;
  display: flex;
  justify-content: flex-end;
  align-items: stretch;
  padding: 0rem 14.5rem;
  margin-top: 1.6rem;
  height: 3rem;


  @media (max-width: 768px) {
    padding: 0 2.5rem;
  }
`;

export const ListGroup = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const List = styled.li`
  width: 10rem;
  justify-content: center;
  height: 100%;
  display:flex;
  align-items: center;
  list-style: none;
  color: ${(props) => (props.isactive === "active" ? "#222" : "#888")};
  background-color: ${(props) => (props.isactive === "active" ? "#fff" : "transparent")};
  border: ${(props) => (props.isactive === "active" ? "1px solid #888" : "none")};
  border-bottom: none;
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    font-weight: 600;
  }
`;
