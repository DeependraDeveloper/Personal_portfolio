import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const Title = styled.p`
  color: gray;

  @media (max-width: 768px) {
    text-align: center;
  }
`;
