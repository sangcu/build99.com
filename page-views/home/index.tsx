import type { NextPage } from 'next'
import { useState } from 'react'

import Header from './Header'
import Introduction from './Introduction'
import AppDetail from './AppDetail'
import Architecture from './Architecture'
import HowItWork from './HowItWork'
import SubscriptionForm from './SubscriptionForm'
import Footer from './Footer'
import { Modal } from 'components'

const Home: NextPage = () => {
  const [openModal, setOpenModal] = useState(false)

  const onSignIn = () => setOpenModal(true)
  const onSignUp = () => setOpenModal(true)

  return (
    <div className="bg-white">
      <div className="relative overflow-hidden">
        <Header onSignIn={onSignIn} onSignUp={onSignUp} />
        <main>
          <Introduction />
          <AppDetail />
          <Architecture />
          <HowItWork />
        </main>
        <Footer />
      </div>
      <Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
        <SubscriptionForm />
      </Modal>
    </div>
  )
}

export default Home
