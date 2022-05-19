import React from 'react'
import cn from 'classnames'
import SEO from 'components/seo'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { PortableText } from '@portabletext/react'

import AmericanFlag from 'images/flag.inline.svg'

const Officer = ({ info, index }) => {
  const even = index % 2 === 0
  return (
    <article
      className={cn(
        'flex flex-col md:flex-row gap-6 justify-between items-center p-6 md:p-12 overflow-hidden',
        {
          'bg-rtc-red': even,
          'bg-rtc-blue': !even,
        }
      )}
    >
      <section className="relative">
        <AmericanFlag className="absolute w-3/4 text-white -translate-y-1/4 opacity-10" />
        <div
          className={cn('relative grid gap-3 text-center md:text-left', {
            'selection:bg-rtc-red': !even,
          })}
        >
          <h2 className="text-3xl text-white">{info.name}</h2>
          <p className="text-2xl font-bold text-gray-400 uppercase">
            {info.office}
          </p>
          <div className="text-white max-w-prose">
            <PortableText value={info.bio} />
          </div>
        </div>
      </section>
      <GatsbyImage
        className={cn('bg-white rounded-full w-60', {
          'md:order-first': !even,
        })}
        image={info.image.asset.gatsbyImageData}
        alt={`${info.name}'s photo`}
      />
    </article>
  )
}

const OfficersPage = ({ data }) => {
  console.log(data)
  return (
    <main>
      <SEO title="Officers" />
      {data.officers.nodes.map((info, index) => (
        <Officer info={info} key={index} index={index} />
      ))}

      {/* <div className="overflow-x-scroll break-all">
        <pre>
          <code>{JSON.stringify(data, null, 2)}</code>
        </pre>
      </div> */}
    </main>
  )
}

export const query = graphql`
  query {
    officers: allSanityOfficer(sort: { fields: order, order: ASC }) {
      nodes {
        name
        office
        bio: _rawBio
        image {
          asset {
            gatsbyImageData(fit: FILLMAX, placeholder: BLURRED, aspectRatio: 1)
          }
        }
      }
    }
  }
`

export default OfficersPage
