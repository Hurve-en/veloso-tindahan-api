import { NextResponse } from "next/server"; // create http jason and 404 responses
import { ROWS } from "../../rows";

//runs when there is a get request
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }, //dynamic url
) {
  const { id } = await params; //gets id from the URL

  const row = ROWS.find((r) => r.id === id); //Search ROWS for an item whose id matches url

  return row ? NextResponse.json(row) : new NextResponse("", { status: 404 });//basically saying if there is row if yes JSON if no 404
}
