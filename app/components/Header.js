import Link from "next/link"

export default function Header() {
    return (
        <nav className="bg-blue-800 p-4">
            <ul className="flex justify-evenly text-2xl font-bold">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/protected/server">Server</Link></li>
                <li><Link href="/protected/client">Client</Link></li>
            </ul>
        </nav>
    )
}