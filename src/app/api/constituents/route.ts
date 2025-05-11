import db from "../../../db";
import { constituents } from "../../../db/schema";

// Get all constituents
export async function GET() {
  try {
    const data = await db.select().from(constituents).orderBy(constituents.createdAt);
    
    return Response.json({ data });
  } catch (err) {
    console.log('error fetching constituents', err)
    return new Response("Error fetching constituents", { status: 500 })
  }
}

// Add new constituent
export async function POST(req: Request) {
  console.log('posting new constituent')
  try {
    const body = await req.json()
    const { firstName, lastName, email: rawEmail } = body
    const data = await db
    .insert(constituents)
    .values({
      firstName,
      lastName,
      email: rawEmail.toLowerCase()
    })
    .onConflictDoUpdate({
      target: constituents.email,
      set: {
        firstName,
        lastName,
        updatedAt: new Date()
      }
    })
    .returning()

    return Response.json({ data })
  } catch (err) {
    console.log('error adding new constituent',err)
    return new Response("Error adding constituent", { status: 500 })
  }
}
