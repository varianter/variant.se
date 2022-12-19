import Head from "next/head";
import Layout from "src/layout";
import style from "src/stockholm/stockholm.module.css";

export default function VariantTur() {
  return (
    <Layout>
      <div>
        <Head>
          <title>Verdiutvikling Variant Stockholm AB</title>
          <meta
            property="og:title"
            content="Verdiutvikling Variant Stockholm AB"
            key="og:title"
          />
          <meta
            property="og:description"
            content="Vi er ambisiøse på Stockholms vegne. Variants egenart bygger på at en relativt stor gruppe flinke mennesker sammen utfordrer hverandre og bygger på hverandre. Dette er et selskap som våger å vokse fort."
            key="og:description"
          />
          <meta
            name="description"
            content="Vi er ambisiøse på Stockholms vegne. Variants egenart bygger på at en relativt stor gruppe flinke mennesker sammen utfordrer hverandre og bygger på hverandre. Dette er et selskap som våger å vokse fort."
            key="description"
          />
        </Head>
        <div className={style.wrapper}>
          <header className={style.intro}>
            <h2 className={style.title}>
              Verdiutvikling
              <br />
              Variant Stockholm AB
            </h2>
          </header>
          <div className={style.content}>
            <img
              className={style.lufthavn}
              src="/images/gatelykt.png"
              alt="Gatelykt ved Kungsträdgården. Foto Rebekka Sveås"
            />
            <p>
              En god del av kompensasjonen som leder i Variant er knyttet til
              verdiutvikling av selskapet og avkastning på aksjer. Begge disse
              momentene er relatert til vekst. Vi er ambisiøse på Stockholms
              vegne. Variants egenart bygger på at en relativt stor gruppe
              flinke mennesker sammen utfordrer hverandre og bygger på
              hverandre. Dette er et selskap som våger å vokse fort. Vi har en
              modell for bærekraftig vekst, og et realistisk mål om å bygge et
              fagmiljø med 30 dyktige varianter på 3 år.
            </p>

            <p>
              Tabellen under beskriver våre vekstmål de neste årene. Dette er
              altså de mål vi sikter mot og som vil kunne gi en pekepinn på hva
              avkastning på dine aksjer og verdiutvikling av din eierandel.
            </p>

            <div className={style.tableContainer}>
              <table className={style.forecast} cellSpacing={0} cellPadding={0}>
                <thead>
                  <tr>
                    <th></th>
                    <th className={style.forecast_heading}>2023</th>
                    <th className={style.forecast_heading}>2024</th>
                    <th className={style.forecast_heading}>2025</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Ansatte per 31.12 </td>
                    <td className={style.number}>6 varianter</td>
                    <td className={style.number}>15 varianter</td>
                    <td className={style.number}>30 varianter</td>
                  </tr>
                  <tr>
                    <td>Omsetning (i SEK)</td>
                    <td className={style.number}>3 000 000</td>
                    <td className={style.number}>21 000 000</td>
                    <td className={style.number}>45 000 000</td>
                  </tr>
                  <tr>
                    <td>Resultat før skatt (i SEK)</td>
                    <td className={style.number}>100 000</td>
                    <td className={style.number}>3 500 000</td>
                    <td className={style.number}>5 500 000</td>
                  </tr>
                  <tr>
                    <td>Totalt utbytte for selskapet (i SEK)</td>
                    <td className={style.number}>50 000</td>
                    <td className={style.number}>2 000 000</td>
                    <td className={style.number}>3 500 000</td>
                  </tr>
                  <tr>
                    <td>Selskapets totale verdiutvikling (i SEK)</td>
                    <td className={style.number}>8 000 000</td>
                    <td className={style.number}>20 000 000</td>
                    <td className={style.number}>60 000 000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              Vi er ambisiøse og søker deg som også har lyst til å oppnå noe.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
