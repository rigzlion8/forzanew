import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Forza Security" },
      {
        name: "description",
        content:
          "Manned guarding, alarm response, electronic security and integrated risk management solutions across Kenya.",
      },
    ],
  }),
  component: ServicesLayout,
});

function ServicesLayout() {
  return <Outlet />;
}
