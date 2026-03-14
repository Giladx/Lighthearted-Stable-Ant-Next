import React from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

const Hero = (props) => {
  return (
    <>
      <div className="hero-container">
        <Head>
          <title>Hero - Lighthearted Stable Ant</title>
          <meta property="og:title" content="Hero - Lighthearted Stable Ant" />
          <link
            rel="canonical"
            href="https://lighthearted-stable-ant-g5l4w6.teleporthq.site/hero"
          />
          <meta
            property="og:url"
            content="https://lighthearted-stable-ant-g5l4w6.teleporthq.site/hero"
          />
        </Head>
      </div>
      <style jsx>
        {`
          .hero-container {
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

export default Hero
