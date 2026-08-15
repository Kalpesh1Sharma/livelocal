import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

    if (!webhookUrl) {
      console.error("GOOGLE_SHEETS_WEBHOOK_URL is not configured");

      return NextResponse.json(
        { success: false, error: "Server configuration error" },
        { status: 500 }
      );
    }

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      redirect: "follow",
    });

    if (!response.ok) {
      console.error(
        "Google Apps Script returned:",
        response.status,
        response.statusText
      );

      return NextResponse.json(
        { success: false, error: "Could not save enquiry" },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Enquiry submission error:", error);

    return NextResponse.json(
      { success: false, error: "Something went wrong" },
      { status: 500 }
    );
  }
}