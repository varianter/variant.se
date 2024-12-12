import styles from './index.module.css';
import Layout from './layout';

const logo = require('./assets/variant.svg');
const varianthuset = require('./assets/varianthuset.png');

export default function Home() {
  return (
    <Layout>
      <Wrapper mode="purple" className={styles.page1}>
        <Content mode="right_bottom">
          <h1>Hallå där!</h1>

          <p>          
              Här har vi skrivit lite om våra tankar kring att bygga Variant i Linköping. 
              Nu är vi nyfikna på vad du tycker. Vad tror du är viktigt för att lyckas? 
              Hur skulle du vilja utveckla Linköping tillsammans med oss?
          </p>
        </Content>
      </Wrapper>

      <Wrapper className={styles.page2}>
        <Content mode="left">
          <Block>
            <h2>Vill du utveckla Linköping?</h2>

            <p>
            För det är precis det vi vill att du ska göra – 
            tillsammans med fler och tillsammans med oss.
            Linköping har redan ett rikt och spännande 
            näringsliv, och vi tror att vi kan vara med och utmana här.
            Vi vill skapa nästa generations företagskultur, 
            där medarbetarnas potential tas tillvara till 
            fullo genom tillit och transparens. En kultur som 
            bygger på ömsesidig generositet, öppenhet och glädjen 
            i att lära. En kultur som har mod att stå som ett 
            exempel för andra, och ödmjukhet att lära av dem samtidigt.
            </p>
          </Block>

          <Block>
            <h2>Vill du utveckla Variant Linköping AB?</h2>

            <img
              src={varianthuset}
              alt="Varianthuset på gågata i Trondheim"
              className={styles.page2__varianthuset}
            />
            <p>
            För det är precis det vi vill att du ska göra – tillsammans med fler och tillsammans med oss. 
            Vi har tillit till dina idéer och förslag på hur företaget i hjärtat av 
            Östergötland ska byggas och drivas. Vi ger dig friheten att arbeta som om 
            du startade något eget, samtidigt som vi ger dig tryggheten att det du vill 
            skapa har förutsättningar att lyckas. Frihet och trygghet – vi återkommer till det.
            </p>
          </Block>

          <Block>
            <h2>Vill du utveckla Variant?</h2>

            <p>
            För det är precis det vi vill att du ska göra – tillsammans med fler och tillsammans med oss.
            Vi vill inte att du ska bli som oss. Att vara en Variant handlar om att lära av v
            arandra och ha egna idéer. En Variants ansvar är lika mycket att dela med sig 
            som att lära sig av andra. Vi har lovat oss själva att alltid vara ödmjuka 
            inför andras erfarenheter, kunskap och idéer.
            Vi har erfarenhet av att testa nya saker – och om det inte fungerar, då justerar vi. 
            Det gäller både stort och smått. Vi kommer med en ståndpunkt och en filosofi, som vår
            handbok beskriver, men utöver det vill vi att du och ditt team bidrar till att utveckla Variant-koncernen på samma villkor som oss.
            </p>
          </Block>
        </Content>
      </Wrapper>

      <Wrapper className={styles.page3}>
        <Content mode="left">
          <h2>2028</h2>
          <div className={styles.strong}>
            <p>
              Vi har låtit tankarna snurra och låtit fantasin löpa fritt.
              Hur tror vi att Variant Linköping kan se ut – lite längre fram i tiden?
              Det här är idéer som du och ditt team kommer att behöva förbättra och vidareutveckla.
              Så med alla förbehåll, här är en bild av hur oktober 2028 <i>kan</i> se ut.
            </p>
          </div>

          <div className={styles.em}>
            <p>
              Den stora snackisen under lunchen den senaste tiden är våra nya lokaler.
              Vi har verkligen vuxit ur våra nuvarande utrymmen. De har varit en bra match för 
              oss hittills, men nu känner vi att det är dags att "flytta hemifrån." Den 18–20 
              december går flyttlasset, och från den 2. januari håller vi till i 
              större och finare lokaler på Apotekaregatan.
            </p>
            <p>
              Måndag den 2. oktober började Sophia och Luca, en designer och en utvecklare.
              Luca kommer från Knowit där han arbetat som interaktionsdesigner, medan Sophia har varit 
              utvecklare på Consid de senaste tre åren. Med dessa två ombord är vi nu 31 konsulter i Linköping. 
              Och nästa månad får vi en transfer från Variant Oslo, då Pelle flyttar 
              hem igen efter sju år i efter sju år i grannlandet.
            </p>

            <p>
              Torsdag den 5. oktober håller vi som vanligt Variantdagen, den första fredagen i månaden.
              Keynote för dagen hålls av produktchefen Sarah från vår kund SAAB. Hon berättar om hur SAAB genom 
              avancerad digitalisering och prediktiv modellering har förbättrat sin produktionsprocess, 
              vilket har resulterat i en 15 % effektivisering och en minskning av produktionscyklerna 
              med 20 %. Vi är väldigt stolta över att ha varit en betydande del av detta framsteg.
              Variantdagen fortsätter sedan i två spår. För utvecklarna erbjuder vi en fördjupningskurs i 
              Kotlin och Spring, som äntligen fått stort genomslag hos våra kunder. På designsidan har vi besök av 
              Tonje Evanger, vår norska CDO, och tillsammans med henne har vi sessioner inom tjänstedesign.
              Dagen avslutas som vanligt med att vår VD går igenom företagets status, där förra månadens 
              resultat presenteras tillsammans med prognoserna för året.
            </p>
          </div>
        </Content>

        <Content mode="right" className={styles.page3__right}>
          <div className={styles.em}>
            <p className={styles.page7}>
                  Efter Variantdagen arrangeras en rebus – en tradition som har blivit en 
                  favorit här på Variant Linköping. Olika team ger sig ut i stadens gator och gränder för att lösa 
                  kluriga gåtor skapade av vår alldeles egna gåtmästare. Förra året var några av uppgifterna så svåra 
                  att ett av lagen slutade upp på Dahlboms istället för att lösa rebusen!
            </p>

            <p>
                I maj nådde Variant som helhet en tredjeplats i Universums ranking över Sveriges  
                mest eftertraktade arbetsgivare. Samma månad fick vi in 15 relevanta ansökningar 
                från erfarna designers och utvecklare som vill arbeta i Linköping.
            </p>
          </div>
        </Content>
      </Wrapper>

      <Wrapper className={styles.page4}>
        <Content mode="left">
          <h2>Det första året</h2>

          <div className={styles.page4__padded}>
            <img
              src={require('./assets/bg-page4-1.png')}
              alt=""
              className={styles.page4__img}
            />
            <div className={styles.strong}>
              <p>
                Även det första året kommer till stor del att påverkas av vad du och resten av 
                Linköpingsteamet vill göra och testa. Vi har dock några tankar om vad vi 
                tror kan vara en bra ansats under de första 12 månaderna. Men detta 
                ska fortfarande ses som vårt förslag – vi är supernyfikna på vad du tänker om det!
              </p>
            </div>

            <div className={styles.em}>
              <p>
                När du börjar är vi 8 Varianter på plats. Alla är erfarna 
                och skickliga konsulter, och vi har redan avtal med flera spännande kunder.
              </p>

              <p>
                Fokuset resten av 2025 är tvådelat: att rekrytera fler och få ut konsulterna 
                i uppdrag. Under året har vi signerat 6 nya medarbetare, och de första börjar i maj. 
                Vid slutet av året arbetar 15 personer här, varav 2 är utvecklare som började 
                i augusti. Linköping drar starkt nytta av koncernens rekryteringskapacitet.
              </p>
              <p>
                I september åker vi på Variantresa till Helsingfors tillsammans med 
                resten av Variant Sverige. Då får ni chansen att lära känna alla andra 
                Varianter ordentligt och bygga starkare band inom teamet!
              </p>
        
            </div>
          </div>
        </Content>

        <Content mode="right">
          <div className={styles.em}>
            <p>
                Det första året genomförs Variantdagen ibland tillsammans med andra 
                kontor och ibland på egen hand. Ibland reser Varianter mellan städerna, 
                andra gånger sker det via video. Den 5 september 2026 åker vi på Variantresa 
                tillsammans med respektive till Helsingfors.
            </p>
          </div>
        </Content>
      </Wrapper>

      <Wrapper className={styles.page5}>
        <Content mode="left">
          <Block>
            <h2>Frihet</h2>

            <p>
              Vi minns det så väl. Hur givande det var att få forma företaget precis så som vi tyckte att det borde vara. 
              Ibland tog vi fel steg och behövde justera kursen, men det var lika fullt en fantastisk resa. 
              Denna upplevelse vill vi nu ge dig och ditt team. Och det är inte bara för att vi är så vänliga eller så 
              entusiastiska över att ge människor bra upplevelser – även om det också är sant. 
              Av samma anledning som vi litar på att summan av individers bedömningar överträffar ledningens, 
              tror vi också att genom att ge autonomi, frihet och tillit till de olika bolagen i koncernen, kommer 
              helheten att bli starkare än om allt styrs av en central ledning.

              Vi söker därför ditt entreprenörskap och din pionjäranda. Det här 
              ska kännas som att starta något eget – fast med tryggheten i ryggen.
            </p>
          </Block>
        </Content>

        <Content mode="right">
          <Block>
            <h2>Trygghet</h2>

            <p>
              Det är många saker som måste fungera för att en konsultstartup ska ta fart. 
              Det handlar om allt från finansiering, försäljning, rekrytering, bemanning, kulturbyggande 
              och kompetensutveckling till att etablera strukturkapital och systemkapital.

              Om vi ska vara ärliga – allt detta är inte alltid lika roligt. Och det går 
              inte alltid lika snabbt. Å andra sidan är mycket av det här otroligt givande. Vi finns här 
              för att hjälpa dig och ditt team där ni kanske inte har era starkaste sidor, 
              så att ni kan fokusera på det ni är bäst på.
            </p>

            <p>
              För det är inte så att vi tänker att ni ska klara er själva enbart med autonomi och 
              tillit. Vi har mycket erfarenhet som vi gärna delar med er, men då främst i 
              rollen som coacher snarare än som rådgivare.
            </p>

            <p>
              Mycket av vår strukturkapital och systemkapital finns redan på plats. Lite av detta är 
              obligatoriskt, men vi antar att du inte brinner för att själv sköta bokföringen eller 
              bygga ett eget bemanningssystem. Vi har också en handbok som vi är ganska 
              stolta över. Vi gissar att du gärna vill dra nytta av den!
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
  mode?: 'purple' | 'default';
  className?: string;
}>;
function Wrapper({ children, mode = 'default', className }: WrapperProps) {
  const style = styles[`wrapper__${mode}`];
  return (
    <section className={and(styles.wrapper, style, className)}>
      {children}
    </section>
  );
}

type ContentProps = React.PropsWithChildren<{
  mode?: 'right' | 'left' | 'right_bottom' | 'left_bottom' | 'center_bottom';
  className?: string;
}>;
function Content({ children, mode = 'right_bottom', className }: ContentProps) {
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
  return classes.filter(Boolean).join(' ');
}
