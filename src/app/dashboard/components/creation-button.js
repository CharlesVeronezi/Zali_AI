"use client";
import { Button } from "@/components/ui/button";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

export function CreationButton() {
  const router = useRouter();

  return (
    <Button onClick={() => router.push("/playground")}>
      <PlusCircleIcon className="mr-2 h-4 w-4" />
      Criar
    </Button>
  );
}
