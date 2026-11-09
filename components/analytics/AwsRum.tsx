"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import type { AwsRum as AwsRumType } from "aws-rum-web";

const APPLICATION_ID = "d62150d4-6fc5-4d4b-bc19-a89cbb6e0476";
const APPLICATION_VERSION = "1.0.0";
const APPLICATION_REGION = "us-east-1";

export function AwsRum() {
  const pathname = usePathname();
  const rumRef = useRef<AwsRumType | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let mounted = true;

    import("aws-rum-web")
      .then(({ AwsRum: AwsRumClient }) => {
        if (!mounted || rumRef.current) return;
        try {
          rumRef.current = new AwsRumClient(
            APPLICATION_ID,
            APPLICATION_VERSION,
            APPLICATION_REGION,
            {
              sessionSampleRate: 1,
              guestRoleArn: "arn:aws:iam::312392183680:role/RiftWorks_RUM_Unauth_Role",
              identityPoolId: "us-east-1:6b0476b4-5e54-4df1-b03b-89cf5e61bd4d",
              endpoint: "https://dataplane.rum.us-east-1.amazonaws.com",
              telemetries: ["errors", "performance", "http"],
              allowCookies: true,
              enableXRay: false,
            },
          );
        } catch {
          // Silent fallback if blocked by browser adblockers or strict shields
        }
      })
      .catch(() => {
        // Dynamic import failure
      });

    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    if (rumRef.current && pathname) {
      try {
        rumRef.current.recordPageView(pathname);
      } catch {
        // no-op
      }
    }
  }, [pathname]);

  return null;
}
