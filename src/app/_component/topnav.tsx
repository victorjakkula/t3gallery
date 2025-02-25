import { SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { SignedIn } from "@clerk/nextjs";
import React from "react";
  

export default function TopNav() {
    return (
      <nav className="flex w-full items-center justify-between bg-white p-4 text-xl font-semibold mr-1 border-b p-4">
        <div>
           
            Gallary
          
        </div>
        <div>
         
            <SignedOut>
                <SignInButton />
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
          
        </div>
      </nav>
    );
  }