// rafce
import { useState } from 'react';
import React from 'react'
import * as expocon from './component/exporter';
import * as expocot from './containers/exporter';

import "./App.css"

const App = () => {
  return (
    <>
      <div className='gradient'>
        <expocon.Navbar />
        <expocot.Header />
      </div>
      <expocon.Brand />
      <expocon.Features />
      <expocot.Possiblity />
      <expocon.Cta />
      <expocot.WhatGpt3 />
      <expocot.Footer />
      
    </>
  )
}

export default App