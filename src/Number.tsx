import React from "react";
import styled from "styled-components";

interface IContainer {
  isBlue: boolean;
}

const Container = styled.span<IContainer>`
  color: ${(props) => (props.isBlue ? "blue" : "black")};
`;

interface IProps {
  count: number;
}

const Number: React.FunctionComponent<IProps> = ({ count }) => (
  <Container isBlue={count > 10}>{count}</Container>
);

export default Number;
