import Card from "@/components/card/card";
import { getDevelopers } from "@/lib/data";

import Link from "next/link";


export default async function Page() {


    const developers = getDevelopers();

    return (
        <>
            {developers && developers.length > 0 &&
                <section className=" max-w-7xl mx-auto">

                    <h1 className="text-center text-3xl mb-5 italic">Welcom Mr Adam</h1>
                    <h2 className="text-center text-2xl">Developers</h2>
                    <div className="w-full py-10 grid gap-10 grid-cols-[repeat(auto-fill,minmax(250px,1fr))]">

                        {
                            developers.map(d => {
                                return d && <Card key={d.id} image={d.logo} text={d.name} href={`/${d.id}`} />
                            })
                        }
                    </div>
                </section>
            }
        </>
    );
}
