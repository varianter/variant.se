import PageTitle from "@components/page-title";
import { InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Arrow from "src/components/arrow";
import { EmployeeTile } from "src/employees";
import { getContactsByEmails } from "src/employees/utils/getEmployeesList";
import JobListingItem from "src/jobs/list-item";
import { getFileListingData } from "src/jobs/utils/getListings";
import Layout from "src/layout";
import style from "src/stockholm/stockholm.module.css";
import { and } from "src/utils/css";
import BlobLink from "src/components/blob-link";

const stockholmBlobUrl = require("src/stockholm/assets/stockholm.png");
const timelineUrl = require("src/stockholm/assets/RoadmapStockholm.png");

export function StockholmInfoBlock() {
  return (
    <div className={style.infoBlock}>
      <img
        className={style.infoBlock__blob}
        src={stockholmBlobUrl}
        alt="Bryggen i Bergen"
      />

      <h2 className={style.infoBlock__title}>
        <Link href="/stockholm">
          <a className={style.infoBlock__link}>
            <span className={style.infoBlock__text}>
              Ny variant i Stockholm
            </span>
            <Arrow className={style.infoBlock__arrow} color="standard__white" />
          </a>
        </Link>
      </h2>
    </div>
  );
}

const Stockholm: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  listings,
  employees,
}) => {
  const [firstEmployee, secondEmployee] = employees;

  return (
    <Layout homepage>
      <div>
        <Head>
          <title>En ny Variant i Stockholm</title>
          <meta
            property="og:url"
            content={"https://www.variant.no/stockholm"}
            key="og:url"
          />
          <meta
            property="og:title"
            content="En ny variant i Stockholm. Vi vill att du ska utveckla Stockholm tillsammans med oss."
            key="og:title"
          />
          <meta
            property="og:description"
            content="Vi har v??ntat l??nge p?? detta. Vi vill att du ska utveckla Stockholm tillsammans med oss. Att etablera n??sta generations f??retagskultur d??r medarbetarnas potential utnyttjas till fullo med tillit och transparens."
            key="og:description"
          />
          <meta
            name="description"
            content="Vi har v??ntat l??nge p?? detta. Vi vill att du ska utveckla Stockholm tillsammans med oss. Att etablera n??sta generations f??retagskultur d??r medarbetarnas potential utnyttjas till fullo med tillit och transparens."
            key="description"
          />
          <meta
            property="og:image"
            content="https://www.variant.no/images/stockholm_meta.png"
            key="og:image"
          />
        </Head>
        <div className={style.wrapper}>
          <div className={style.content}>
            <img
              className={style.stockholmBlob}
              src={stockholmBlobUrl}
              alt="Bryggen i Bergen"
            />

            <header className={style.intro}>
              <PageTitle title="Hej, en ny Variant i Stockholm!" element="h2" />
            </header>
            <p className="lead">
              I 2023 etablerar vi ett helt nytt konsultf??retag i Stockholm ??? med
              ett nytt t??nkes??tt och v??rdegrund. Variant ??r frist??ende och
              oberoende, grundlagt i Norge och med en unik infallsvinkel till
              utveckling och design inom konsultbranschen. Vill du vara med och
              forma ett lite annorlunda f??retag? Just nu s??ker vi efter den som
              ska styra skutan, eller VD som ni s??ger i Sverige.
            </p>
            <p>
              L??s mer om oss och v??ra v??rderingar i{" "}
              <a
                href="https://handbook.variant.se"
                title="H??ndboken til Variant"
              >
                v??r ??ppna handbok
              </a>
              .
            </p>
          </div>

          <div
            className={and(
              style.content,
              style["content--block"],
              style["content--map"]
            )}
          >
            <h3 className="fancy">Varf??r Stockholm?</h3>

            <p className={and("lead", style.map__text__lead)}>
              V??r vision ??r att skapa f??rtroende, transparens och j??mlikhet i
              europeiska f??retag. Vi b??rjade i Norge med kontor i Norges tre
              st??rsta st??der. Sverige och Stockholm ??r nu n??sta naturliga steg.
            </p>

            <p className={and("first", style.map__text__first)}>
              Dessutom ??r Stockholm en sp??nnande marknad med sp??nnande kunder,
              sp??nnande kompetensmilj?? och studieort och inte minst sp??nnande
              m??nniskor.
            </p>

            <img
              className={style.mapImage}
              src="/illustrations/map-norway-sweeden.png"
              alt="Karta ??ver kontor i Trondheim, Bergen, Oslo och Stockholm."
            />

            <p className={style.map__text__second}>
              Vi har l??rt oss mycket av uppstarten i Norge som vi vill ta med
              oss ????????sterut. Vi ??r m??na om perspektiv och m??ngfald och vi ??r
              s??kra p?? att Stockholm kommer att ge ett superpositivt bidrag till
              det som b??rjar bli en stor Variantgemenskap.
            </p>

            <p className={style.map__text__third}>
              Vill du veta mer kan du{" "}
              <a
                href="https://blog.variant.no/hej-stockholm-ebf1309eb32a"
                title="hej, Stockholm!"
              >
                l??sa Odd Mortens bloggpost om varf??r vi ??ker till Stockholm
              </a>
              .
            </p>
          </div>

          <div
            className={and(
              style.content,
              style["content--block"],
              style["content--timeline"]
            )}
          >
            <h4 className="fancy">Arbetet har b??rjat och vi har en plan...</h4>

            <img
              src={timelineUrl}
              className={style.timeline}
              alt="Tidslinje som visar progression med 10 varianter i januari 2024."
            />

            <BlobLink
              text="L??s v??ra Stockholms- scenarier"
              href="/vyer"
              size={220}
              className={style.timelineButton}
            />

            <p className={style.timelineText}>
              Vi vet vart vi vill, och vi har precis p??b??rjat Stockholmsarbetet.
              Vi har samlat n??gra scenarier som skapar en bild av var vi vill
              vara 2026.
            </p>
          </div>

          {listings.length > 0 && (
            <div className={style.content}>
              <h3 className="fancy">L??ter det intressant?</h3>

              {listings.map((item) => (
                <JobListingItem
                  item={item}
                  key={`${item.name}_${item.title}_${item.location}`}
                />
              ))}
            </div>
          )}

          <div className={and(style.content, style["content--block"])}>
            <p className={and("lead", "fancy", style.footerLine)}>
              ??r det n??got du undrar ??ver? Det enklaste ??r att ta en pratstund
              med oss ??????om du ??r nyfiken (det gillar vi!)!
            </p>
          </div>

          <div
            className={and(
              style.content,
              style["content--block"],
              style["content--employees"]
            )}
          >
            {firstEmployee && <EmployeeTile employee={firstEmployee} />}
            {secondEmployee && <EmployeeTile employee={secondEmployee} />}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Stockholm;

export const getStaticProps = async () => {
  try {
    const listings = await getFileListingData("stockholm");
    const employees = await getContactsByEmails([
      "oms@variant.no",
      "ah@variant.no",
    ]);

    return {
      props: { listings, employees },
      revalidate: 60 * 60,
    };
  } catch (e) {
    console.error(e);
    return {
      props: { listings: [], employees: [] },
      revalidate: 60 * 60,
    };
  }
};
