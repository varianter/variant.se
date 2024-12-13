import Head from 'next/head';
import React, { PropsWithChildren } from 'react';

const favicon = require('@variant/profile/lib/logo/favicon.png');

type LayoutProps = PropsWithChildren<{
  title?: string;
}>;

export default function Layout({ children, title = 'Variant' }: LayoutProps) {
  return (
    <main>
      <Head>
        <title>{title}</title>
        <link rel="icon" href={favicon} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@variant_as" />
        <meta
          property="og:title"
          content="En ny Variant i Linköping. Vi vill att du ska utveckla Linköping tillsammans med oss."
          key="og:title"
        />
        <meta
          property="og:description"
          content="Detta har vi väntat länge på. Vi vill att du ska utveckla Linköping tillsammans med oss – och skapa nästa generations företagskultur där medarbetarnas fulla potential tas tillvara med tillit och transparens."
          key="og:description"
        />
        <meta
          name="description"
          content="Detta har vi väntat länge på. Vi vill att du ska utveckla Linköping tillsammans med oss – och skapa nästa generations företagskultur där medarbetarnas fulla potential tas tillvara med tillit och transparens."
          key="description"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.variant.no/linkoping/vyer"
        />
        <meta
          property="og:image"
          content="https://www.variant.no/images/og-vd-linkoping.png"
        />
      </Head>

      {children}
    </main>
  );
}
