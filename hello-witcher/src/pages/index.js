import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Background from "../components/background"

export default () => (
  <Background>
    <div style={{ color: `#d50000` }}>
      <Link to="/about/">About</Link>
      <Header headerText="The Witcher" />
      <p>The world of the Witchers, coming soon</p>
    </div>
  </Background>
)
