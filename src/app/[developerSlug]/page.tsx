
import Card from "@/components/card/card";
import Slider from "@/components/slider/slider";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { getDeveloperById, getDevelopers } from "@/lib/data";
import Link from "next/link";
type pageProps = {
    params: any
}

export const dynamic = "force-static"

export function generateStaticParams() {

    const developers = getDevelopers();
    return developers.map(d => ({ developerSlug: d.id }))

}

export default async function Page({ params }: pageProps) {

    const { developerSlug } = await params;
    const developer = getDeveloperById(developerSlug)
    return (
        <>
            {
                developer &&
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
                                <BreadcrumbPage>{developer?.name}</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                    <div className="mx-auto grid gap-5">

                        <h1 className="text-center text-3xl font-semibold">{developer.name}</h1>

                        <p className="max-w-[80ch] p-3">{developer.description}</p>

                    </div>
                    <section>
                        <h2 className=" font-semibold text-2xl  text-center mt-5">Compounds</h2>
                        <div className="w-full py-10 grid gap-10 grid-cols-[repeat(auto-fill,minmax(250px,1fr))]">

                            {
                                developer.compounds.map(d => {
                                    return d && <Card key={d.id} image={d.thumbnail} text={d.name} href={`/${developerSlug}/${d.id}`} />
                                })
                            }
                        </div>
                    </section>
                </section>
            }
        </>
    );
}
