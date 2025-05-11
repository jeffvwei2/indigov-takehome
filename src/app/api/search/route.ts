import db from "../../../db";
import { constituents } from "../../../db/schema";
import { sql } from 'drizzle-orm'

// search for specific term
export async function POST(req: Request) {
  try {

    const body = await req.json()
    const { searchTerm } = body
    const data = await db
    .select()
    .from(constituents)
    .where(sql`(
      to_tsvector('english', ${constituents.firstName}) ||
      to_tsvector('english', ${constituents.lastName}) ||
      to_tsvector('english', ${constituents.email})
      ) @@ plainto_tsquery('english', ${searchTerm})`
    );
    
    return Response.json({ data })
  } catch (err) {
    console.log('error in search', err)
    return new Response('Error in search', { status: 500 })
  }
}
