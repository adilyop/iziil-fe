import styled from "styled-components";
import React from "react";

const Container = styled.div`
  height: 100vh;
  padding: 0 0.5rem;
`;

interface DefaultTemplateProps {
  children: React.ReactNode;
}

export function DefaultTemplate({ children }: DefaultTemplateProps) {
  return (
    <Container className="bg-white w-screen h-screen justify-center ">
      {children}
    </Container>
  );
}
