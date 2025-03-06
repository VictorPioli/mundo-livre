import styled from "styled-components";

export const Card = styled.div`
  width: 100%;
  height: 200px;
  background-color: ${(props) => props.cor};
  border-radius: 10px;
  padding: 5px;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
  gap: 20px;
  margin-top: 10px;
  justify-content: center;
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 20%;
`;

export const Display = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 10%;
  margin-bottom: 20px;

  button {
    border-radius: 5px;
    border: 1px solid black;
    color: ${(props) => props.cor};
    margin: 0px 10px;
  }
`;

export const DisplayButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  button {
    width: 70%;
    border-radius: 5px;
    border: 1px solid black;
    margin: 5px;
    color: ${(props) => props.cor};

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const Color = styled.span`
  margin-top: 20px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
