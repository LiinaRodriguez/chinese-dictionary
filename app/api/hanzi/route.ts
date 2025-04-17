import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const char = req.nextUrl.searchParams.get("char");
  if (!char) {
    return NextResponse.json(
      { error: "No character provided" },
      { status: 400 }
    );
  }

  try {
    const apiUrl = `http://ccdb.hemiola.com/characters/mandarin/${encodeURIComponent(
      char
    )}?fields=kMandarin,kDefinition,uvalue`;

    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.status}`);
    }
    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error in proxy route", error);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
