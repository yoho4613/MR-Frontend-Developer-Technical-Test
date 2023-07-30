import styled from "styled-components";

export const Container = styled.div`
  padding: 3rem;
  display: flex;
  justify-content: space-evenly;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  @media (max-width: 480px) {
    padding: 1.5rem;
  }
`;

export const Img = styled.img`
  height: 63rem;
  @media (max-width: 768px) {
    width: 90vw;
    max-width: 30rem;
    height: auto;
    margin: 0 auto 3rem;
    margin-bottom: 3rem;
  }

  @media (max-width: 480px) {
    max-width: none;
  }
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 49rem;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Title = styled.h2`
  font-weight: lighter;
`;

export const Price = styled.h3`
  font-size: 1.4rem;
  margin: 2.5rem 0;
  border-top: 1px solid rgba(204, 204, 204, 0.3);
  border-bottom: 1px solid rgba(204, 204, 204, 0.3);
  border-opacity: 0.2;
  padding: 1rem 0;

  @media (max-width: 480px) {
    border: none;
    margin: 1.5rem 0;
    font-size: 1.7rem;
  }
`;

export const Description = styled.p`
  color: #888;
  line-height: 2rem;
  font-size: 1.3rem;
`;

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ButtonContainer = styled.div`
  margin-top: 2.5rem;
`;

export const Label = styled.span`
  color: #888;
  font-size: 1.3rem;
  font-weight: 600;
`;

export const Size = styled.span`
  color: #222;
`;

export const ButtonGroup = styled.div`
  margin: 1.4rem 0;
`;

export const Button = styled.button`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 1.5rem;
  color: ${(props) => (props.isactive === "active" ? "#000" : "#888")};
  margin-right: 0.3rem;
  background-color: ${(props) =>
    props.isactive === "active" ? "#ccc" : "transparent"};
  font-size: 1.1rem;
  cursor: pointer;
  transition: 0.3s linear;
  &:hover {
    background-color: ${(props) =>
      props.isactive === "active" ? "#c1c1c1" : "#ccc"};
    color: #000;
  }
`;

export const SubmitButton = styled.button`
  border: 2px solid #222;
  padding: 0.7rem 2rem;
  font-size: 1.8rem;
  background-color: transparent;
  font-size: 1.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s linear;
  border-radius: 5px;
  margin-top: 1rem;
  &:hover {
    background-color: #ccc;
    color: #fff;
  }
`;

export const QuantityInput = styled.input`
  padding: 1rem 1rem;
  outline: none;
  width: 7rem;
  -moz-appearance: textfield;
`;

export const Warning = styled.p`
  color: #ff0000;
`;
