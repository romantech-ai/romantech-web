import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null)
  if (!body) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }

  const apiUrl = process.env.INBOUND_API_URL
  const apiSecret = process.env.INBOUND_API_SECRET
  if (!apiUrl || !apiSecret) {
    console.error('Missing INBOUND_API_URL or INBOUND_API_SECRET')
    return NextResponse.json({ error: 'Server misconfigured' }, { status: 500 })
  }

  const res = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiSecret}`,
    },
    body: JSON.stringify(body),
  })

  const data = await res.json().catch(() => ({}))

  if (!res.ok) {
    return NextResponse.json(
      { error: data.error || 'Error processing request' },
      { status: res.status }
    )
  }

  return NextResponse.json({ ok: true })
}
