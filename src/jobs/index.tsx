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
import Podcast from "@components/podcast/Podcast";

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
                Välkommen till Variant. Vi är ett konsultföretag som lever för
                transperens, gillar människor med stor nyfikenhet och som
                prioriterar generositet. Vi vill arbeta med organisationer där
                teknik och design tillsammans skapar starka, hållbara lösningar.
                Vi erbjuder mer än schyssta villkor, bra lön samt möjlighet att
                arbeta på häftiga uppdrag tillsammans med engagerade kollegor.
                Vi tar transparensen till nya höjder, för vi tror att öppenhet
                inte kan skada. Tvärt om, skapar det samhörighet.
              </p>

              <p>
                För att kunna skapa bra lösningar behöver vi olika människor med
                olika perspektiv, olika erfarenheter och olika personligheter.
                Vi behöver bra människor med engagerade röster helt enkelt. Det
                kan betyda att vi behöver just dig.
              </p>

              <p>
                Vi vill skapa en arbetsplats som är till för medarbetarna. Vi
                vill samla människor som bryr sig och tillsammans skapa
                lösningar som skapar värde för samhället. Vi behöver människor
                som är engagerade i både design och utveckling.
              </p>

              <p>
                För oss spelar det ingen roll om du är en Java- eller F#-,
                JavaScript- eller Lisp-person. Figma eller InDesign person. Vi
                vill ha ärliga, motiverade, trevliga och personer som är villiga
                att dela med sig till oss. Människor som vill påverka vardagen.
              </p>

              <p>
                Kolla in vår{" "}
                <a href="https://handbook.variant.se" rel="noopeneer">
                  öppna handbok
                </a>{" "}
                om du vill se mer om vad vi står för.
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
