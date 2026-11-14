export function GET() {
  return Response.json(
    { status: "ok", app: "instship-checker", framework: "nextjs", version: "1.0.0" },
    { headers: { "Cache-Control": "no-store" } },
  );
}
