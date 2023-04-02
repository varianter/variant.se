import Head from "next/head";
import React, { PropsWithChildren } from "react";

const favicon = require("@variant/profile/lib/logo/favicon.png");

type LayoutProps = PropsWithChildren<{
  title?: string;
}>;

export default function Layout({ children, title = "Variant" }: LayoutProps) {
  return (
    <main>
      <Head>
        <title>{title}</title>
        <link rel="icon" href={favicon} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@variant_as" />
        <meta
          property="og:title"
          content="Hej! Vill du utveckla Stockholm?"
          key="og:title"
        />
        <meta
          property="og:description"
          content="Här har vi skrivit lite om våra tankar kring att bygga Variant i Stockholm. Nu är vi nyfikna på vad du tycker."
          key="og:description"
        />
        <meta
          name="description"
          content="Här har vi skrivit lite om våra tankar kring att bygga Variant i Stockholm. Nu är vi nyfikna på vad du tycker."
          key="description"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.variant.se/vyer" />
        <meta
          property="og:image"
          content="https://www.variant.se/og-header-min.jpg"
        />
      </Head>

      {children}
    </main>
  );
}
