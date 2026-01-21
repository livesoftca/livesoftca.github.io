import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { GlassCard } from './marketingStyles'

const FooterCard = styled(GlassCard)`
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`

const Brand = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`

const BrandName = styled.h3`
  margin: 0;
  font-size: 22px;
`

const BrandTagline = styled.p`
  margin: 0;
  color: rgba(255, 255, 255, 0.75);
`

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 20px;
`

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const ColumnTitle = styled.span`
  text-transform: uppercase;
  font-size: 13px;
  letter-spacing: 1px;
  color: #9fa8ff;
`

const FooterLink = styled.a`
  color: rgba(255, 255, 255, 0.85);
  font-size: 14px;
  &:hover {
    color: white;
  }
`

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  color: rgba(255, 255, 255, 0.85);
`

const FooterLegal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.6);
`

const LegalLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`

const legalLinkStyle: React.CSSProperties = {
  color: 'rgba(255, 255, 255, 0.8)',
}

const NAV_COLUMNS = [
  {
    title: 'Product',
    links: [
      { label: 'Platform', to: '/platform' },
      { label: 'Solutions', to: '/solutions' },
      { label: 'Features', to: '/features' },
      { label: 'Payments', to: '/payments' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', to: '/' },
      { label: 'Careers', to: '/career' },
      { label: 'Contact', to: '/contact' },
    ],
  },
]

export function MarketingFooter() {
  return (
    <FooterCard as="footer">
      <Brand>
        <BrandName>LiveSoft</BrandName>
        <BrandTagline>The platform for modern iGaming brands.</BrandTagline>
      </Brand>
      <FooterGrid>
        {NAV_COLUMNS.map((column) => (
          <FooterColumn key={column.title}>
            <ColumnTitle>{column.title}</ColumnTitle>
            {column.links.map((link) => (
              <FooterLink
                key={link.label}
                as={NavLink}
                to={link.to}
              >
                {link.label}
              </FooterLink>
            ))}
          </FooterColumn>
        ))}
        <FooterColumn>
          <ColumnTitle>Contact</ColumnTitle>
          <ContactInfo>
            <a href="mailto:hello@livesoft.ca" style={legalLinkStyle}>hello@livesoft.ca</a>
            <span>Mississauga, ON</span>
            <span>Canada</span>
          </ContactInfo>
        </FooterColumn>
      </FooterGrid>
      <FooterLegal>
        <span>© 2025 LiveSoft. All rights reserved.</span>
        <LegalLinks>
          <FooterLink href="#">Privacy Policy</FooterLink>
          <FooterLink href="#">Terms of Service</FooterLink>
        </LegalLinks>
        <span>For B2B iGaming technology. No real-money gambling offered on this site.</span>
      </FooterLegal>
    </FooterCard>
  )
}

export default MarketingFooter
