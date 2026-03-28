export const ticketsRoute = {
  path: "/tickets",
  method: "GET",
};

export function handleTickets() {
  return {
    ok: true,
    route: "tickets",
    message: "Starter route for Create Support Ticket Endpoint",
  };
}
