import Image from "next/image";
import Link from "next/link";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from "react";
import { UrlObject } from "url";
//not being used
export default function FooterComponent(){
    return(
        <>
            <div className="relative flex flex-wrap flex-row justify-around text-lg max-sm:text-sm primary-dynamic py-6 mt-10 rounded-md gap-y-5 gap-x-5 sm:duration-300">
                <Link href= 'https://github.com/nicktnc24' target="_blank" className="flex gap-3 items-center hover:scale-110 hover:transition hover:duration-300 active:duration-0 active:text-darktext dark:active:text-lighttext">
                    <Image
                        src = "/_art/github.jpg"
                        alt = "Github"
                        width = {40}
                        height = {40}
                        className="rounded-full"
                    />
                    Github
                </Link>
                <Link href= 'https://www.linkedin.com/in/nick-truong' target="_blank" className="flex gap-3 items-center hover:scale-110 hover:transition hover:duration-300 active:duration-0 active:text-darktext dark:active:text-lighttext">
                    <Image
                        src = "/_art/linkedin.png"
                        alt = "LinkedIn"
                        width = {40}
                        height = {40}
                        />
                    LinkedIn
                </Link>
                <div className="flex gap-3 items-center">
                    <Image
                            src = "/_art/number.png"
                            alt = "Number"
                            width = {40}
                            height = {40}
                        />
                    <div>281-919-4995</div>
                </div>
                <div className="flex gap-3 items-center">
                    <Image
                            src = "/_art/mail.png"
                            alt = "Email"
                            width = {40}
                            height = {40}
                        />
                    <div>nicktnc24@gmail.com</div>
                </div>
                <div className="absolute right-0 bottom-0 text-sm opacity-60">Built via Next.js, Tailwind</div>
            </div>
        </>
    );
}