import Image from "next/image";
import { SignOutButton, SignUpButton, SignedIn, SignedOut ,UserButton} from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="text-lime-500">
      {/* When the user is signed out */}
      <SignedOut>
        <SignUpButton>
          <button className="block mx-auto bg-blue-400 hover:bg-gray-200 hover:text-black hover:font-bold py-2 px-4 rounded">
            Signup
          </button>
        </SignUpButton>
      </SignedOut>

      <UserButton/>
      {/* When the user is signed in */}
      <SignedIn>
      
        <SignOutButton>
          <button className="block mx-auto bg-blue-400 hover:bg-gray-200 hover:text-black hover:font-bold py-2 px-4 rounded">
            Signout
          </button>
        </SignOutButton>
      </SignedIn>
    </div>
  );
}
