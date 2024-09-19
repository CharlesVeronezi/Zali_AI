import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { TemperatureSelector } from "./components/temperature-selector"
import ImageUpload from "./components/image-upload"
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import Image from "next/image"

export default async function Playground() {
    const session = await getServerSession()

    if (!session) {
        return redirect('/login')
    }

    return (
        <>
            <div className="h-screen flex-col flex">
                <div className="container flex flex-col items-start justify-between space-y-2 py-4 sm:flex-row sm:items-center sm:space-y-0 md:h-16 px-8 w-screen">
                    <Image src={'/zali_logo_escuro.png'} width={80} height={40} />
                    <div className="ml-auto flex w-full space-x-2 sm:justify-end">
                        <div className="hidden space-x-2 md:flex">
                            <Button variant="secondary">View code</Button>
                            <Button variant="secondary">Share</Button>
                        </div>
                    </div>
                </div>
                <Separator />
                <div className="container h-full py-6 px-8">
                    <div className="grid h-full items-stretch gap-6 md:grid-cols-[1fr_200px]">
                        <div className="hidden flex-col space-y-4 sm:flex md:order-2">
                            <div className="grid gap-2">
                                <span className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                    Mode
                                </span>
                            </div>
                            <TemperatureSelector defaultValue={[0.56]} />
                        </div>
                        <div className="md:order-1">
                            <div className="flex h-full flex-col space-y-4 ">
                                <div className="border border-slate-300 min-h-[550px] rounded-2xl flex justify-center items-center">
                                    <ImageUpload />
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Button>Submit</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}