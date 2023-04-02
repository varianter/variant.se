import Head from "next/head";
import Link from "next/link";
import { PropsWithChildren, useState } from "react";
import AnimatingBackground from "src/background";
import { and } from "src/utils/css";
import style from "./layout.module.css";

import favicon from "@variant/profile/lib/logo/favicon.png";
import PageHeader from "@components/page-header";

type LayoutProps = PropsWithChildren<{
  title?: string;
  fullWidth?: boolean;
  crazy?: boolean;
  homepage?: boolean;
  zenMode?: boolean;
}>;

function Layout({
  children,
  title = "Variant – Ny Variant av konsultföretag",
  fullWidth = false,
  crazy = false,
  homepage = false,
  zenMode = false,
}: LayoutProps) {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const mainClass = and(
    style.main,
    !zenMode ? style["main--overflow"] : undefined,
    zenMode ? style["main--zenMode"] : undefined
  );

  return (
    <div
      className={mainClass}
      style={isMenuVisible ? { position: "fixed" } : { position: "relative" }}
    >
      <Head>
        <title>{title}</title>
        <link rel="icon" href={favicon} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@variant_as" />
        <meta property="og:title" content={title} key="og:title" />
        <meta property="og:type" content="website" key="og:type" />
        <meta
          property="og:url"
          content="https://www.variant.se/"
          key="og:url"
        />
        <meta
          property="og:image"
          content="https://www.variant.se/og-header-min.jpg"
          key="og:image"
        />
        <meta
          property="og:description"
          content="Vi är en ny Variant av konsultföretag. Transparenta, generösa och nyfikna!"
          key="og:description"
        />
        <meta
          name="description"
          content="Vi är en ny Variant av konsultföretag. Transparenta, generösa och nyfikna!            "
          key="description"
        />
      </Head>
      <div
        className={and(
          style.main__inner,
          fullWidth ? style.main__innerFullWidth : ""
        )}
      >
        <PageHeader
          zenMode={zenMode}
          homepage={homepage}
          onVisibleChange={setMenuVisible}
        />
        <div>{children}</div>
      </div>
      <AnimatingBackground crazy={crazy} />

      <footer className={style.footer}>
        <div className={style.footer__inner}>
          <div className={style.footer__item}>
            <h2>Utforska</h2>
            <ul>
              <li>
                <a href="https://handbook.variant.se">Personalhandbok</a>
              </li>
              <li>
                <a href="http://variant.blog" rel="noopener">
                  Blogg
                </a>
              </li>
              <li>
                <a href="https://github.com/varianter" rel="noopener">
                  Open Source
                </a>
              </li>
            </ul>
          </div>
          <div className={style.footer__item}>
            <h2>Kontakt</h2>
            <ul>
              <li>
                Ring på{" "}
                <a href="tel:+46706546267" title="Ring oss">
                  +46 70 6546267
                </a>
              </li>
              <li>
                Mejl på{" "}
                <a href="mailto:post@variant.se" title="Send oss mejl">
                  post@variant.se
                </a>
              </li>
              <li>
                Se foton på{" "}
                <a
                  href="https://www.instagram.com/variant_swe/"
                  title="Instagram"
                >
                  @variant_swe
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          className={and(style.footer__inner, style["footer__inner--bottom"])}
        ></div>
      </footer>
    </div>
  );
}

export default Layout;
