import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }

  p {
    margin: 0;
    marign-top: 10px;
    text-align: center;
  }

  img {
    width: 80px;
    height: 80px;
    object-fit: contain;
  }
`;

export const Pill = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-evenly;
  background-color: lightgray;
  padding: 15px;
  border-radius: 50%;
`;

export const Percentage = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
`;
