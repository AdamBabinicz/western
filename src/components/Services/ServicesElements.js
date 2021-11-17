import styled from "styled-components";

export const ServicesContainer = styled.div`
  /* height: 800px; */
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;
  background: #fff;
  padding: 6rem 0;

  @media only screen and (max-width: 768px) {
    /* height: 1100px; */
  }

  @media only screen and (max-width: 480px) {
    /* height: 1300px; */
  }
`;

export const ServicesWrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 16px;
  align-items: center;
  padding: 0 50px;

  @media only screen and (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ServicesCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border-radius: 10px;
  max-width: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.02);
    cursor: pointer;
  }
`;

export const ServicesIcon = styled.img`
  height: 260px;
  width: 260px;
  margin-bottom: 10px;
  object-fit: cover;
`;

export const ServicesH2 = styled.h2`
  font-size: 2.5rem;
  font-family: "Western";
  color: #333;
  margin-bottom: 64px;

  @media only screen and (max-width: 480) {
    font-size: 2rem;
  }
`;

export const ServicesH3 = styled.h3`
  font-size: 1.3rem;
  font-family: "Smokum";
  margin-bottom: 10px;
  color: gray;
`;

export const ServicesP = styled.p`
  font-size: 1rem;
  font-family: "JFRingmaster";
  text-align: center;
`;
