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
            Här har vi skrivit lite om våra tankar kring att bygga Variant i Stockholm. 
            Nu är vi nyfikna på vad du tycker. Vad tror du är viktigt för att lyckas? Hur 
            vill du utveckla Stockholm med oss?
          </p>
        </Content>
      </Wrapper>

      <Wrapper className={styles.page2}>
        <Content mode="left">
          <Block>
            <h2>Vill du utveckla Stockholm?</h2>

            <p>
              Det vill vi att du ska göra – tillsammans med oss och andra. Genom att skapa 
              förtroende och transparens vill vi etablera nästa generations företagskultur där de 
              anställdas potential verkligen får blomma ut och komma till nytta. En kultur som är 
              ömsesidigt frikostig, öppen och nyfiken. En kultur som både vågar föregå med gott exempel 
              och är ödmjuk inför att lära av andra.
            </p>
          </Block>

          <Block>
            <h2>Vill du utveckla Variant Stockholm AB?</h2>

            <img
              src={varianthuset}
              alt="Varianthuset på gågata i Trondheim"
              className={styles.page2__varianthuset}
            />
            <p>
              Det vill vi att du ska göra – tillsammans med oss och andra. Vi tror på dina tankar 
              och förslag på hur företaget vid Mälarens utlopp ska byggas och drivas. Vi vill ge dig 
              den frihet som du hade haft om du själv startade eget. Vi erbjuder dig trygghet så att 
              det du vill göra kan lyckas. Frihet och trygghet – vi återkommer till det.
            </p>
          </Block>

          <Block>
            <h2>Vill du utveckla Variant?</h2>

            <p>
              Det vill vi att du ska göra – tillsammans med oss och andra. Vi vill inte att du 
              ska bli exakt som oss. Att vara en Variant handlar om att lära av varandra och ha egna 
              tankar. Det är en Variants plikt att lära andra och sig själv lika mycket. Vi har lovat oss 
              själva att alltid vara ödmjuka inför andras erfarenheter, kunskaper och idéer. Vi är vana att 
              testa saker. Om något inte fungerar, justerar vi. Detta gäller både stort och smått. Vår 
              hållning och filosofi beskrivs i vår handbok. Vår önskan är att du och ditt team ska bidra 
              till att utveckla Variantgruppen på lika villkor med oss.
            </p>
          </Block>
        </Content>
      </Wrapper>

      <Wrapper className={styles.page3}>
        <Content mode="left">
          <h2>2026</h2>
          <div className={styles.strong}>
            <p>
              Vi har låtit tankarna sväva. Vi har låtit fantasin flöda fritt. Vad tror vi att Variant 
              Stockholm kan bli? En bit in i framtiden? Dessa tankar måste förstås du och ditt 
              team hjälpa till att förbättra och förfina. Med det i åtanke – så här tänker vi oss att 
              2026 <i>kan</i>  se ut:
            </p>
          </div>

          <div className={styles.em}>
            <p>
                Under året flyttar Variant Stockholm in i egna lokaler på Biblioteksgatan. Lokalerna 
                är stora och spännande – och optimerade för interaktion, med stora gemensamma ytor för
                att genomföra Variantdagar, kundworkshops och liknande. Här finns arbetsplatser för vissa, 
                men många jobbar ute hos kunderna. Detta är lokaler med själ som man kan känna sig stolt över.
            </p>

            <p>
              Under hösten börjar konsult nr 30. Vi har en bra balans mellan designers och 
              utvecklare. Dessutom har vi en lite mindre grupp med projektledare. I år 
              omsätter bolaget 45 miljoner  och gör en vinst på 4,5 miljoner.
              Omsättningen kommer från en jämn fördelning mellan cv-baserade uppdrag, relationsförsäljning 
              och projekt med ansvar och risker.
            </p>

            <p>
              Den första fredagen i varje månad hålls Variantdagar. Här bidrar olika medarbetare med 
              nyfikenhet, professionella bidrag och insatser för att utveckla företaget. I augusti 
              arrangeras Variantdagen för alla varianter i hela Norden. Den äger rum i Trondheim i 
              Norge. Här genomförs tre olika parallella yrkessessioner. En av dem är variant:skudd som 
              hjälper till att göra konsulter av de sex nyutexaminerade varianterna som började hos oss i 
              augusti. Varje månad publicerar Stockholmsvarianter professionella bloggposter och en 
              månatlig video med utvecklarinnehåll.
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
          <h2>Första året</h2>

          <div className={styles.page4__padded}>
            <img src="/bg-page4-1.png" alt="" className={styles.page4__img} />
            <div className={styles.strong}>
              <p>
                Det första året påverkas vi starkt av vad du och ditt team vill 
                göra och testa. Vi har också några tankar om tillvägagångssätt som 
                kan vara bra under de första 12 månaderna. Dessa tankar är dock bara 
                förslag – vi är superintresserade av vad du tänker och tycker.
              </p>
            </div>

            <div className={styles.em}>
              <p>
                Vid uppstarten den 1 september 2023 har vi sex anställda: VD, CTO, CDO 
                och tre andra ganska erfarna konsulter. Alla är lätta att få ut på uppdrag.
              </p>

              <p>
                Fokus för resten av 2023 är tvåfaldigt – vi ska rekrytera fler och få ut 
                folk på uppdrag. Under hösten har vi skrivit kontrakt med sex nyanställda, 
                varav de första börjar i januari. Företaget är ett år gammalt och nu arbetar 
                15 personer här. Två är nyutbildade och började i augusti.
              </p>
              <p>
                Redan i september är du inbjuden att följa med på Variantresa med Variant 
                Oslo. Då får vi träffa dig och ditt sällskap, sambo eller fru, så att vi kan 
                lära känna varandra bättre. 
              </p>
              <p>
                Under de första sex månaderna säljer vi uppdrag baserat 
                på cv-försäljning till nya kunder, och genom mäklaravtal och ramavtal som Variant har 
                tillgång till. Under hela det första året handlar det om cv-försäljning, vilket 
                rekryteringen måste ta hänsyn till. Koncernen bidrar med säljkompetens och kapacitet.
              </p>
            </div>
          </div>
        </Content>

        <Content mode="right">
          <div className={styles.em}>
            <p>
              Under det första året genomförs Variantdagar både tillsammans med Oslo och på 
              egen hand. Ibland reser varianter mellan städer, andra gånger pratar de online. 
              Den 1 september 2024 firar Stockholm ettårsjubileum med en egen Variantresa med 
              sällskap till Lofoten.
            </p>

            <p>
              Variant hyr till en början kontor i Helio Slottsbacken. Rummen och arbetsplatserna ökar i 
              takt med att vi växer. Koncernen erbjuder struktur- och systemkapital. Koncernens 
              ledning jobbar nära och på ett coachande sätt med Stockholms ledningsgrupp.
            </p>
          </div>
        </Content>
      </Wrapper>

      <Wrapper className={styles.page5}>
        <Content mode="left">
          <Block>
            <h2>Frihet</h2>

            <p>
              Vi minns det så väl – hur givande det var att kunna forma företaget precis som vi ville. 
              Ibland gjorde vi fel och fick justera kursen, men det var ändå oerhört roligt. Vi vill att du 
              och ditt team också ska få uppleva detta. Och det är inte för att vi är så snälla eller 
              ivriga att ge människor bra upplevelser, även om vi också är det. Utan det är främst för 
              att vi är övertygade om att summan av individens bedömningar överstiger ledningens. Vi tror 
              på att genom större autonomi, frihet och förtroende till de olika bolagen i koncernen blir 
              bolagen som helhet bättre än om de styrs från en koncernledning. Vi är därför intresserade 
              av ditt entreprenörskap och din entreprenörsanda. Detta borde kännas som att starta eget, 
              bara med trygghet.
            </p>
          </Block>
        </Content>

        <Content mode="right">
          <Block>
            <h2>Trygghet</h2>

            <p>
              Det finns många saker som måste fungera för att en konsultverksamhet ska få en 
              flygande start – bland annat finansiering, försäljning, rekrytering, bemanning, 
              kulturbyggande, kompetensuppbyggnad och etablering av strukturkapital och 
              systemkapital. Och om vi ska vara ärliga: Allt detta är ju inte lika roligt. 
              Allt går inte lika fort. Å andra sidan är mycket av det otroligt givande. Vi kan hjälpa 
              dig och ditt team med era svagheter, så att ni kan fokusera på det ni är bra på.
            </p>

            <p>
              För det är inte så att vi tycker att ni helt på egen hand ska utveckla 
              både autonomi och förtroende för oss. Vi har mycket erfarenhet som vi gärna 
              delar med oss av, men främst som coacher, inte vägledare.
            </p>

            <p>
              Vi har en hel del strukturkapital och systemkapital på plats. En del av detta är 
              obligatoriskt – men vi misstänker att du ändå inte brinner för att göra bokföringen själv. 
              Eller att du absolut måste bygga ditt eget bemanningssystem. Vi har också en handbok 
              som vi är väldigt stolta över. Den tror vi att du kommer att gilla.
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
