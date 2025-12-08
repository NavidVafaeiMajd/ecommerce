"use client";

import { useCartSync } from "@/app/hook/useCartSync";

export default function SyncWrapper() {
  useCartSync();
  return null;
}
