import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default () => (
  <div style={{ color: `#d50000` }}>
    <Link to="/about/">About</Link>
    <Header headerText="The Witcher" />
    <p>The world of the Witchers, coming soon</p>
  </div>
)
