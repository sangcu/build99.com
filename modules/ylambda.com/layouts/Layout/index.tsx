import { event } from 'lib/client/GA'
import { Modal } from 'components'
import useSubscribe from 'hooks/useSubscribe'
import SubscriptionError from 'molecules/SubscriptionError'
import SubscriptionForm from 'molecules/SubscriptionForm'
import SubscriptionSuccess from 'molecules/SubscriptionSuccess'

import { useState } from 'react'
import Header from './Header'
import LayoutProps from './Layout.props'
import { GA } from 'page-views/constants'

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
    event(GA.ACTIONS.Subscription_Modal_Close, {
      category: GA.CATEGORIES.Subscription,
      label: GA.LABELS.Subscription_Modal,
    })
    reset()
    setOpenModal(false)
  }

  const onSignIn = () => {
    event(GA.ACTIONS.Sign_In_Click, {
      category: GA.CATEGORIES.Subscription,
      label: GA.LABELS.Sign_In_Button,
    })
    onOpenModal()
  }
  const onSignUp = () => {
    event(GA.ACTIONS.Sign_In_Click, {
      category: GA.CATEGORIES.Subscription,
      label: GA.LABELS.Sign_In_Button,
    })

    onOpenModal()
  }

  return (
    <div className="bg-white h-screen bg-gray-900">
      <div className="relative overflow-hidden">
        <Header onSignIn={onSignIn} onSignUp={onSignUp} />
        <main className="mt-[72px] md:mt-[56px]">{children}</main>
        {/* {renderFooter && renderFooter()} */}
      </div>
      {/* <Modal isOpen={openModal} onClose={onCloseModal}>
        {isSubscribeSuccess ? (
          <SubscriptionSuccess onClose={onCloseModal} />
        ) : subscribeError ? (
          <SubscriptionError error={(subscribeError as any)?.response?.data} />
        ) : (
          <SubscriptionForm
            isLoading={isSubscribing}
            elementId="subscription-form-modal"
            onSubscribe={onSubscribe}
          />
        )}
      </Modal> */}
    </div>
  )
}

export default Layout
