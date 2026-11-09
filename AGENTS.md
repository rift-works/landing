<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# RiftWorks Landing — Architecture & Operational Context

## Infrastructure & Hosting (CRITICAL)

- **Platform:** **AWS Amplify Hosting** (`WEB_COMPUTE` / Next.js SSR). **Do NOT confuse with or reference Vercel**.
- **Amplify App ID:** `d28ecfkdt29gnd` (`name: landing`).
- **AWS Region:** `us-east-2` (Ohio).
- **AWS Account:** `312392183680` (AWS CLI Profile: `riftworks`).
- **Production Branch:** `master`. Any push to `origin master` triggers an automatic Amplify build and deployment.
- **DNS & Routing:**
  - Route 53 Hosted Zone: `weareriftworks.com.` (`Z00926333QATDMCTF7CIF`).
  - Distribution: Amplify managed CloudFront (`d1o7lugwp2fcie.cloudfront.net`).
- **Related AWS Services:**
  - **AWS S3:** `s3://riftworks-test-leads/leads/` (`us-east-1`) for structured JSON leads ingested via `/api/contact`.
  - **Amazon CloudWatch RUM:** App Monitor `riftworks-landing` (`us-east-1`, ID: `d62150d4-6fc5-4d4b-bc19-a89cbb6e0476`) via Cognito Identity Pool `RiftWorks_RUM_Identity_Pool` (`us-east-1:6b0476b4-5e54-4df1-b03b-89cf5e61bd4d`).

