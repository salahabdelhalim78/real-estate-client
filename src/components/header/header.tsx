
import Link from "next/link"
import logo from "../../../public/logo.webp"
import Image from "next/image"



export default function Header() {

    return (
        <>

            <header className="max-w-screen fixed w-full top-0 bg-background z-50">
                <section className=" flex align-middle justify-between items-center px-2 py-1 pr-5">

                    <Link href="/" aria-label="logo">
                        <Image width={50} height={50} alt="logo" src={logo} />
                    </Link>

                    <nav className="flex gap-10 ">

                        <Link href="/">Developers</Link>

                        <Link href="/contact">Contact</Link>

                    </nav>
                </section>
            </header>

        </>
    )
}



