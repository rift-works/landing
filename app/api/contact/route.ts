import { NextRequest, NextResponse } from "next/server";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

// Initialize S3 client. In local dev, falls back to profile 'riftworks'.
// In production on Vercel, uses AWS_ACCESS_KEY_ID / AWS_SECRET_ACCESS_KEY from env.
function getS3Client() {
  const region = process.env.AWS_REGION || "us-east-1";

  if (process.env.AWS_ACCESS_KEY_ID && process.env.AWS_SECRET_ACCESS_KEY) {
    return new S3Client({
      region,
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      },
    });
  }

  // Fallback to local profile 'riftworks' or standard AWS profile if configured
  return new S3Client({
    region,
    profile: process.env.AWS_PROFILE || "riftworks",
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, company, pillar, scope, locale } = body;

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    if (!scope || typeof scope !== "string" || scope.trim().length === 0) {
      return NextResponse.json({ error: "Scope is required" }, { status: 400 });
    }

    const timestamp = Date.now();
    const leadId = `lead_${timestamp}_${Math.random().toString(36).substring(2, 7)}`;
    const dateObj = new Date();
    const monthFolder = dateObj.toISOString().slice(0, 7); // e.g., 2026-11

    const leadData = {
      id: leadId,
      timestamp,
      receivedAt: dateObj.toISOString(),
      locale: locale || "es",
      email: email.trim(),
      company: company && typeof company === "string" ? company.trim() : null,
      pillar: pillar || "General",
      scope: scope.trim(),
      metadata: {
        country: request.headers.get("x-vercel-ip-country") || request.headers.get("cf-ipcountry") || "unknown",
        city: request.headers.get("x-vercel-ip-city") || null,
        userAgent: request.headers.get("user-agent") || null,
      },
    };

    const bucketName = process.env.LEADS_S3_BUCKET || "riftworks-test-leads";
    const s3Key = `leads/${monthFolder}/${leadId}.json`;

    const client = getS3Client();
    const command = new PutObjectCommand({
      Bucket: bucketName,
      Key: s3Key,
      Body: JSON.stringify(leadData, null, 2),
      ContentType: "application/json",
    });

    await client.send(command);

    return NextResponse.json({
      success: true,
      leadId,
      message: "Lead recorded successfully in S3",
    });
  } catch (err: unknown) {
    console.error("Error storing lead to S3:", err);
    return NextResponse.json(
      { error: "Internal server error storing lead" },
      { status: 500 }
    );
  }
}
