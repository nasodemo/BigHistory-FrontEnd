import { NextResponse } from 'next/server';
 
export async function GET() {
  const res = await fetch('/', {
    headers: {
    },
    body: {
        200: '200',
    }
  });
  return NextResponse.send(200);
}