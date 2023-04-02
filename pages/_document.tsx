import Document, { Html, Head, Main, NextScript } from "next/document";

export default class Doc extends Document {
  render() {
    return (
      <Html lang="no">
        <Head />
        <body>
          <Main />
          <NextScript />

          <script
            dangerouslySetInnerHTML={{
              __html: `
                var _paq = window._paq = window._paq || [];
                /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
                _paq.push(["disableCookies"]);
                _paq.push(['trackPageView']);
                _paq.push(['enableLinkTracking']);
                (function() {
                  var u="https://variant.innocraft.cloud/";
                  _paq.push(['setTrackerUrl', u+'matomo.php']);
                  _paq.push(['setSiteId', '5']);
                  var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
                  g.async=true; g.src='//cdn.innocraft.cloud/variant.innocraft.cloud/matomo.js'; s.parentNode.insertBefore(g,s);
                })();
                `,
            }}
          />
        </body>
      </Html>
    );
  }
}
