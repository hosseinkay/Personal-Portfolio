"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { withBasePath } from "@/lib/utils";

const TARGET = "/projects/pharmacy-access-optimization/";

export default function PharmacyDesertAppRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace(TARGET);
  }, [router]);

  return (
    <>
      <meta httpEquiv="refresh" content={`0; url=${withBasePath(TARGET)}`} />
      <div className="mx-auto flex max-w-content flex-col items-start gap-4 px-6 py-32">
        <p className="text-fg-muted">This project page has moved.</p>
        <Link href={TARGET} className="text-fg underline-offset-4 hover:text-accent hover:underline">
          Continue to Chicago Pharmacy Access Optimization →
        </Link>
      </div>
    </>
  );
}
