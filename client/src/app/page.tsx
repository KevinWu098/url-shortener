import Link from "next/link";

export default async function Home() {
    return (
        <main className="wrapper flex-center min-h-[calc(100vh-6rem)] text-3xl font-semibold md:text-5xl">
            <Link
                href={"https://github.com/KevinWu098/kTemp"}
                target="_blank"
                referrerPolicy="no-referrer"
                className="underline"
            >
                Hello World 💖
            </Link>
        </main>
    );
}
