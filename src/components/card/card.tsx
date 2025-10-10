
import Image from "next/image"
import Link from "next/link"
import fileImg from "../../../public/file.svg"
export type CardProps = {

    image?: string,
    text?: string
    href?: string
}

export default function Card(item: CardProps) {

    return (
        <div className="relative">
            {
                item.image &&
                <div className=" relative aspect-[4/3]">
                    <Image
                        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"

                        alt={item.text || "image"} src={item.image} fill className=" w-full h-full max-w-screen object-contain" />
                </div>
            }
            {
                item.text &&
                <p className="p-3 bottom-0 left-0 bg-foreground/10 text-lg font-anton tracking-wide w-full">{item.text}</p>
            }
            {
                item.href &&
                <Link aria-label={`link to ${item.text}`} href={item.href}
                    className=" block hover:bg-background/50 transition-all
                    absolute w-full h-full top-0 left-0 cursor-pointer"></Link>
            }
        </div>
    )
}
export function UnitCard(item: CardProps) {

    return (
        <div className="relative">

            <div className=" relative flex bg-foreground/10 py-3 px-6 justify-between gap-5 rounded-2xl">
                {
                    item.text &&
                    <p className="text-lg ">{item.text}</p>
                }
                <Image
                    sizes="100px"
                    width={25} height={25}
                    alt={item.text || "image"} src={fileImg} className=" w-[25px] aspect-square max-w-screen object-contain" />
            </div>
            {
                item.href &&
                <a target="_blank" aria-label={`link to ${item.text}`} href={item.href}
                    className=" block hover:bg-background/50 transition-all
                    absolute w-full h-full top-0 left-0 cursor-pointer"></a>
            }
        </div>
    )
}