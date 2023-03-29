import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const links = [
  {
    text: "Finax",
    url: "https://www.finax.eu/hu",
    description:
      "Világszínvonalú szolgáltatások, helyi hozzáféréssel",
  },
  {
    text: "Dolgos Pénz",
    url: "https://dolgospenz.hu/",
    description:
      "Fedezd fel az utat a pénzügyi szabadság felé.",
  },
]

const samplePageLinks = [
  {
    text: "Oldal 2",
    url: "page-2",
    badge: false,
    description:
      "A simple example of linking to another page within a Gatsby site",
  },
  {
    text: "Oldal 3",
    url: "page-3",
    badge: false,
    description:
      "A simple example of linking to another page within a Gatsby site",
  },
]

const moreLinks = [
  { text: "Budapesti Értéktőzsde", 
    url: "https://www.bet.hu/" },
  {
    text: "S&P 500",
    url: "https://www.ishares.com/de/privatanleger/de/produkte/253743/ishares-sp-500-b-ucits-etf-acc-fund?switchLocale=y&siteEntryPassthrough=true",
  },
  {
    text: "Warren Buffet könyvajánlásai",
    url: "https://www.portfolio.hu/short/20201226/ezt-a-4-konyvet-ajanlja-warren-buffett-azoknak-akik-befektetesekrol-tanulnanak-463156",
  }
]

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = ({data}) => (
  <Layout>

    <div className={styles.textCenter}>
      <StaticImage
        src="../images/example.png"
        loading="eager"
        width={64}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />

      <h1>
        Egyszerűen a <b>befektetésekről</b> !
      </h1>

      <p className={styles.intro}>
        <b>További oldalak:</b>{" "}
        {samplePageLinks.map((link, i) => (
          <React.Fragment key={link.url}>
            <Link to={link.url}>{link.text}</Link>
            {i !== samplePageLinks.length - 1 && <> · </>}
          </React.Fragment>
        ))}
        <br />
      </p>
    </div>

    <ul className={styles.list}>
      {links.map(link => (
        <li key={link.url} className={styles.listItem}>
          <a
            className={styles.listItemLink}
            href={`${link.url}${utmParameters}`}
          >
            {link.text} ↗
          </a>
          <p className={styles.listItemDescription}>{link.description}</p>
        </li>
      ))}
    </ul>

    <div>
        <h2>Blog bejegyzések</h2>
        {data.allMarkdownRemark.edges.map(({node}) => (
          <div key={node.id}>
            <h4>{node.frontmatter.title}</h4>
            <p>{node.excerpt}</p>
            <span>{node.frontmatter.date}</span>
          </div>
        ))}
    </div>

    {moreLinks.map((link, i) => (
      <React.Fragment key={link.url}>
        <a href={`${link.url}${utmParameters}`}>{link.text}</a>
        {i !== moreLinks.length - 1 && <> · </>}
      </React.Fragment>
    ))}

  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            date
            description
            title
          }
          excerpt
        }
      }
      totalCount
    }
  }
`