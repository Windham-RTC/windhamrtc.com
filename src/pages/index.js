import React from 'react'
import SEO from 'components/seo'
import InviteForm from 'components/inviteform'
// import Modal from 'components/modal'

const IndexPage = () => {
  return (
    <main className="flex flex-col items-center justify-center h-full p-8">
      <SEO title="Home" isFront={true} />
      <InviteForm />
      {/* <Modal /> */}
    </main>
  )
}

export default IndexPage
