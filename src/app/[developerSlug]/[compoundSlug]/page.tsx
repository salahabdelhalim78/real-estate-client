
import Card, { UnitCard } from "@/components/card/card";
import Slider from "@/components/slider/slider";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { getCompound, getDeveloperById } from "@/lib/data";
import Link from "next/link";
type pageProps = {
    params: any
}

export const dynamic = "force-static"

export default async function Page({ params }: pageProps) {

    const { developerSlug, compoundSlug } = await params;
    const developer = getDeveloperById(developerSlug)
    const compound = developer?.compounds.find(c => c.id == compoundSlug)
    return (
        <>
            {
                compound &&
                <section className=" max-w-7xl mx-auto grid gap-7">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link href="/" >Developers</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>

                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link href={`/${developerSlug}`} >{developer?.name}</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>

                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>{compound?.name}</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                    <div className="mx-auto  grid gap-8">

                        <h1 className="text-center text-3xl font-semibold">{compound.name}</h1>

                        <p className="max-w-[80ch] mx-auto p-3">{compound.description}</p>

                        {compound.images?.length > 0 &&
                            <div className="w-full mx-auto max-w-3xl">
                                <Slider images={compound.images} />
                            </div>
                        }


                        {
                            compound.amenities?.length > 0 &&
                            <div>
                                <h2 className=" font-semibold text-2xl  text-center mt-5">Amenities</h2>
                                <ul className="grid gap-2 p-3">
                                    {compound.amenities.map((a, i) => <li key={String(a + i)}>{a}</li>)}
                                </ul>
                            </div>
                        }
                    </div>

                    <section>
                        <h2 className=" font-semibold text-2xl  text-center mt-5">Units</h2>
                        <div className="w-full py-10 flex flex-wrap">

                            {
                                compound.units.map(u => {
                                    return u && <UnitCard key={u.id} text={u.title} href={u.doc} />
                                })
                            }
                        </div>
                    </section>
                </section>
            }
        </>
    );
}
