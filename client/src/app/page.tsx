import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function Home() {
    return (
        <main className="wrapper min-h-[calc(100vh-6rem)] space-y-4">
            <div className="pt-4 font-semibold">
                <h1 className="text-4xl">Pickleball at UCI URL Shortener</h1>
                <h6 className="text-lg text-muted-foreground">
                    This is the <i>minimalist</i> admin panel for viewing and
                    managing shortened links
                </h6>
            </div>

            <div>
                <div className="flex">
                    <p>The Github repository is hosted here:&nbsp;</p>
                    <Link href={"/"}>
                        <Button
                            variant={"link"}
                            className="h-fit p-0 text-base"
                        >
                            Github
                        </Button>
                    </Link>
                </div>
            </div>
        </main>
    );
}
