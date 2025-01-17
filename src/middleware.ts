// import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server"
// import { NextResponse } from "next/server"

// const isProtectedRoute = createRouteMatcher(["/group(.*)"])

// export default clerkMiddleware(async (auth, req) => {
//   const baseHost = "localhost:3000"
//   const host = req.headers.get("host")
//   const reqPath = req.nextUrl.pathname
//   const origin = req.nextUrl.origin
//   if (isProtectedRoute(req)) auth().protect()
//   if (!baseHost.includes(host as string) && reqPath.includes("/group")) {
//     const response = await fetch(`${origin}/api/domain?host=${host}`, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })

//     const data = await response.json()
//     if (data.status === 200 && data) {
//       return NextResponse.rewrite(
//         new URL(reqPath, `https://${data.domain}/${reqPath}`),
//       )
//     }
//   }
// })

// export const config = {
//   matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
// }


import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};