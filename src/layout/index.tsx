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
  title = "Variant – En variant av et konsulentselskap",
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
          content="https://www.variant.se/og-header-min.png"
          key="og:image"
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
            <h2>Utforsk</h2>
            <ul>
              <li>
                <a href="https://handbook.variant.no">Håndbok</a>
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
              <li>
                <a
                  href="https://blog.variant.no/tagged/b%C3%A6rekraft"
                  rel="noopener"
                  title="Les mer om Variants bærekraftsinitiativ"
                >
                  Bærekraft
                </a>
              </li>
            </ul>
          </div>
          <div className={style.footer__item}>
            <h2>Still oss spørsmål</h2>
            <ul>
              <li>
                Ring på{" "}
                <a href="tel:+4792807375" title="Ring oss">
                  928 07 375
                </a>
              </li>
              <li>
                Mail på{" "}
                <a href="mailto:post@variant.no" title="Send oss epost">
                  post@variant.no
                </a>
              </li>
              <li>
                Tweet på{" "}
                <a
                  href="https://twitter.com/variant_as"
                  title="Følg oss på Twitter"
                >
                  @variant_as
                </a>
              </li>
              <li>
                Se bilder på{" "}
                <a
                  href="https://instagram.com/variant_as"
                  title="Følg oss på Instagram"
                >
                  @variant_as
                </a>
              </li>
            </ul>
          </div>
          <div className={style.footer__item}>
            <h2>Møt oss</h2>

            <p>
              Vi holder til i vårt eget hus i{" "}
              <a
                href="https://www.google.com/maps/place/Varianthuset/@63.4328051,10.397323,17z/data=!3m1!4b1!4m5!3m4!1s0x466d312df4ea1347:0xf63e949e041942ee!8m2!3d63.4328051!4d10.3995117"
                rel="noreferrer"
                target="_blank"
                title="Kart til Varianthuset i Trondheim"
              >
                Thomas Angells gate 10
              </a>{" "}
              i Trondheim, i våre egne lokaler i{" "}
              <a
                href="https://www.google.com/maps/place/Variant+Oslo/@59.910812,10.7393748,17z/data=!4m5!3m4!1s0x46416f4127442c2b:0xe0534eff4f975859!8m2!3d59.9108093!4d10.7415635"
                rel="noreferrer"
                target="_blank"
                title="Kart til Variant Oslo"
              >
                Tollbugata 24
              </a>{" "}
              i Oslo og på{" "}
              <a
                href="https://g.page/Vaskerelven-39-5323"
                rel="noreferrer"
                target="_blank"
                title="Kart til Variant Bergen"
              >
                Spaces Vaskerelven
              </a>{" "}
              i Bergen. Kom innom for en kopp kaffe eller bare en hyggelig prat.
            </p>
          </div>
        </div>
        <div
          className={and(style.footer__inner, style["footer__inner--bottom"])}
        >
          <div
            className={and(style.footer__item, style["footer__item--address"])}
          >
            <address>
              <strong>Variant Trondheim AS</strong>
              <br />
              Thomas Angells gate 10 <br />
              7011 Trondheim
            </address>
          </div>
          <div
            className={and(style.footer__item, style["footer__item--address"])}
          >
            <address>
              <strong>Variant Oslo AS</strong>
              <br />
              Tollbugata 24
              <br />
              0157 Oslo
            </address>
          </div>
          <div
            className={and(style.footer__item, style["footer__item--address"])}
          >
            <address>
              <strong>Variant Bergen AS</strong>
              <br />
              C/O Spaces Vaskerelven <br />
              Vaskerelven 39
              <br />
              5014 Bergen
            </address>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
