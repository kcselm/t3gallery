import {
  SignInButton,
  SignOutButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

function TopNav() {
  return (
    <div className="flex w-full items-center justify-between border-b p-4 text-xl font-semibold">
      {/* <Link href="/"> */}
      <div>Gallery</div> {/* </Link> */}
      <div>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          {/* <SimpleUploadButton /> */}
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
}

export default TopNav;
