import Link from "next/link";
import React from "react";

function TopNav() {
  return (
    <div className="flex w-full items-center justify-between border-b p-4 text-xl font-semibold">
      {/* <Link href="/"> */}
      <div>Gallery</div> {/* </Link> */}
      <div>Sign In</div>
    </div>
  );
}

export default TopNav;
