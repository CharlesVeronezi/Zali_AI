import { UserNav } from './components/user-nav'
import { Separator } from "@/components/ui/separator"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { CreationsAlbum } from "./components/creations-albums"
import { listenNowAlbums, madeForYouAlbums } from "./data/albums"
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { CreationButton } from './components/creation-button'

export default async function Dashboard() {

    const session = await getServerSession()

    if (!session) {
        return redirect('/login')
    }

    return (
        <>
            <div className="flex h-full flex-1 flex-col space-y-8 p-8">
                <div className="flex items-center justify-between space-y-2">
                    <div>
                        <h2 className="text-2xl font-bold tracking-tight">Bem vindo {session.user.name.split(" ")[0]}</h2>
                    </div>
                    <div className="flex items-center space-x-2">
                        <UserNav session={session} />
                    </div>
                </div>
                <div className="flex items-center space-x-6">
                    <h2 className="text-2xl font-semibold tracking-tight">
                        Suas Criações
                    </h2>
                    <CreationButton />
                </div>
                <Separator className="my-4" />
                <div className="relative">
                    <ScrollArea>
                        <div className="flex space-x-4 pb-4">
                            {listenNowAlbums.map((album) => (
                                <CreationsAlbum
                                    key={album.name}
                                    album={album}
                                    className="w-[200px]"
                                    aspectRatio="square"
                                    width={200}
                                    height={200}
                                />
                            ))}
                        </div>
                        <ScrollBar orientation="horizontal" />
                    </ScrollArea>
                </div>
                <div className="mt-6 space-y-1">
                    <h2 className="text-2xl font-semibold tracking-tight">
                        Made for You
                    </h2>
                    <p className="text-sm text-muted-foreground">
                        Your personal playlists. Updated daily.
                    </p>
                </div>
                <Separator className="my-4" />
                <div className="relative">
                    <ScrollArea>
                        <div className="flex space-x-4 pb-4">
                            {madeForYouAlbums.map((album) => (
                                <CreationsAlbum
                                    key={album.name}
                                    album={album}
                                    className="w-[150px]"
                                    aspectRatio="square"
                                    width={150}
                                    height={150}
                                />
                            ))}
                        </div>
                        <ScrollBar orientation="horizontal" />
                    </ScrollArea>
                </div>
            </div>
        </>
    )
}