import '@/styles/globals.scss';
import { SnackbarProvider } from 'notistack';
import Script from 'next/script';

function App({ Component, pageProps = {} }) {
  return (
    <div>
      {/* Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-N06W4EKKHK`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-N06W4EKKHK');
          `,
        }}
      />
      {/* Google Analytics */}
      <SnackbarProvider maxSnack={3}>
        <Component {...pageProps} />
      </SnackbarProvider>
    </div>
  )
}

export default App;
