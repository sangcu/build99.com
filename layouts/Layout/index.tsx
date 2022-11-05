import { Modal } from 'components'
import useSubscribe from 'hooks/useSubscribe'
import SubscriptionError from 'molecules/SubscriptionError'
import SubscriptionForm from 'molecules/SubscriptionForm'
import SubscriptionSuccess from 'molecules/SubscriptionSuccess'
import Head from 'next/head'

import { useState } from 'react'
import Header from './Header'
import LayoutProps from './Layout.props'

const Layout: React.FunctionComponent<LayoutProps> = ({
  children,
  renderFooter,
}) => {
  const [openModal, setOpenModal] = useState(false)

  const {
    isLoading: isSubscribing,
    isSuccess: isSubscribeSuccess,
    error: subscribeError,
    mutate: onSubscribe,
    reset,
  } = useSubscribe()

  const onOpenModal = () => {
    reset()
    setOpenModal(true)
  }

  const onCloseModal = () => {
    reset()
    setOpenModal(false)
  }

  const onSignIn = () => onOpenModal()
  const onSignUp = () => onOpenModal()

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
      <Modal isOpen={openModal} onClose={onCloseModal}>
        {isSubscribeSuccess ? (
          <SubscriptionSuccess onClose={onCloseModal} />
        ) : subscribeError ? (
          <SubscriptionError error={(subscribeError as any)?.response?.data} />
        ) : (
          <SubscriptionForm
            isLoading={isSubscribing}
            onSubscribe={onSubscribe}
          />
        )}
      </Modal>
    </div>
  )
}

export default Layout
