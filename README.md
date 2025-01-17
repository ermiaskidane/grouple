## SetUp environment

- bun add @stripe/react-stripe-js
- bun add stripe
- bun add @uploadcare/react-uploader
- bun add @uploadcare/upload-client
- bun add novel
- bun add html-react-parser
- bun add @tiptap/core

## Key lesson

~ set up for infinit scroll with intersectionObserver where an element intersect at the edge and fire of a callback function. ref: src/component/global/infinite-scroll
~ addEventListener with capture and bubble methodes eg. src/hooks/channels/index.ts line 104

## Optimistic data with React-query vs redux

Optimistic update with React query works as follow:

- first it display on `variables` for temprorary
- once the data is updated through the mutation fn it pass to the `DB` and can be fetched as `data`. The `variable` displayed as temproray will be disappear and substute with the real `data`

For Redux:

- the fetched `data` will be pushed to redux and display on the client
- everytime `data` varies or queried in server side or client side component push to redux so that on the next request or demand of `data` we simply query the redux store.

To get a visual view of this refer[tanstackVsRedux](webprodigies-grouple/public/tanstackVsRedux.png)
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
