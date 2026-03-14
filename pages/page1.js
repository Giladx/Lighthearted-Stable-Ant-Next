import React from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

const Page1 = (props) => {
  return (
    <>
      <div className="page1-container">
        <Head>
          <title>Page1 - Lighthearted Stable Ant</title>
          <meta property="og:title" content="Page1 - Lighthearted Stable Ant" />
          <link
            rel="canonical"
            href="https://lighthearted-stable-ant-g5l4w6.teleporthq.site/page1"
          />
          <meta
            property="og:url"
            content="https://lighthearted-stable-ant-g5l4w6.teleporthq.site/page1"
          />
        </Head>
      </div>
      <style jsx>
        {`
          .page1-container {
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

export default Page1
