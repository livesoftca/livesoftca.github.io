import React from 'react'
import styled from 'styled-components'
import { GlassCard, PageWrapper as MarketingPageWrapper, SectionSubtitle, SectionTitle } from '../Marketing/marketingStyles'

type TimelineEntry = {
  period: string
  bullets: string[]
}

const Wrapper = styled(MarketingPageWrapper)`
  gap: 32px;
`

const TimelineList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 24px;
`

const TimelineCard = styled(GlassCard).attrs({ as: 'li' })`
  padding: 28px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  &:before {
    background: radial-gradient(circle at 15% 10%, rgba(108, 123, 255, 0.25), transparent 55%);
  }
`

const Period = styled.h2`
  margin: 0;
  font-size: 18px;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #c3c9ff;
`

const BulletList = styled.ul`
  margin: 0;
  padding-left: 18px;
  display: grid;
  gap: 8px;
  color: rgba(255, 255, 255, 0.9);
  font-size: 15px;
  line-height: 1.6;
`

const ENTRIES: TimelineEntry[] = [
  {
    period: 'January 2025',
    bullets: [
      'Kicked off Livesoft v1.1 and refreshed platform settings with the new payout wallet and backup RPC endpoints.',
      'Wrapped the HiLo design sprint and built the core higher-or-lower logic ready for the final UI.',
    ],
  },
  {
    period: 'February 2025',
    bullets: [
      'Launched HiLo to players with a responsive layout, cash-out ladder, and simple streak tracking.',
    ],
  },
  {
    period: 'March 2025',
    bullets: [
      'Built the first Roulette prototype with a test wheel, bet overlay, and internal QA walk-through.',
      'Polished jackpot settings so fees and odds are clear in the game lobby.',
      'Removed the onboarding modal so new players land directly in the lobby.',
    ],
  },
  {
    period: 'April 2025',
    bullets: [
      'Released Roulette to production with localized bet names and live history updates.',
      'Automated the nightly build and rsync pipeline to the Livesoft edge server.',
    ],
  },
  {
    period: 'May 2025',
    bullets: [
      'Kicked off Plinko reliability work by tuning physics, balancing drop odds, and logging every run.',
    ],
  },
  {
    period: 'June 2025',
    bullets: [
      'Opened the Plinko beta with a clear “work in progress” notice and telemetry to capture outcome swings.',
      'Published Livesoft Pulse, the investor-facing timeline page showcasing major releases.',
    ],
  },
  {
    period: 'July 2025',
    bullets: [
      'Formed the Crash strike team to build rocket animation, multiplier logic, and cash-out flow.',
      'Added adaptive wager limits that scale with pool health to avoid rejected plays.',
      'Created flexible promo banner components for seasonal events.',
    ],
  },
  {
    period: 'August 2025',
    bullets: [
      'Launched Crash to production with live leaderboards and adjustable crash ranges.',
      'Set up backup RPC routes so games stay online during provider maintenance.',
    ],
  },
  {
    period: 'September 2025',
    bullets: [
      'Released the loyalty progression system with tiered rewards and wallet-based milestone unlocks.',
      'Deployed transaction simulation safeguards to pre-validate high-risk wagers before sending on-chain.',
    ],
  },
  {
    period: 'October 2025',
    bullets: [
      'Finished the tablet-friendly redesign, adding touch-first controls for Roulette and Crash.',
    ],
  },
  {
    period: 'November 2025',
    bullets: [
      'Rolled out a simpler operator settings page that surfaces bankroll, jackpot, and referral knobs in one place.',
      'Completed the Q4 security pass with signed asset delivery, stricter content security rules, and dependency updates.',
    ],
  },
]

export function Timeline() {
  return (
    <Wrapper>
      <div>
        <SectionTitle>2025 Platform Timeline</SectionTitle>
        <SectionSubtitle>
          Continuous delivery notes for Livesoft’s on-chain casino platform. Each milestone is tracked against production pushes.
        </SectionSubtitle>
      </div>
      <TimelineList>
        {ENTRIES.map((entry) => (
          <TimelineCard key={entry.period}>
            <Period>{entry.period}</Period>
            <BulletList>
              {entry.bullets.map((bullet, idx) => (
                <li key={idx}>{bullet}</li>
              ))}
            </BulletList>
          </TimelineCard>
        ))}
      </TimelineList>
    </Wrapper>
  )
}

export default Timeline
