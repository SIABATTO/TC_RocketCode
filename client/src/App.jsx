import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Formulario from './components/FormCreate'
import Table from './components/Table'
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client'

const httpClient = new ApolloClient({
  uri:'http://localhost:3000/graphql',
  cache: new InMemoryCache()
})
function App() {
  return (
    <>
    <ApolloProvider client={httpClient}>
      <Formulario /> 
      <Table/> 
    </ApolloProvider>
    
    </>
  )
}

export default App
