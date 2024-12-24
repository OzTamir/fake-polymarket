export async function onRequest(context) {
  const url = new URL(context.request.url);
  const imageUrl = url.searchParams.get("url");

  if (!imageUrl) {
    return new Response("Missing url parameter", { status: 400 });
  }

  try {
    const response = await fetch(imageUrl);
    console.log(response);
    const contentType = response.headers.get("content-type");

    // Create a new response with CORS headers
    return new Response(response.body, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, OPTIONS",
        "Content-Type": contentType || "image/png",
        "Cache-Control": "public, max-age=3600",
      },
    });
  } catch (error) {
    return new Response("Error fetching image", { status: 500 });
  }
}
