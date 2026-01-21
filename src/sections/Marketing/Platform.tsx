import React from 'react'
import {
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
  StatCard,
  StatGrid,
  StatLabel,
  StatValue,
} from './marketingStyles'

const PLATFORM_STATS = [
  { value: '99.99%', label: 'Uptime SLA', description: 'Mission-critical reliability with automated failover and 24/7 monitoring.' },
  { value: '<50ms', label: 'Response Time', description: 'Optimized APIs and edge caching for lightning-fast player experiences.' },
  { value: '30+', label: 'Markets', description: 'Multi-language, multi-currency, and localization-ready out of the box.' },
]

const PLATFORM_MODULES = [
  {
    title: 'Microservices Architecture',
    description: 'Every module is independently scalable, testable, and deployable. No monolithic bottlenecks.',
  },
  {
    title: 'Account Management',
    description: 'Unified player profiles, session handling, authentication, and multi-device support.',
  },
  {
    title: 'Virtual Wallet',
    description: 'Real-time balance updates, multi-currency support, and transaction history.',
  },
  {
    title: 'Bonus Engine',
    description: 'Flexible campaign rules, wagering requirements, and automated bonus allocation.',
  },
  {
    title: 'Reporting & Analytics',
    description: 'Real-time dashboards, custom reports, and data export capabilities.',
  },
  {
    title: 'Content Management',
    description: 'Multi-language support, game catalog management, and promotional content.',
  },
  {
    title: 'Risk & Fraud Tools',
    description: 'Automated risk scoring, anomaly detection, and compliance monitoring.',
  },
]

const INFRASTRUCTURE = [
  {
    title: 'Auto-Scaling & Load Balancing',
    description: 'Kubernetes-orchestrated containers that scale horizontally based on real-time traffic. Handle spikes during major events without manual intervention.',
  },
  {
    title: 'Multi-Region Deployment',
    description: 'Deploy to AWS, GCP, or Azure across multiple regions. Geo-routing ensures players connect to the nearest data center for minimal latency.',
  },
  {
    title: 'Compliance-Ready Architecture',
    description: 'Built-in audit logging, immutable transaction records, and data residency controls to meet UK, Malta, Curaçao, and other jurisdictional requirements.',
  },
  {
    title: 'Localization Engine',
    description: 'Support for 20+ languages, currency conversion, regional payment methods, and culturally adapted content—all managed through a single dashboard.',
  },
]

export default function Platform() {
  return (
    <PageWrapper>
      <HeroCard>
        <Eyebrow>Platform</Eyebrow>
        <HeroTitle>Built In-House, Proven at Scale</HeroTitle>
        <HeroSubtitle>
          Our proprietary microservices platform powers casino and sportsbook operations from launch to millions of players. Engineered for uptime, compliance, and rapid scaling.
        </HeroSubtitle>
      </HeroCard>

      <GlassCard>
        <SectionTitle>Performance at a Glance</SectionTitle>
        <StatGrid>
          {PLATFORM_STATS.map((stat) => (
            <StatCard key={stat.label}>
              <StatValue>{stat.value}</StatValue>
              <StatLabel>{stat.label}</StatLabel>
              <SectionSubtitle>{stat.description}</SectionSubtitle>
            </StatCard>
          ))}
        </StatGrid>
      </GlassCard>

      <Section>
        <SectionTitle>Core Platform Modules</SectionTitle>
        <SectionSubtitle>Everything operators need to run casino and sportsbook programs without custom plumbing.</SectionSubtitle>
        <CardGrid>
          {PLATFORM_MODULES.map((module) => (
            <Card key={module.title}>
              <CardTitle>{module.title}</CardTitle>
              <CardDescription>{module.description}</CardDescription>
            </Card>
          ))}
        </CardGrid>
      </Section>

      <Section>
        <SectionTitle>Enterprise-Grade Infrastructure</SectionTitle>
        <SectionSubtitle>Designed for uptime, compliance, and forward-looking localization.</SectionSubtitle>
        <CardGrid>
          {INFRASTRUCTURE.map((item) => (
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
