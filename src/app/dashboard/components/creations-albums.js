import Image from "next/image"
import { cn } from "@/lib/utils"

export function CreationsAlbum({
    album,
    aspectRatio = "portrait",
    width,
    height,
    className,
    ...props
}) {
    return (
        <div className={cn("space-y-3", className)} {...props}>
            <div className="overflow-hidden rounded-md">
                <Image
                    src={album.cover}
                    alt={album.name}
                    width={width}
                    height={height}
                    className={cn(
                        "h-auto w-auto object-cover transition-all hover:scale-105",
                        aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-square"
                    )}
                />
            </div>

            <div className="space-y-1 text-sm">
                <h3 className="font-medium leading-none">{album.name}</h3>
                <p className="text-xs text-muted-foreground">{album.artist}</p>
            </div>
        </div>
    )
}