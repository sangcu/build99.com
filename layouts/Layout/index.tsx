import { Modal } from 'components'
import Head from 'next/head'

import { useState } from 'react'
import Header from './Header'
import LayoutProps from './Layout.props'
import SubscriptionForm from './SubscriptionForm'

const Layout: React.FunctionComponent<LayoutProps> = ({
  children,
  renderFooter,
}) => {
  const [openModal, setOpenModal] = useState(false)

  const onSignIn = () => setOpenModal(true)
  const onSignUp = () => setOpenModal(true)

  return (
    <div className="bg-white">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative overflow-hidden">
        <Header onSignIn={onSignIn} onSignUp={onSignUp} />
        <main className="mt-[72px] md:mt-[74px]">{children}</main>
        {renderFooter && renderFooter()}
      </div>
      <Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
        <SubscriptionForm />
      </Modal>
    </div>
  )
}

export default Layout
