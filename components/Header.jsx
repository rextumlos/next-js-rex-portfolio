import React from 'react';
import Link from "next/link";

// Components
import Nav from "@/components/Nav";
import {Button} from "@/components/ui/button";
import MobileNav from "@/components/MobileNav";

const Header = () => {
    return (
        <header className="py-8 xl:py-12 text-white">
            <div className="container mx-auto flex justify-between items-center">
                {/* logo */}
                <Link href="/">
                    <p className="text-4xl font-semibold">
                        Rex<span className="text-accent">.</span>
                    </p>
                </Link>

                {/*  desktop nav  */}
                <div className="hidden xl:flex items-center gap-8">
                    <Nav />
                    <Link href="/contact">
                        <Button>Hire me</Button>
                    </Link>
                </div>

                {/*  mobile nav  */}
                <div className="xl:hidden">
                    <MobileNav />
                </div>
            </div>
        </header>
    );
};

export default Header;