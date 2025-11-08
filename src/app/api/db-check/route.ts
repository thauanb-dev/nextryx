import { neon } from '@neondatabase/serverless';
import { NextResponse } from 'next/server';

export async function GET() {
  const sql = neon(process.env.DATABASE_URL!);
  const table = await sql`SELECT * FROM db_process`;
  return NextResponse.json(table);
}
