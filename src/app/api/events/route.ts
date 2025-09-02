export const GET = async (request: Request) => {
  try {
    const requestUrl = new URL(request.url)
    const page = requestUrl.searchParams.get("page") || '0';
    const size = requestUrl.searchParams.get("size") || '20';

    const keyword = requestUrl.searchParams.get("keyword") || '';
    const city = requestUrl.searchParams.get('city') || '';
    const startDate = requestUrl.searchParams.get("startDate") || "";
    const endDate = requestUrl.searchParams.get("endDate") || "";
    const category = requestUrl.searchParams.get("category") || "";

    const baseUrl = process.env.TICKETMASTER_URL;

    if (!baseUrl) {
      throw new Error(
        "TICKETMASTER_URL is not defined in environment variables"
      );
    }

    let finalUrl = `${baseUrl}&page=${page}&size=${size}`

    if (keyword) finalUrl += `&keyword=${keyword}`
    if (city) finalUrl += `&city=${city}`;
    if (startDate) finalUrl += `&startDate=${startDate}`;
    if (endDate) finalUrl += `&endDate=${endDate}`;
    if (category) finalUrl += `&classificationName=${encodeURIComponent(category)}`;

    const response = await fetch(finalUrl);

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
};
