import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Third = () => (
  <Layout>
    <h1>Ez a harmadik oldal</h1>
    <Link to="/">Vissza a főoldalra</Link>
  </Layout>
)

export const Head = () => <Seo title="Page three" />

export default Third;