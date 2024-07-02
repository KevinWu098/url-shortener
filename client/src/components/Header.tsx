import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "./ui/button";

const Header = () => {
    return (
        <div className="flex justify-end border-b px-8 py-1 drop-shadow-lg">
            {/* <Image
                src="/logo.png"
                alt="Pickleball at UCI Logo"
                className="aspect-square bg-cover"
                width={40}
                height={40}
            /> */}

            <div className="">
                <Link href={"/admin"}>
                    <Button className="font-semibold" variant={"link"}>
                        admin
                    </Button>
                </Link>
                <Link href={"/links"}>
                    <Button className="font-semibold" variant={"link"}>
                        links
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default Header;
