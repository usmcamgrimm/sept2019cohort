import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default () => (
  <div style={{ color: `green` }}>
    <Link to="//">Home</Link>
    <Header headerText="About the Gatsby-School Witchers" />
    <p>Such wow. React and witchers</p>
  </div>
)
