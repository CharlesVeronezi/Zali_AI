"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export function HeaderPlayground() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-start justify-between space-y-2 py-4 sm:flex-row sm:items-center sm:space-y-0 md:h-16 px-8 w-screen">
      <a className="cursor-pointer" href="/dashboard">
        <Image
          src={"/zali_logo_escuro.png"}
          width={80}
          height={40}
          alt="Zali AI"
        />
      </a>
      <div className="ml-auto flex w-full space-x-2 sm:justify-end">
        <div className="hidden space-x-2 md:flex">
          <Button variant="secondary" onClick={() => router.push("/dashboard")}>
            Home
          </Button>
          <Button variant="secondary">Share</Button>
        </div>
      </div>
    </div>
  );
}
