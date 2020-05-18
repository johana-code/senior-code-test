import App, { Container } from "next/app"
import React from "react"

//global rsuite styles
import 'rsuite/dist/styles/rsuite-default.css'

{/* bootstrap */}
import 'bootstrap/dist/css/bootstrap.min.css';

// react notifications
import 'react-notifications-component/dist/theme.css'

//redux bindings
import { Store, InitialState } from '@services'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'

//create our store
let { store, persistor } = Store ( InitialState )


export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
		<Provider store = { store } >
			<PersistGate loading={null} persistor={persistor}>
				<Component {...pageProps} />
			</PersistGate>
		</Provider>
    )
  }
}