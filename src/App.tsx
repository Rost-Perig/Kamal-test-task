import React from 'react'
import './App.css'
import { Layout } from 'Components/Layout'
import { Categories } from 'Components/Categories'

function App() {
  return (
    <div className="App">
      <Layout>
        <Categories />
      </Layout>
    </div>
  )
}

export default App
