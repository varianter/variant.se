import Head from "next/head";
import Layout from "src/layout";

import { Heading2 } from "@components/heading";
import PageTitle from "@components/page-title";
import { BaseBlob } from "@variant/components/lib/blob";
import { colors } from "@variant/profile";
import { InferGetStaticPropsType, NextPage } from "next";
import { getStaticProps } from "pages/jobs";
import style from "./index.module.css";
import JobListingItem from "./list-item";

const JobsIndex: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  listings,
}) => {
  return (
    <>
      <Layout>
        <Head>
          <meta
            property="og:url"
            content={"https://www.variant.se/jobs/"}
            key="og:url"
          />
          <meta
            property="og:title"
            content="Bli en variant! Se på ledige stillinger i Stockholm."
            key="og:title"
          />
          <meta
            property="og:description"
            content="Vi trenger mennesker som engasjerer seg for design og utvikling. Vi ønsker å samle mennesker som bryr seg og vil skape løsninger som tjener samfunnet vi lever i."
            key="og:description"
          />
          <meta
            name="description"
            content="Vi trenger mennesker som engasjerer seg for design og utvikling. Vi ønsker å samle mennesker som bryr seg og vil skape løsninger som tjener samfunnet vi lever i."
            key="description"
          />
          <meta
            property="og:image"
            content="https://www.variant.se/images/jobs_meta_image.png"
            key="og:image"
          />
          <title>Variant - Ledige stillinger</title>
        </Head>
        <section className={style.omVariant}>
          <PageTitle title="Bli en variant" />

          <article className={style.omVariant__wrapper}>
            <div className={style.omVariant__blob}>
              <BaseBlob
                seed="Variant"
                width={350}
                height={350}
                color={colors.colorPairs.secondary3.default.bg}
                imageProps={{
                  src: require("src/jobs/images/undraw_lynx.png"),
                }}
                alt="Dame som holder smarttelefon som viser kode"
              />
            </div>
            <div>
              <p>
                For å kunne lage gode løsninger trenger vi forskjellige
                mennesker med forskjellig perspektiv. Vi trenger flinke folk med
                engasjerte stemmer. Det betyr deg.
              </p>
              <p>
                Vi vil skape en arbeidsplass som jobber for de ansatte. Vi
                ønsker å samle mennesker som bryr seg og sammen skape løsninger
                som tjener samfunnet. Vi trenger mennesker som engasjerer seg
                for både design og utvikling.
              </p>
              <p>
                For oss er det ikke viktig om du er en Java- eller F#-,
                JavaScript eller Lisp-person. Figma- eller Framer X-person. Vi
                ønsker ærlige, motiverte, hyggelige og delevillige personer.
                Personer som ønsker å påvirke hverdagen.
              </p>
              <p>
                Sjekk ut den{" "}
                <a href="https://handbook.variant.no" rel="noopeneer">
                  åpne håndboken vår for Norge
                </a>{" "}
                om du vil se mer om hva vi står for.
              </p>
            </div>
          </article>
        </section>
        <section className={style.job__listing}>
          <Heading2>Ledige stillinger</Heading2>

          {!listings.length && (
            <p className={style.omVariant__wrapper__p}>
              Ingen åpne stillinger akkurat nå.
            </p>
          )}

          {listings.map((item) => (
            <JobListingItem
              item={item}
              key={`${item.name}_${item.title}_${item.location}`}
            />
          ))}
        </section>
      </Layout>
    </>
  );
};

export default JobsIndex;
