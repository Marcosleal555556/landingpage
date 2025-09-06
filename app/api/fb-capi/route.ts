import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";           // usa Node runtime
export const dynamic = "force-dynamic";    // sem cache

const PIXEL_ID = process.env.FB_PIXEL_ID;
const ACCESS_TOKEN = process.env.FB_ACCESS_TOKEN;
const TEST_EVENT_CODE = process.env.FB_TEST_EVENT_CODE; // opcional

type BodyIn = {
  event_name?: string;
  event_id?: string;
  event_source_url?: string;
  // opcionalmente você pode mandar user_data (email/phone SHA256) no futuro
};

export async function POST(req: NextRequest) {
  try {
    if (!PIXEL_ID || !ACCESS_TOKEN) {
      return NextResponse.json(
        { ok: false, error: "FB_PIXEL_ID/FB_ACCESS_TOKEN ausentes." },
        { status: 500 }
      );
    }

    const body = (await req.json().catch(() => ({}))) as BodyIn;

    const event_name = body.event_name || "Lead";
    const event_id = body.event_id || crypto.randomUUID();
    const event_source_url =
      body.event_source_url ||
      req.headers.get("referer") ||
      req.nextUrl.origin;

    // Dados do cliente para correspondência
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "";
    const ua = req.headers.get("user-agent") || "";
    const fbp = req.cookies.get("_fbp")?.value;
    const fbc = req.cookies.get("_fbc")?.value;

    // Monta o evento conforme a documentação
    const event = {
      event_name,
      event_time: Math.floor(Date.now() / 1000),
      event_id,
      event_source_url,
      action_source: "website",
      user_data: {
        client_ip_address: ip || undefined,
        client_user_agent: ua || undefined,
        fbp,
        fbc,
      },
    };

    const payload: Record<string, unknown> = {
      data: [event],
    };
    if (TEST_EVENT_CODE) payload["test_event_code"] = TEST_EVENT_CODE;

    const url = `https://graph.facebook.com/v20.0/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`;
    const fbRes = await fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
      // evita que proxies guardem
      cache: "no-store",
    });

    if (!fbRes.ok) {
      const text = await fbRes.text();
      return NextResponse.json(
        { ok: false, error: "Facebook API error", details: text },
        { status: 500 }
      );
    }

    // Opcional: você pode ler o JSON, mas não exponha tokens.
    // const fbJson = await fbRes.json();

    return NextResponse.json(
      { ok: true, event_id, sent: true },
      {
        status: 200,
        headers: { "cache-control": "no-store" },
      }
    );
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: String(err) },
      { status: 500 }
    );
  }
}
