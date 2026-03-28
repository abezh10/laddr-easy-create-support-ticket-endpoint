export const starterticketsServiceItems = [
  { id: "starter-1", label: "Sample tickets service record", status: "draft" },
  { id: "starter-2", label: "Another tickets service record", status: "ready" },
];

export async function loadticketsServicePreview() {
  return Promise.resolve(starterticketsServiceItems);
}

export async function saveticketsServicePreview() {
  return Promise.resolve({
    ok: false,
    message: "The tickets service workflow is intentionally unfinished in Create Support Ticket Endpoint.",
  });
}
