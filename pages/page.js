import React from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

const Page = (props) => {
  return (
    <>
      <div className="page-container">
        <Head>
          <title>Page - Lighthearted Stable Ant</title>
          <meta property="og:title" content="Page - Lighthearted Stable Ant" />
          <link
            rel="canonical"
            href="https://lighthearted-stable-ant-g5l4w6.teleporthq.site/page"
          />
          <meta
            property="og:url"
            content="https://lighthearted-stable-ant-g5l4w6.teleporthq.site/page"
          />
        </Head>
      </div>
      <style jsx>
        {`
          .page-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default Page
