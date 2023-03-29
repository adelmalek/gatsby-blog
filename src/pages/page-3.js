import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Third = () => (
  <Layout>
    <h1>Hi from the third page</h1>
    <p>Welcome to page 3</p>
    <Link to="/">Vissza a főoldalra</Link>
  </Layout>
)

export const Head = () => <Seo title="Page three" />

export default Third;