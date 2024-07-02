import React from "react";
// import Image from "next/image";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

import { Button } from "./ui/button";

const Header = () => {
    const { sessionClaims } = auth();

    console.log(sessionClaims?.metadata);

    return (
        <div className="flex justify-end border-b px-8 py-1 drop-shadow-lg">
            {/* <Image
                src="/logo.png"
                alt="Pickleball at UCI Logo"
                className="aspect-square bg-cover"
                width={40}
                height={40}
            /> */}

            <div className="flex-center">
                {sessionClaims?.metadata?.role === "admin" && (
                    <Link href={"/admin"}>
                        <Button
                            className="font-medium text-red-500"
                            variant={"link"}
                        >
                            admin
                        </Button>
                    </Link>
                )}
                <Link href={"/dashboard"}>
                    <Button className="font-medium" variant={"link"}>
                        dashboard
                    </Button>
                </Link>
                <Link href={"/links"}>
                    <Button className="font-medium" variant={"link"}>
                        links
                    </Button>
                </Link>

                <div className="flex-center px-4">
                    <SignedOut>
                        <SignInButton>
                            <Button
                                className="h-fit px-0 py-2 font-semibold"
                                variant={"link"}
                            >
                                sign in
                            </Button>
                        </SignInButton>
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </div>
            </div>
        </div>
    );
};

export default Header;
