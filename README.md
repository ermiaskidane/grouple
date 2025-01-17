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
