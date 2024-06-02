import '@/styles/globals.scss';
import { SnackbarProvider } from 'notistack';

function App({ Component, pageProps = {} }) {
  return (
    <SnackbarProvider maxSnack={3}>
      <Component {...pageProps} />
    </SnackbarProvider>
  )
}

export default App;
