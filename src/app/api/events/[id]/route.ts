import type { NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const baseUrl = process.env.TICKETMASTER_BASE_URL!;
    const api = process.env.TICKETMASTER_API_KEY!;
    const response = await fetch(`${baseUrl}/events/${id}?apikey=${api}`);

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    return Response.json(data);
  } catch (e) {
    console.error("API Error:", e);

    if (e instanceof Error) {
      return Response.json({ error: e.message }, { status: 500 });
    }

    return Response.json({ error: "Unknown error occurred" }, { status: 500 });
  }
}
