import { NextResponse } from "next/server";
import navData from "@/data/navigation.json";

export async function GET() {
  return NextResponse.json(navData);
}
