export function onRequest(context) {
  return new Response(
    JSON.stringify({
      message: "Hello from Cloudflare Workers!",
    }),
    {
      headers: {
        "content-type": "application/json;charset=UTF-8",
      },
    },
  )
}
