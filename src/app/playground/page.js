import { Separator } from "@/components/ui/separator";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { HeaderPlayground } from "./components/header-playground";
import { Toaster } from "react-hot-toast";
import { Playgrounder } from "./components/playgrounder";

export default async function Playground() {
  const session = await getServerSession();

  if (!session) {
    return redirect("/login");
  }

  return (
    <>
      <Toaster />
      <div className="h-screen flex-col flex">
        <HeaderPlayground />
        <Separator />
        <div className="h-full py-6 px-8 w-screen">
          <Playgrounder />
        </div>
      </div>
    </>
  );
}
