import { useWalletModal } from '@solana/wallet-adapter-react-ui'
import { useTransactionError } from 'gamba-react-v2'
import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Modal } from './components/Modal'
import { useToast } from './hooks/useToast'
import Career from './sections/Career/Career'
import Dashboard from './sections/Dashboard/Dashboard'
import Game from './sections/Game/Game'
import Header from './sections/Header'
import MarketingFooter from './sections/Marketing/MarketingFooter'
import RecentPlays from './sections/RecentPlays/RecentPlays'
import Toasts from './sections/Toasts'
import Timeline from './sections/Timeline/Timeline'
import { Contact, Features, Home, Payments, Platform, Solutions } from './sections/Marketing'
import { MainWrapper } from './styles'

function ScrollToTop() {
  const { pathname } = useLocation()
  React.useEffect(() => window.scrollTo(0, 0), [pathname])
  return null
}

function ErrorHandler() {
  const walletModal = useWalletModal()
  const toast = useToast()
  const [error, setError] = React.useState<Error>()

  useTransactionError(
    (error) => {
      if (error.message === 'NOT_CONNECTED') {
        walletModal.setVisible(true)
        return
      }
      toast({ title: '❌ Transaction error', description: error.error?.errorMessage ?? error.message })
    },
  )

  return (
    <>
      {error && (
        <Modal onClose={() => setError(undefined)}>
          <h1>Error occured</h1>
          <p>{error.message}</p>
        </Modal>
      )}
    </>
  )
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <ErrorHandler />
      <Header />
      <Toasts />
      <MainWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/platform" element={<Platform />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/features" element={<Features />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/demo" element={<Dashboard />} />
          <Route path="/demo/:gameId" element={<Game />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/career" element={<Career />} />
        </Routes>
        <MarketingFooter />
        {/* <h2 style={{ textAlign: 'center' }}>Recent Plays</h2>
        <RecentPlays /> */}
      </MainWrapper>
    </>
  )
}
