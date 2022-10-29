import { Modal } from 'components'
import Head from 'next/head'
import Script from 'next/script'

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
      <Script id="mcjs" crossOrigin="anonymous" strategy="lazyOnload">
        {`
             !function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/b00200417b3d893cd93cbedee/15c594d23cb2f90f16d5d899f.js");
              `}
      </Script>
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
