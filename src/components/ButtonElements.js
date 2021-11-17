import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled.button`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "#01BF71" : "#010606")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#010606" : "#fff")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  font-family: "JFRingmaster";
  letter-spacing: 2px;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: ${({ primary }) => (primary ? "#fff" : "#01BF71")};
    border: 1px solid ${({ dark2 }) => (dark2 ? "#01BF71" : "transparent")};
    color: ${({ dark }) => (dark ? "#01BF71" : "#010606")};
  }
`;
