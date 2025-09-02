export const GET = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  try {
    const baseUrl = process.env.TICKETMASTER_BASE_URL;
    const api = process.env.TICKETMASTER_API_KEY;
    const response = await fetch(`${baseUrl}/events/${params.id}?apikey=${api}`);

    if (!response.ok) throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    const data = await response.json();
    return Response.json(data);
  } catch (e) {
  console.error("API Error:", e);
  if (e instanceof Error) {
    return Response.json({ error: e.message }, { status: 500 });
  }
  return Response.json({ error: "Unknown error occurred" }, { status: 500 });
  }
};
