"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ProximaRedirectPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/products/proxima-ai");
  }, [router]);

  return (
    <div className="min-h-screen bg-[#050917] flex items-center justify-center text-white font-mono text-xs tracking-wider">
      REDIRECTING TO PROXIMA-AI...
    </div>
  );
}
