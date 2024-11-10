import "./App.css";
import "antd/dist/reset.css";
import { routeTree } from "./routeTree.gen";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import { ModeProvider } from "./context/ModeContext";
import React from "react";

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const App: React.FC = () => (
  <ModeProvider>
    <RouterProvider router={router} />
  </ModeProvider>
);

export default App;
