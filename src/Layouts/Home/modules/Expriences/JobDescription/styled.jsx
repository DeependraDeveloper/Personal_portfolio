import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;

  @media (max-width: 768px) {
    text-align: center;
  }

  h2 {
    font-size: 1.2rem;
    font-weight: 500;
  }

  p {
    font-size: 1rem;
    color: lightgray;
  }
`;
