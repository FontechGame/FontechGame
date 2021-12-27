import type { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'

import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'

import AppContent from '@containers/AppContent'
import configureStore from '@redux-folder/configureStore'

const { store } = configureStore()

function MyApp({
  Component,
  pageProps,
}: AppProps) {
  return (
    <Provider store={store}>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      />
      <AppContent>
        <Component {...pageProps} />
      </AppContent>
    </Provider>
  )
}

export default MyApp
