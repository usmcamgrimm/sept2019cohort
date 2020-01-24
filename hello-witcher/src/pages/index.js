import React from "react"
import { Link } from "gatsby"
import { render } from "react-router-dom"
import { Router } from "@reach/router"
import styles from "./index.module.css"

{
  /*
export default () => (
  <div style={{ color: `#d50000` }}>
    <Link to="/about/">About</Link>
    <Header headerText="The Witcher" />
    <p>The world of the Witchers, coming soon</p>
  </div>
)
*/
}

export default () => (
  <div>
    <div className={styles.titleBox}>
      <h1 style={styles.h1}>The Witcher</h1>
    </div>
    <div>
      <nav>
        <Link to="main">Enter</Link>
      </nav>
      <Router>
        <Main path="main" />
      </Router>
    </div>
    <img
      style={styles.wolf}
      src="../images/witcherBackground1.png"
      alt="wolf school emblem"
    />
  </div>
)

const Main = () => (
  <div>
    <h2 style={styles.h2}>Enter</h2>
  </div>
)
