import { GambaUi, TokenValue, useCurrentPool, useGambaPlatformContext, useUserBalance } from 'gamba-react-ui-v2'
import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { Modal } from '../components/Modal'
import { PLATFORM_JACKPOT_FEE } from '../constants'
import TokenSelect from './TokenSelect'
import { UserButton } from './UserButton'

const Bonus = styled.button`
  all: unset;
  cursor: pointer;
  color: #041c17;
  border-radius: 10px;
  background: linear-gradient(120deg, #03ffa4, #68ffd1);
  padding: 4px 12px;
  font-size: 12px;
  text-transform: uppercase;
  font-weight: bold;
  transition: transform .2s;
  box-shadow: 0 10px 25px rgba(3, 255, 164, 0.2);
  &:hover {
    transform: translateY(-1px);
  }
`

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 14px 20px;
  position: fixed;
  background: rgba(3, 5, 18, 0.85);
  backdrop-filter: blur(20px);
  top: 0;
  left: 0;
  z-index: 1000;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.45);
`

const Logo = styled(NavLink)`
  height: 34px;
  margin: 0 10px;
  & > img {
    height: 100%;
  }
`

const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 1px;
  flex-wrap: wrap;
  row-gap: 10px;
  flex: 1;
  min-width: 0;
  overflow-x: auto;
  padding-right: 8px;
  &::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 950px) {
    display: none;
  }
`

const MenuLink = styled(NavLink)`
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  padding: 6px 16px;
  border-radius: 999px;
  border: 1px solid transparent;
  background: rgba(255, 255, 255, 0.02);
  transition: color 0.2s ease, border-color 0.2s ease, background 0.2s ease, transform 0.2s ease;
  &:hover {
    color: rgba(255, 255, 255, 0.95);
    border-color: rgba(255, 255, 255, 0.2);
    background: rgba(255, 255, 255, 0.05);
    transform: translateY(-1px);
  }
  &.active {
    color: white;
    border-color: rgba(111, 124, 255, 0.5);
    background: rgba(111, 124, 255, 0.12);
  }
`

const ActionGroup = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  position: relative;
  flex-wrap: wrap;
  justify-content: flex-end;
  @media (max-width: 950px) {
    display: none;
  }
`

const HeaderButton = styled.a<{ $primary?: boolean }>`
  padding: 10px 20px;
  border-radius: 999px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 11px;
  font-weight: 600;
  border: 1px solid ${({ $primary }) => ($primary ? 'transparent' : 'rgba(255, 255, 255, 0.35)')};
  background: ${({ $primary }) => ($primary ? 'linear-gradient(120deg, #7d5bff, #9f6bff)' : 'transparent')};
  color: white;
  cursor: pointer;
  transition: opacity 0.2s ease, transform 0.2s ease;
  &:hover {
    opacity: 0.95;
    transform: translateY(-1px);
  }
`

const NAV_LINKS: { label: string, to: string, end?: boolean }[] = [
  { label: 'Home', to: '/', end: true },
  { label: 'Platform', to: '/platform' },
  { label: 'Solutions', to: '/solutions' },
  { label: 'Features', to: '/features' },
  { label: 'Payments', to: '/payments' },
  { label: 'Demo', to: '/demo' },
  { label: 'Timeline', to: '/timeline' },
  { label: 'Careers', to: '/career' },
  { label: 'Contact', to: '/contact' },
]

const DesktopContent = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  @media (max-width: 950px) {
    display: none;
  }
`

const MobileBar = styled.div`
  width: 100%;
  display: none;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  @media (max-width: 950px) {
    display: flex;
  }
`

const MobileToggle = styled.button`
  all: unset;
  cursor: pointer;
  width: 42px;
  height: 42px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: border-color 0.2s ease, transform 0.2s ease;
  &:hover {
    transform: translateY(-1px);
    border-color: rgba(255, 255, 255, 0.6);
  }
  span {
    width: 18px;
    height: 2px;
    background: white;
    display: block;
    border-radius: 999px;
    position: absolute;
    transition: transform 0.2s ease, opacity 0.2s ease;
  }
  span:nth-child(1) {
    transform: translateY(-6px);
  }
  span:nth-child(2) {
    transform: translateY(0);
  }
  span:nth-child(3) {
    transform: translateY(6px);
  }
  &.open span:nth-child(1) {
    transform: rotate(45deg);
  }
  &.open span:nth-child(2) {
    opacity: 0;
  }
  &.open span:nth-child(3) {
    transform: rotate(-45deg);
  }
`

const MobileOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1500;
  background: rgba(2, 4, 18, 0.96);
  backdrop-filter: blur(20px);
  padding: 80px 24px 32px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  overflow-y: auto;
  overscroll-behavior: contain;
`

const MobileMenuHeader = styled.div`
  position: absolute;
  top: 16px;
  left: 0;
  width: 100%;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const MobileNavLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 12px;
`

const MobileMenuLink = styled(MenuLink)`
  font-size: 16px;
  padding: 12px 18px;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.02);
  &.active {
    border-color: rgba(111, 124, 255, 0.6);
    background: rgba(111, 124, 255, 0.18);
    box-shadow: 0 10px 25px rgba(108, 123, 255, 0.2);
  }
`

const MobileActionGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export default function Header() {
  const pool = useCurrentPool()
  const context = useGambaPlatformContext()
  const balance = useUserBalance()
  const [bonusHelp, setBonusHelp] = React.useState(false)
  const [jackpotHelp, setJackpotHelp] = React.useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const location = useLocation()

  const path = location.pathname
  const isDemoSection = path.startsWith('/demo')

  React.useEffect(() => {
    const original = document.body.style.overflow
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = original
    }
    return () => {
      document.body.style.overflow = original
    }
  }, [mobileMenuOpen])

  React.useEffect(() => {
    setMobileMenuOpen(false)
  }, [location.pathname])

  return (
    <>
      {bonusHelp && (
        <Modal onClose={() => setBonusHelp(false)}>
          <h1>Bonus ✨</h1>
          <p>
            You have <b><TokenValue amount={balance.bonusBalance} /></b> worth of free plays. This bonus will be applied automatically when you play.
          </p>
          <p>
            Note that a fee is still needed from your wallet for each play.
          </p>
        </Modal>
      )}
      {jackpotHelp && (
        <Modal onClose={() => setJackpotHelp(false)}>
          <h1>Jackpot 💰</h1>
          <p style={{ fontWeight: 'bold' }}>
            There{'\''}s <TokenValue amount={pool.jackpotBalance} /> in the Jackpot.
          </p>
          <p>
            The Jackpot is a prize pool that grows with every bet made. As the Jackpot grows, so does your chance of winning. Once a winner is selected, the value of the Jackpot resets and grows from there until a new winner is selected.
          </p>
          <p>
            You will be paying a maximum of {(PLATFORM_JACKPOT_FEE * 100).toLocaleString(undefined, { maximumFractionDigits: 4 })}% for each wager for a chance to win.
          </p>
          <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            {context.defaultJackpotFee === 0 ? 'DISABLED' : 'ENABLED'}
            <GambaUi.Switch
              checked={context.defaultJackpotFee > 0}
              onChange={(checked) => context.setDefaultJackpotFee(checked ? PLATFORM_JACKPOT_FEE : 0)}
            />
          </label>
        </Modal>
      )}
      <StyledHeader>
        <DesktopContent>
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <Logo to="/">
              <img alt="Platform logo" src="/logo.svg" />
            </Logo>
            <NavLinks>
              {NAV_LINKS.map((link) => (
                <MenuLink
                  key={link.to}
                  to={link.to}
                  end={link.end}
                >
                  {link.label}
                </MenuLink>
              ))}
            </NavLinks>
          </div>
          <ActionGroup>
            {pool.jackpotBalance > 0 && (
              <Bonus onClick={() => setJackpotHelp(true)}>
                💰 <TokenValue amount={pool.jackpotBalance} />
              </Bonus>
            )}
            {balance.bonusBalance > 0 && (
              <Bonus onClick={() => setBonusHelp(true)}>
                ✨ <TokenValue amount={balance.bonusBalance} />
              </Bonus>
            )}
            {isDemoSection && (
              <>
                <TokenSelect />
                <UserButton />
              </>
            )}
            {!isDemoSection && (
              <>
                <HeaderButton href="mailto:sales@livesoft.ca">
                  Contact Sales
                </HeaderButton>
                <HeaderButton
                  as={NavLink}
                  to="/demo"
                  $primary
                >
                  Book a Demo
                </HeaderButton>
              </>
            )}
          </ActionGroup>
        </DesktopContent>
        <MobileBar>
          <Logo to="/">
            <img alt="Platform logo" src="/logo.svg" />
          </Logo>
          <MobileToggle
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            className={mobileMenuOpen ? 'open' : ''}
          >
            <span />
            <span />
            <span />
          </MobileToggle>
        </MobileBar>
      </StyledHeader>
      {mobileMenuOpen && (
        <MobileOverlay>
          <MobileMenuHeader>
            <Logo
              to="/"
              onClick={() => setMobileMenuOpen(false)}
            >
              <img alt="Platform logo" src="/logo.svg" />
            </Logo>
            <MobileToggle
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
              className="open"
            >
              <span />
              <span />
              <span />
            </MobileToggle>
          </MobileMenuHeader>
          {(pool.jackpotBalance > 0 || balance.bonusBalance > 0) && (
            <div style={{ marginTop: '40px', display: 'flex', gap: '10px' }}>
              {pool.jackpotBalance > 0 && (
                <Bonus onClick={() => setJackpotHelp(true)}>
                  💰 <TokenValue amount={pool.jackpotBalance} />
                </Bonus>
              )}
              {balance.bonusBalance > 0 && (
                <Bonus onClick={() => setBonusHelp(true)}>
                  ✨ <TokenValue amount={balance.bonusBalance} />
                </Bonus>
              )}
            </div>
          )}
          <MobileNavLinks>
            {NAV_LINKS.map((link) => (
              <MobileMenuLink
                key={link.to}
                to={link.to}
                end={link.end}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </MobileMenuLink>
            ))}
          </MobileNavLinks>
          <MobileActionGroup>
            {isDemoSection ? (
              <>
                <TokenSelect />
                <UserButton />
              </>
            ) : (
              <>
                <HeaderButton href="mailto:sales@livesoft.ca">
                  Contact Sales
                </HeaderButton>
                <HeaderButton
                  as={NavLink}
                  to="/demo"
                  $primary
                >
                  Book a Demo
                </HeaderButton>
              </>
            )}
          </MobileActionGroup>
        </MobileOverlay>
      )}
    </>
  )
}
