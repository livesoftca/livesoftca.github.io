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
} from './marketingStyles'

const FEATURE_AREAS = [
  {
    title: 'Payments',
    description: '100+ integrated payment methods covering credit cards, e-wallets, crypto, and local banking.',
    bullets: [
      'Instant deposits and fast withdrawals',
      'Multi-currency wallet with real-time conversion',
      'Payment method routing and cascading',
      'PCI-DSS Level 1 compliant infrastructure',
      'Automated reconciliation and settlement',
      'Chargeback management and fraud detection',
    ],
  },
  {
    title: 'KYC & Risk Management',
    description: 'Automated identity verification and intelligent risk scoring to protect your operation.',
    bullets: [
      'Real-time KYC verification (Jumio, Onfido, Sumsub)',
      'Document upload and OCR scanning',
      'AML screening against global watchlists',
      'Behavioral analytics and anomaly detection',
      'Custom risk rules and alert thresholds',
      'Automated account flagging and limits',
    ],
  },
  {
    title: 'Customer Support',
    description: 'Unified support tools to manage player inquiries, tickets, and live chat.',
    bullets: [
      'Integrated helpdesk with ticket management',
      'Live chat with canned responses',
      'Player history and transaction lookup',
      'Multi-language support interface',
      'SLA tracking and performance metrics',
      'Third-party CRM integrations (Zendesk, Intercom)',
    ],
  },
  {
    title: 'CRM & Campaigns',
    description: 'Segment players, run targeted promotions, and automate retention workflows.',
    bullets: [
      'Player segmentation by behavior and value',
      'Email and SMS campaign builder',
      'Push notifications for mobile apps',
      'Automated bonus triggers and rewards',
      'A/B testing for promotions',
      'Lifecycle marketing automation',
    ],
  },
  {
    title: 'Compliance & Reporting',
    description: 'Jurisdiction-specific tools to meet regulatory requirements and generate audit reports.',
    bullets: [
      'Customizable responsible gaming limits',
      'Self-exclusion and cool-off workflows',
      'Audit trail for all transactions',
      'Regulatory reporting (UK, Malta, etc.)',
      'Data export for compliance audits',
      'GDPR-compliant data handling',
    ],
  },
  {
    title: 'Analytics & Business Intelligence',
    description: 'Real-time dashboards and deep analytics to optimize operations and player lifetime value.',
    bullets: [
      'Real-time KPIs and dashboards',
      'Player lifetime value (LTV) tracking',
      'Game performance and RTP monitoring',
      'Acquisition source and campaign ROI',
      'Custom report builder',
      'Data warehouse integration (BigQuery, Snowflake)',
    ],
  },
]

export default function Features() {
  return (
    <PageWrapper>
      <HeroCard>
        <Eyebrow>Features</Eyebrow>
        <HeroTitle>Everything You Need to Run &amp; Grow</HeroTitle>
        <HeroSubtitle>
          From payments to compliance, our platform includes all the tools operators need—out of the box.
        </HeroSubtitle>
      </HeroCard>

      <Section>
        <SectionTitle>Operational Control Center</SectionTitle>
        <SectionSubtitle>Modular features that cover the entire player lifecycle.</SectionSubtitle>
        <CardGrid>
          {FEATURE_AREAS.map((area) => (
            <Card key={area.title}>
              <CardTitle>{area.title}</CardTitle>
              <CardDescription>{area.description}</CardDescription>
              <BulletList>
                {area.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </BulletList>
            </Card>
          ))}
        </CardGrid>
      </Section>
    </PageWrapper>
  )
}
