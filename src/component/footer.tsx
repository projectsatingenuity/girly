import Link from "next/link";

export default function Footer(){
    return(
        <footer className="w-[1440px] h-[132px] mx-auto px-[71px] py-9 flex justify-center items-center border-t border-gray-200 mt-20">
        <p className="text-gray-700">
          copyright 2025{" "}
          <Link href="/" className="text-pink-500">
            girly.com
          </Link>{" "}
          All rights reserved.
        </p>
      </footer>
    )
}