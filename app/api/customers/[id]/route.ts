import { NextResponse } from "next/server";
import { db } from "@/db";
import { eq } from "drizzle-orm";
import { customers } from "@/db/schema";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const [row] = await db.select().from(customers).where(eq(customers.id, id));
  return row ? NextResponse.json(row) : new NextResponse("", { status: 404 });
}
