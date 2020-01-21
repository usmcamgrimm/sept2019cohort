import React from "react"
import backgroundStyles from "./background.module.css"

export default ({ children }) => (
  <div className={backgroundStyles.background}>{children}</div>
)
