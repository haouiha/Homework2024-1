"use client";

import React from "react";
import { ContainerStyled } from "./styled";

type ContainerProps = {
  children: React.ReactNode;
};

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <ContainerStyled>{children}</ContainerStyled>;
};

export default Container;
