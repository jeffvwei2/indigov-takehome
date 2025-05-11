import db from "../../../db";
import { constituents } from "../../../db/schema";
import { constituentData } from "../../../db/seed/constituents";

// Seed DB with mock data
export async function POST() {
  const data = await db.insert(constituents).values(constituentData).returning();

  return Response.json({ data });
}
