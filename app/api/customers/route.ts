import { NextResponse } from "next/server";
import { ROWS } from "../rows";

export async function GET() {
  return NextResponse.json(ROWS);
}

export async function POST(request: Request) {
  const { name, balance } = await request.json(); // reads json sent by client

  const row = { //new row
    id: String(Date.now()),
    name,
    balance,
    lastPaid: "never",
  };

  ROWS.push(row);// add to new row push()

  return NextResponse.json(row, { status: 201 }); //send new row back 201 means successful
}

/*
    for temporary slowing down API to test loading state

    to slow down: 

    export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return NextResponse.json(ROWS);
}

    original:

    export async function GET() {
  return NextResponse.json(ROWS);
}

*/
