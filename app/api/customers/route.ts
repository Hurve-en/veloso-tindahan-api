import { NextResponse } from "next/server";
import { db } from "@/db";
import { customers } from "@/db/schema";

export async function GET() {
  return NextResponse.json(await db.select().from(customers));
}

export async function POST(request: Request) {
  const { name, balance } = await request.json();
  const [row] = await db
    .insert(customers)
    .values({ name, balance })
    .returning();
  return NextResponse.json(row, { status: 201 });
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
