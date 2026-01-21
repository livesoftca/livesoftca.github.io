import React from 'react'
import {
  BulletList,
  Card,
  CardDescription,
  CardGrid,
  CardTitle,
  Eyebrow,
  HeroCard,
  HeroSubtitle,
  HeroTitle,
  PageWrapper,
  Section,
  SectionSubtitle,
  SectionTitle,
  StatCard,
  StatGrid,
  StatLabel,
  StatValue,
} from './marketingStyles'

const PAYMENT_STATS = [
  { value: '100+', label: 'Payment Methods' },
  { value: '50+', label: 'Currencies' },
  { value: '95%+', label: 'Success Rate' },
  { value: '<2s', label: 'Avg Response' },
]

const PAYMENT_CATEGORIES = [
  {
    title: 'Credit & Debit Cards',
    description: '20+ providers',
    bullets: ['Visa', 'Mastercard', 'Maestro', 'American Express'],
  },
  {
    title: 'E-Wallets',
    description: '40+ providers',
    bullets: ['Skrill', 'Neteller', 'PayPal', 'Paysafecard', 'ecoPayz'],
  },
  {
    title: 'Bank Transfers',
    description: '25+ providers',
    bullets: ['SEPA', 'Wire Transfer', 'Open Banking', 'Trustly', 'Sofort'],
  },
  {
    title: 'Cryptocurrency',
    description: '15+ providers',
    bullets: ['Bitcoin', 'Ethereum', 'USDT', 'Litecoin', 'Ripple'],
  },
  {
    title: 'Local Methods',
    description: '20+ providers',
    bullets: ['MuchBetter', 'Zimpler', 'Interac', 'Boleto', 'PIX'],
  },
]

const PAYMENT_ENHANCEMENTS = [
  {
    title: 'Smart Routing & Cascading',
    description: 'Automatically route transactions to the best-performing provider based on success rate, cost, and player location. If one gateway fails, we cascade to the next—maximizing approvals.',
  },
  {
    title: 'Real-Time Settlement & Reconciliation',
    description: 'Automated daily settlement reports with provider-level breakdowns. Instantly reconcile transactions and resolve discrepancies through our admin dashboard.',
  },
  {
    title: 'Fraud Prevention & Velocity Checks',
    description: 'Built-in fraud scoring with velocity limits, duplicate transaction detection, and integration with third-party screening tools. Protect your operation from chargebacks and abuse.',
  },
  {
    title: 'PCI-DSS Compliant Infrastructure',
    description: 'Our payment infrastructure is PCI-DSS Level 1 certified. Sensitive card data never touches your servers—tokenization and secure vaults handle everything.',
  },
]

export default function Payments() {
  return (
    <PageWrapper>
      <HeroCard>
        <Eyebrow>Payments</Eyebrow>
        <HeroTitle>100+ Payment Methods, One Integration</HeroTitle>
        <HeroSubtitle>
          Accept payments from players worldwide with our pre-integrated payment gateway network. No complex negotiations—just plug and play.
        </HeroSubtitle>
      </HeroCard>

      <Section>
        <SectionTitle>Global Coverage</SectionTitle>
        <SectionSubtitle>One API, every major funding method.</SectionSubtitle>
        <StatGrid>
          {PAYMENT_STATS.map((stat) => (
            <StatCard key={stat.label}>
              <StatValue>{stat.value}</StatValue>
              <StatLabel>{stat.label}</StatLabel>
            </StatCard>
          ))}
        </StatGrid>
      </Section>

      <Section>
        <SectionTitle>Every Payment Method Your Players Need</SectionTitle>
        <CardGrid>
          {PAYMENT_CATEGORIES.map((category) => (
            <Card key={category.title}>
              <CardTitle>{category.title}</CardTitle>
              <CardDescription>{category.description}</CardDescription>
              <BulletList>
                {category.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </BulletList>
            </Card>
          ))}
        </CardGrid>
      </Section>

      <Section>
        <SectionTitle>Beyond Simple Payment Processing</SectionTitle>
        <CardGrid>
          {PAYMENT_ENHANCEMENTS.map((item) => (
            <Card key={item.title}>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </Card>
          ))}
        </CardGrid>
      </Section>
    </PageWrapper>
  )
}
