import db from "../../../db";
import { constituents } from "../../../db/schema";
import { parse } from 'json2csv'

// get CSV of constituents
export async function GET() {
  try {
    const data = await db.select()
      .from(constituents)
      .orderBy(constituents.createdAt);

    const csv = parse(data, {
      fields: ['email', 'firstName', 'lastName', 'createdAt','updatedAt'], // your column names
    });

    return new Response(csv, {
      status: 200,
      headers: {
        'Content-Type': 'text/csv',
        'Content-Disposition': `attachment; filename="constituents_${new Date().toISOString().slice(0, 10)}.csv"`,
      },
    });
  } catch (err) {
    console.log('CSV error',err)
    return new Response("Error fetching CSV", { status: 500 })
  }
}