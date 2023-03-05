import React from "react";
import { DashboardSidebar } from "../../../components";
import { Body, Container } from "../style";

export const DashboardHome = () => {
  return (
    <Container>
      <DashboardSidebar />
      <Body></Body>
    </Container>
  );
};
