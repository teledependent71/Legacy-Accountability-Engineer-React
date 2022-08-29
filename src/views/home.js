import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Legacy Accountability Engineer</title>
        <meta property="og:title" content="Legacy Accountability Engineer" />
      </Helmet>
    </div>
  )
}

export default Home
