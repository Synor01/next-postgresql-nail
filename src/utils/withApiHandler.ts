
export function withApiHandler(handler: (req: Request) => Promise<Response>) {
  return async (req: Request) => {
    try {
      const resp = await handler(req);
      return resp;
    } catch (err: unknown) {
      return new Response(JSON.stringify({ error: err }), {
        status: 500,
        headers: { 'content-type': 'application/json' },
      });
    }
  };
}