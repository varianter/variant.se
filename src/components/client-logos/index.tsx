import style from './client-logos.module.css';
const ClientLogos = () => {
  const Eghed = require('src/assets/client-logos/eghed_logo.png');
  const Vattenfall = require('src/assets/client-logos/vattenfall_logo.svg');
  const SjuTjugoGruppen = require('src/assets/client-logos/720gruppen-logo.svg');
  const Ramboll = require('src/assets/client-logos/ramboll_logo.svg');
  const Lansforsakringar = require('src/assets/client-logos/lansforsakringar_logo.svg');
  const Munters = require('src/assets/client-logos/munters_logo.svg');
  const Froda = require('src/assets/client-logos/froda_logo.svg');
  const FeedbackFrog = require('src/assets/client-logos/feedbackfrog_logo.svg');
  const StrategiRadet = require('src/assets/client-logos/strategiradet_logo.svg');
  const Axs = require('src/assets/client-logos/axs_logo.svg');

  return (
    <div className={style['client-logos__container']}>
      <h2>Företag vi samarbetat med</h2>
      <div className={style['client-logos__img-container']}>
        <img src={Eghed} alt="Egheds logga" />
        <img src={Vattenfall} alt="Vattenfalls logga" />
        <img src={SjuTjugoGruppen} alt="720gruppens logga" />
        <img src={Ramboll} alt="Rambolls logga" />
        <img src={Lansforsakringar} alt="Länsförsäkringars logga" />
        <img src={Munters} alt="Munters logga" />
        <img src={Froda} alt="Frodas logga" />
        <img src={FeedbackFrog} alt="FeedbackFrogs logga" />
        <img src={StrategiRadet} alt="Strategirådets logga" />
        <img src={Axs} alt="Axs logga" />
      </div>
    </div>
  );
};

export default ClientLogos;
