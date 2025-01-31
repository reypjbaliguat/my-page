'use client';

import Image from 'next/image';
import logo from '@/public/logo.png';
function SideNav() {
    return (
        <div className="col-span-3 md:col-span-2 xl:col-span-1">
            <div className="h-full px-3 flex flex-col items-center">
                <Image
                    src={logo}
                    width={40}
                    height={40}
                    alt="logo"
                    className="rounded-full"
                />
                <hr className="text-neutral-500 w-2/3 mt-2" />
            </div>
        </div>
    );
}

export default SideNav;
