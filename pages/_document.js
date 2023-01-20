import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="dark:bg-slate-800 bg-slate-200 text-gray-700 dark:text-gray-300">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
