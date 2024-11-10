import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import HeaderNav from "../layouts/HeaderNav";
import FooterNav from "../layouts/FooterNav";
import { Layout } from "antd";
import { ModeProvider } from "../context/ModeContext";

const pages = [
  { key: "1", label: <a href="/">Home</a> },
  { key: "2", label: <a href="/ricambi">Ricambi</a> },
  { key: "3", label: <a href="/servizi">Servizi</a> },
];

export const Route = createRootRoute({
  component: () => (
    <>
      <ModeProvider>
        <Layout>
          <HeaderNav items={pages} />
          <Layout>
            <hr />
            <Outlet />
          </Layout>
          <FooterNav />
        </Layout>
      </ModeProvider>
      <TanStackRouterDevtools />
    </>
  ),
});
