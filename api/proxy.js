export const config = { runtime: 'edge' };

export default async function handler(request) {
  return new Response("hello world321123", {
    status: 200,
    headers: {
      "content-type": "text/plain"
    }
  });
}