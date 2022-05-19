# Windham RTC

## Setup

1. `npm i`
2. `npm run dev`

## CMS

We're using the Sanity CMS for content management.

You can access the Sanity Studio dashboard at: https://windhamrtc.sanity.io

## CMS Development

Install the Sanity CLI if not already installed (`npm install -g @sanity/cli`)

Local Sanity Schemas, etc. are stored in the `/sanity` folder.

You can run a local copy of Sanity Studio by `cd`ing into the `/sanity` folder and running `sanity start`

Make changes there (eg. add new schemas / content types) and deploy using `sanity deploy`

The GraphQL endpoint has already been deployed but it may need to be updated if you redeploy Sanity Studio `sanity graphql deploy`.

This will be picked up by the Sanity Gatsby Source Plugin.

Sometimes after new changes are made to the CMS the Gatsby cache will need to be cleared before any new items in the content lake will be queryable. Run `npm run clean` to do so.
