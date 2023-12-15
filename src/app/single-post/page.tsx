"use client";
import React from "react";
import { useSearchParams } from "next/navigation";

export default function SinglePost() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      singlepost by {id}
    </div>
  );
}
