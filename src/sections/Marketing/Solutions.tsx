import React from 'react'
import {
  BulletList,
  Card,
  CardDescription,
  CardGrid,
  CardTitle,
  Eyebrow,
  GlassCard,
  HeroCard,
  HeroSubtitle,
  HeroTitle,
  PageWrapper,
  Section,
  SectionSubtitle,
  SectionTitle,
} from './marketingStyles'

const SOLUTIONS = [
  {
    title: 'Casino',
    description: 'Comprehensive slot, table game, and jackpot solutions with 2000+ titles from leading providers.',
    bullets: [
      'Game aggregation from 50+ studios',
      'Progressive jackpot networks',
      'Free spins & bonus rounds',
      'RNG certification & fairness tools',
      'Mobile-optimized gameplay',
    ],
  },
  {
    title: 'Live Casino',
    description: 'Real-time dealer experiences with studio partnerships and branded tables.',
    bullets: [
      'Evolution, Pragmatic, Ezugi integrations',
      'Custom branded tables',
      'Multi-camera HD streams',
      'Chat & social features',
      'VIP room management',
    ],
  },
  {
    title: 'Sportsbook',
    description: 'Pre-match and in-play betting with deep market coverage and risk management.',
    bullets: [
      '30+ sports, 200+ leagues',
      'Live betting with real-time odds',
      'Betbuilder & multi-bet support',
      'Cash-out & partial cash-out',
      'Automated risk & limit controls',
    ],
  },
]

const PROJECT_TIMELINE = [
  {
    phase: 'Week 1',
    title: 'Discovery',
    description: 'Requirements gathering, jurisdiction review, payment strategy, and game selection.',
  },
  {
    phase: 'Weeks 2-4',
    title: 'Integration',
    description: 'Platform setup, API integration, payment gateway testing, and content migration.',
  },
  {
    phase: 'Weeks 5-6',
    title: 'QA & Compliance',
    description: 'End-to-end testing, responsible gaming tools, KYC workflows, and regulatory checks.',
  },
  {
    phase: 'Week 7',
    title: 'Launch',
    description: 'Soft launch with limited traffic, monitoring, bug fixes, and performance tuning.',
  },
  {
    phase: 'Ongoing',
    title: 'Optimize',
    description: 'Player analytics, A/B testing, feature rollouts, and campaign management.',
  },
]

export default function Solutions() {
  return (
    <PageWrapper>
      <HeroCard>
        <Eyebrow>Solutions</Eyebrow>
        <HeroTitle>Complete iGaming Solutions</HeroTitle>
        <HeroSubtitle>
          Casino, Live Casino, and Sportsbook—fully integrated with your platform. Launch faster with proven tech and pre-negotiated provider deals.
        </HeroSubtitle>
      </HeroCard>

      <Section>
        <SectionTitle>Everything You Need to Ship Content</SectionTitle>
        <SectionSubtitle>Combine casino, live dealer, and sportsbook experiences under one contract.</SectionSubtitle>
        <CardGrid>
          {SOLUTIONS.map((solution) => (
            <Card key={solution.title}>
              <CardTitle>{solution.title}</CardTitle>
              <CardDescription>{solution.description}</CardDescription>
              <BulletList>
                {solution.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </BulletList>
            </Card>
          ))}
        </CardGrid>
      </Section>

      <GlassCard>
        <SectionTitle>Go-to-Market in Weeks</SectionTitle>
        <SectionSubtitle>Our streamlined process takes you from concept to live operation faster than traditional builds.</SectionSubtitle>
        <CardGrid style={{ marginTop: 16 }}>
          {PROJECT_TIMELINE.map((step) => (
            <Card key={step.phase}>
              <Eyebrow>{step.phase}</Eyebrow>
              <CardTitle>{step.title}</CardTitle>
              <CardDescription>{step.description}</CardDescription>
            </Card>
          ))}
        </CardGrid>
      </GlassCard>
    </PageWrapper>
  )
}
