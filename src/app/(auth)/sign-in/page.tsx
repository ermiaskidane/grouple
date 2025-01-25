// import { GoogleAuthButton } from "@/components/global/google-oauth-button"
import SignInForm from "@/components/forms/sign-in"
import { GoogleAuthButton } from "@/components/global/google-oauth-button"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"

const SignInPage = () => {
  return (
    <>
      <h5 className="font-bold text-base text-themeTextWhite">Login</h5>
      <p className="text-themeTextGray leading-tight">
        Network with people from around the world, join groups, create your own,
        watch courses and become the best version of yourself.
      </p>
      <SignInForm />
      <div className="my-10 w-full relative">
        <div className="bg-black p-3 absolute text-themeTextGray text-xs top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          OR CONTINUE WITH
        </div>
        <Separator orientation="horizontal" className="bg-themeGray" />
      </div>
      <GoogleAuthButton method="signin" />
      <Button 
        className="w-full rounded-2xl mt-6 text-center"
        variant="ghost"
      >
        <Link
          href="/sign-up"
          className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white"
        >
          <span>Sign Up</span>
        </Link>
      </Button>
    </>
  )
}

export default SignInPage
