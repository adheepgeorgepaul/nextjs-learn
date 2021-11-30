This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

1. create tsconfig.json
2. npm i typescript @types/node @types/react --save-dev (since we don't need it in production)
3. next-dev is magic, it fixes all the errors
4. whatever is inside public folder is accessible from the root domain
5. Routing is linked with file structure
6. Create pages/\_document.tsx and export your custom document, write this one as a class based component
7. \_app.tsx is responsible for rendering all your pages
8. The function that you export out of \_app.tsx is executing on the server-side as well as on the client side ( try writing console logging here, you will get the message on your terminal)
9. \_document.tsx is only rendered on the server, it won't execute any javascript written there on the client-side. It creates the overall structure of the page
10. You could use Styled-JSX(limited to the component where you wrote it) to write css in jsx (not recommended)
11. nextjs way of importing styles to pages other than \_app.tsx is to name the css file as
    eg: tsx file -> index.tsx
    css file-> index.module.css
    import styles from 'index.module.css'
    There's a way to do it without using styles object but nextjs doesn't provide that natively
12. Install scss -> npm i sass --save-dev
13. npm i @types/jsonwebtoken --save-dev
14. jwt.io can be used to decode jsonwebtokens
15. Routing <a href""/> reloads page, instead use Link from next/link - better for SEO, accesibilty
16. Nested Routes
17. [Dynamic] routes
18. useRouter() hook - doesn't work sometimes if there are no prefetching conditions like getStaticProps or getServerSideProps
19. programmatic navigation: router.replace("/") / router.push("/")
20. Avoid deep nesting for a route with many subpaths
    [...fileName.tsx]
21. Catch all routes without writing an index file [[...fileName.tsx]]
22. getStaticProps(execution on server, i.e runs at build time, all getStaticProps function are run and their results are stored in the file system): async function, returns {props: {myName: Akash}} - the returned value is injected into the page in which it is defined
23. {props: {myName: Akash}, revalidate: 10}, revalidate parameter is useful in production, since it runs static props for a particular page after 10 seconds, as specified here
24. [dynamic] page also requires you to define getStaticPaths function along with getStaticProps
25. getStaticPaths:
    Async function - path Array, fallback
    returns {path:[{params: {name: 'hello'}}, {params: {name: 'hi'}}], fallback: true}

    1. if fallback = true, upon accessing a route which isn't part of the path array, getStaticProps will be called on server during run time and the dynamic route gets added to the path array, inorder to prevent getStaticProps from being called the next time
       Use router.fallback to show a loading indicator since Nextjs loads page with empty props (getStaticProps call is delayed in this case)
    2. if fallback = false, For any route other than those present in the path array, you will be re-directed to the 404 page
26. getServerSideProps: called always on every page request, even on production
    * Useful when you want a real-time dashboard or time-sensitive pages
    * Try not to use it unless you absolutely need it
