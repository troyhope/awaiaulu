import '@/css/tailwind.css'
import '@/css/styles.css'
import { MDXProvider } from '@mdx-js/react'
import { ThemeProvider } from 'next-themes'
import { DefaultSeo } from 'next-seo'
import Head from 'next/head'
import { SEO } from '@/components/SEO'
import MDXComponents from '@/components/MDXComponents'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <MDXProvider components={MDXComponents}>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Bitter:wght@400;600;700&display=swap"
            rel="stylesheet"
          />
          <meta content="width=device-width, initial-scale=1" name="viewport" />
        </Head>
        <DefaultSeo {...SEO} />

        <Component {...pageProps} />
      </MDXProvider>
    </ThemeProvider>
  )
}
