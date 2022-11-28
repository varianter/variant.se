import styles from "src/stockholmsvyer/index.module.css";
import Layout from "src/stockholmsvyer/layout";

const logo = require("src/stockholmsvyer/assets/variant.svg");
const varianthuset = require("src/stockholmsvyer/assets/varianthuset.png");

export default function Home() {
  return (
    <Layout>
      <Wrapper mode="purple" className={styles.page1}>
        <Content mode="right_bottom">
          <h1>Hej!</h1>

          <p>
            Her har vi beskrevet litt om våre visjoner og hvordan vi ser for oss etablering av 
            Variant Stockholm AB skal foregå. Nå er vi spente på hva du mener. Hva tror du er viktig 
            for å lykkes? Hvordan vil du lede denne etableringen sammen med oss?
          </p>
        </Content>
      </Wrapper>

      <Wrapper className={styles.page2}>
        <Content mode="left">
          <Block>
            <h2>Vil du utvikle Stockholm?</h2>

            <p>
              For det er akkurat det vi skal gjøre. Og vi vil at du skal gjøre det. 
              Sammen med oss. Gjennom tillit og radikal åpenhet skal vi etablere neste 
              generasjons selskapskultur der de ansattes potensial virkelig får blomstre og 
              komme til nytte. En kultur som består av gjensidig raushet, åpenhet og læreglede. En 
              kultur som har mot til å stå som et eksempel for andre og ydmykhet til å lære av 
              de samme. Vi har gjort det flere ganger i Norge, nå ønsker vi å ta med oss dette 
              til Sverige.
            </p>
          </Block>

          <Block>
            <h2>Vil du utvikle Variant Stockholm AB?</h2>

            <img
              src={varianthuset}
              alt="Varianthuset på gågata i Trondheim"
              className={styles.page2__varianthuset}
            />
            <p>
              For det er akkurat det vi skal gjøre. Og vi vil at du skal gjøre det. Sammen med oss. 
              Vi har tillit til dine meninger, forslag og planer til hvordan selskapet hovedstaden 
              skal bygges og drives. Vi gir deg frihet som om du skulle startet for deg selv. Så 
              gir vi deg trygghet for at det du ønsker å gjøre lykkes. Frihet og trygghet – vi kommer 
              tilbake til det.
            </p>
          </Block>

          <Block>
            <h2>Vil du utvikle Variant?</h2>

            <p>
              For det er akkurat det vi skal gjøre. Og vi vil at du skal gjøre det. Sammen 
              med oss. Vi vil ikke at du skal bli som oss. Å være en Variant handler om å 
              lære av hverandre og ha egne tanker. Det er en Variants plikt å lære bort like 
              sterkt som å lære av. Vi har lovd oss selv å alltid være ydmyk for andres erfaringer, 
              kunnskap og idéer. Vi har erfaring med å prøve ut ting. Om det ikke fungerer så 
              justerer vi. Dette gjelder stort og smått. Vi kommer med et standpunkt og en 
              filosofi slik håndboken vår beskriver. Utover det ønsker vi at du og ditt team 
              bidrar til å utvikle konsernet Variant på lik linje med oss.
            </p>
          </Block>
        </Content>
      </Wrapper>

      <Wrapper className={styles.page3}>
        <Content mode="left">
          <h2>2026</h2>
          <div className={styles.strong}>
            <p>
              Vi har latt tankene spinne. Vi har latt fantasien løpe fritt. 
              Hvordan tror vi at Variant Stockholm kan bli? Sånn litt inn i framtida? Dette er 
              tanker som du og ditt team må være med å forbedre og foredle. Så med alle forbehold, 
              her er slik vi ser for oss at 2026 <i>kan</i> se ut.
            </p>
          </div>

          <div className={styles.em}>
            <p>
              I løpet året flytter Variant Stockholm inn et eget lokale på Biblioteksgaten med 
              utsikt mot Norrmalmstorg. Lokalene er store og attraktive, og er laget for samhandling. 
              Store fellesarealer for å gjennomføre Variantdager, kundeworkshops og studentaktiviteter. 
              Dette er lokaler med sjel og som man føler seg stolte av.
            </p>

            <p>
              I løpet av høsten starter konsulent nr. 45. Det er en god balanse mellom designere 
              og utviklere. I tillegg er det en litt mindre gruppe prosjektledere. I år omsetter 
              selskapet for 70 millioner svenske kroner og genererer et overskudd på 7 millioner. 
              Omsetningen kommer fra en lik fordeling mellom CV-baserte oppdrag, relasjonssalg og 
              prosjekter med ansvar og risiko.
            </p>

            <p>
                Gjennom ti Variantdager samles alle ansatte for å utvikle selskapet og seg 
                selv gjennom læreglede, faglige bidrag og innsats. Vi har kommet til Variantdagen i 
                november.I dag gjennomføres 3 ulike faglige sesjoner parallelt. Et av dem er variant:skudd 
                som bidrar til å gjøre konsulenter av de 6 nyutdannede variantene som startet i august. 
                Hver måned publiserer varianter faglige bloggposer i tillegg til at utviklingsgjengen har 
                en ukentlig podcast med lyttere fra hele Norden. Designergruppen derimot har nettopp feiret 
                @årsdag for deres månedlige designprogram i Variants YouTube-kanal. Selskapet hostet 4 
                ulike meetups i år, og har hatt faglig bidrag dobbelt så mange.
            </p>
          </div>
        </Content>

        <Content mode="right" className={styles.page3__right}>
          <div className={styles.em}>
            <p>
              I maj tilldelades hela Variant tredjeplatsen i Universums ranking av Sveriges 
              mest eftertraktade arbetsgivare. Samma månad fick vi in 15 relevanta ansökningar 
              från erfarna designers och utvecklare som vill arbeta i Stockholm.
            </p>
          </div>
        </Content>
      </Wrapper>

      <Wrapper className={styles.page4}>
        <Content mode="left">
          <h2>Det første året</h2>

          <div className={styles.page4__padded}>
            <img src="/bg-page4-1.png" alt="" className={styles.page4__img} />
            <div className={styles.strong}>
              <p>
                Også det første året vil i stor grad påvirkes av hva du og ditt team ønsker å 
                gjøre og ønsker å prøve. Vi har allerede startet opp tre selskaper i Norge, så 
                vi har en ganske god plan for hvordan de første 12 månedene kan gjøres. Dette er 
                altså vårt forslag, vi er superspent på om du mener vi skal gjøre noe annet eller mer. 
              </p>
            </div>

            <div className={styles.em}>
              <p>
                Ved oppstart 1. september 2023 er vi 6 ansatte. Dette er da VD, CTO og CDO 
                sammen med tre andre ganske erfarne konsulenter. Alle er lett å få ut i oppdrag.
              </p>

              <p>
                Fokus resten av 2023 er todelt, rekruttere flere og få folk ut i oppdrag. I løpet 
                av høsten har vi signert 6 nye, og de første begynner i januar. Idet selskapet er ett 
                år jobber det 15 mennesker her, 2 av dem er nyutdannede som startet i august. Variant 
                Stockholm støtter får mye hjelp og kapasitet fra konsernet til rekrutteringsarbeidet, 
                men beslutter selvsagt selv hvem som skal signeres. 
              </p>
              <p>
                Allerede i september inviteres dere med på Varianttur sammen Variant Oslo. Da blir 
                dere sammen med følge, samboer eller kone introdusert for oss, og vi og dere får 
                sjansen til å bli godt kjent.
              </p>
              <p>
                Det første halvåret selger vi oppdrag basert på CV-salg til eksisterende Variantkunder 
                og gjennom megleravtaler. Helt i fra starten har Variant Stockholm også begynt å vinne 
                egne kunder. Men gjennom hele det første året handler det om CV-salg, og det må 
                rekrutteringen ta høyde for. Konsernet bidrar med salgskompetanse og -kapasitet.
              </p>
            </div>
          </div>
        </Content>

        <Content mode="right">
          <div className={styles.em}>
            <p>
              Det første året gjennomføres Variantdager dels sammen med Oslo eller Trondheim og 
              dels på egenhånd. Noen ganger reiser varianter mellom byene. 1. september 2024 
              feirer Stockholm ettårsdagen med en Varianttur på egenhånd sammen med følge til Lofoten.
            </p>

            <p>
              Den første tiden leier Variant et kontor hos Cecil Coworking i Norrlandsgatan.  Antallet 
              arbeidsplasser utvides etter hvert som vi vokser. Konsernet stiller med struktur- og 
              systemkapital. Konsernets ledelse jobber tett på en coachende måte med Stockholms ledergruppe.
            </p>
          </div>
        </Content>
      </Wrapper>

      <Wrapper className={styles.page5}>
        <Content mode="left">
          <Block>
            <h2>Frihet</h2>

            <p>
              Vi husker det så godt. Hvor givende det var å kunne forme selskapet slik vi mente 
              det helst skulle gjøres. Noen ganger trådte vi feil og måtte justere kurs, men det 
              var like fullt så morsomt. Denne opplevelsen ønsker vi å gi deg og ditt team. Og det 
              er ikke først og fremst for at vi er så snille eller så ivrig på å gi folk gode 
              opplevelser, selv om vi er det også. Av samme grunn som vi har tillit til at summen 
              av enkeltpersoners vurderinger overgår ledelsens så tror vi også at ved å gi autonomi, 
              frihet og tillit til de ulike selskapene i konsernet vil selskapene som sum bli bedre 
              enn hvis styrt fra en konsernledelse. Vi er derfor ute etter ditt entreprenørskap og 
              din gründerånd. Dette skal være som å starte for deg selv, bare med trygghet.
            </p>
          </Block>
        </Content>

        <Content mode="right">
          <Block>
            <h2>Trygghet</h2>

            <p>
              Det er mange ting som må funke for at en konsulentstartup skal fly. Dette strekker 
              seg fra finansiering, salg, rekruttering, bemanning, kulturbygging, kompetansebygging, 
              etablering av strukturkapital og systemkapital. Så skal vi være litt ærlige. Alt dette 
              er ikke like morsomt. Alt går ikke like fort. På den andre siden er mye av dette utrolig 
              givende. Ikke for å skryte, men vi er gode på dette. Vi kan hjelpe dere der du og ditt 
              team ikke har deres styrker, slik at dere kan jobbe med det dere er gode på.
            </p>

            <p>
              For det er ikke slik at vi tenker at dere skal greie dere selv opp i autonomi og tillit. 
              Vi har mye erfaring som vi gjerne deler med dere, men da først og fremst som coacher og 
              ikke veiledere.
            </p>

            <p>
              Mye strukturkapital og systemkapital har vi på plass. Lite av dette er obligatorisk, 
              men vi antar nesten at du ikke brenner for å føre regnskapet selv. Eller bygge ditt 
              eget bemanningssystem. Vi har også en håndbok som vi er ikke så lite stolte av. Den 
              tipper vi du gjerne vil utnytte.
            </p>
          </Block>
        </Content>
      </Wrapper>

      <Wrapper mode="purple" className={styles.backPage}>
        <Content mode="center_bottom">
          <img src={logo} alt="Variant" />
        </Content>
      </Wrapper>
    </Layout>
  );
}

type WrapperProps = React.PropsWithChildren<{
  mode?: "purple" | "default";
  className?: string;
}>;
function Wrapper({ children, mode = "default", className }: WrapperProps) {
  const style = styles[`wrapper__${mode}`];
  return (
    <section className={and(styles.wrapper, style, className)}>
      {children}
    </section>
  );
}

type ContentProps = React.PropsWithChildren<{
  mode?: "right" | "left" | "right_bottom" | "left_bottom" | "center_bottom";
  className?: string;
}>;
function Content({ children, mode = "right_bottom", className }: ContentProps) {
  const style = styles[`content__${mode}`];
  return (
    <div className={and(styles.content, style, className)}>{children}</div>
  );
}

type BlockProps = React.PropsWithChildren<{
  className?: string;
}>;
function Block({ children, className }: BlockProps) {
  return <div className={and(styles.block, className)}>{children}</div>;
}

function and(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}
