import React from 'react'
import styled from 'styled-components'
import { GlassCard, PageWrapper as MarketingPageWrapper } from '../Marketing/marketingStyles'

type JobStatus = 'open' | 'closed'

type Job = {
  id: string
  title: string
  company: string
  location: string
  workplace: string
  type: string
  tags: string[]
  summary: string
  about: string
  responsibilities: string[]
  requirements: string[]
  benefits: string[]
  status: JobStatus
  statusLabel: string
  apply?: {
    label: string
    href: string
  }
  customSections?: {
    heading: string
    content: string
  }[]
  niceToHave?: string[]
  compensation?: string
}

const JOBS: Job[] = [
  {
    id: 'game-design-intern',
    title: 'Game Design Intern',
    company: 'Livesoft',
    location: 'Mississauga, Ontario, Canada',
    workplace: 'On-site',
    type: 'Full-time / Internship',
    tags: ['Design', 'Entry-level', 'Gaming'],
    summary: 'Live Soft Solutions is expanding its creative studio to launch new AI-powered entertainment experiences.',
    about: 'Join a collaborative pod of designers, developers, and artists to dream up mini-games, polish mechanics, and run thoughtful playtests before features ship to players.',
    responsibilities: [
      'Design and document gameplay systems, rules, and player progression.',
      'Develop concise game design documents with clear objectives and mechanics.',
      'Collaborate closely with engineers and artists to turn concepts into playable prototypes.',
      'Run internal playtests, gather feedback, and tune balance.',
      'Research trends and competitor titles to inspire new experiences.',
    ],
    requirements: [
      'Enrolled in or recently graduated from a Game Design, Interactive Media, or related program.',
      'Foundational understanding of game mechanics, user flows, and balancing principles.',
      'Comfortable prototyping ideas in Unity, Godot, Unreal, or Figma.',
      'Strong communication and documentation skills.',
      'Passion for gaming plus sharp attention to detail.',
    ],
    benefits: [
      'Contribute directly to live game projects and roadmaps.',
      'Mentorship from experienced designers and developers.',
      'Add a polished portfolio piece and reference letter.',
      'Flexible hybrid or remote schedule.',
      'Potential to extend the collaboration after the internship.',
    ],
    status: 'open',
    statusLabel: 'Accepting applications',
    apply: {
      label: 'Apply via email',
      href: 'mailto:careers@livesoft.ca?subject=Game%20Design%20Intern%20-%20Livesoft',
    },
  },
  {
    id: 'business-development-executive',
    title: 'Business Development Executive',
    company: 'Livesoft',
    location: 'Mississauga, Ontario, Canada',
    workplace: 'Hybrid',
    type: 'Full-time',
    tags: ['Growth', 'Client-facing', 'Go-to-market'],
    summary: 'Help Live Soft Solutions build trusted relationships with partners, incubators, and operators ahead of our next platform launch.',
    about: 'You will sit alongside the founders to map the ecosystem, prep outreach, lead demos, and capture feedback that shapes our commercial roadmap.',
    responsibilities: [
      'Research and prioritize potential partners, clients, and B2B leads across gaming and tech.',
      'Draft outreach notes, pitch decks, and lightweight proposals.',
      'Support live demos, capture follow-ups, and keep stakeholders informed.',
      'Track conversations and handoffs with simple CRM or spreadsheet tools.',
      'Gather qualitative feedback from events, accelerators, and pilot programs.',
      'Represent Livesoft at networking sessions, incubator programming, and online meetings.',
      'Contribute fresh ideas to marketing pushes and growth experiments.',
    ],
    requirements: [
      '1-2 years of experience (internships count) in business development, marketing, or tech sales.',
      'Confident communicator across email, video calls, and live meetings.',
      'Comfortable with LinkedIn, Zoom, and Google Workspace as daily tools.',
      'Curious about startups, gaming, and emerging technology.',
      'Organized self-starter who can work independently inside a small team.',
    ],
    benefits: [
      'Learn directly from founders and senior mentors in Canada\'s startup ecosystem.',
      'Exposure to both technical and commercial sides of modern gaming platforms.',
      'Flexible hybrid environment with room to own projects.',
      'Clear growth path into partnerships or full business development roles.',
    ],
    status: 'open',
    statusLabel: 'Accepting applications',
    apply: {
      label: 'Apply via email',
      href: 'mailto:careers@livesoft.ca?subject=Business%20Development%20Executive%20-%20Livesoft',
    },
  },
  {
    id: 'game-developer-intern',
    title: 'Game Developer Intern',
    company: 'Livesoft',
    location: 'Mississauga, Ontario, Canada',
    workplace: 'Hybrid or Remote',
    type: 'Internship (3-6 months)',
    tags: ['Engineering', 'Unity / C#', 'Prototype'],
    summary: 'Live Soft Solutions is scaling its in-house platform and needs hands-on engineers who love turning ideas into playable builds.',
    about: 'Pair up with designers and technical leads to implement features, debug systems, and iterate quickly based on playtest data.',
    responsibilities: [
      'Implement and test gameplay mechanics, UI interactions, and VFX.',
      'Integrate art, animation, and audio assets into builds with designers.',
      'Participate in playtests and quickly iterate on feel and performance.',
      'Debug, optimize, and keep code clean for shared prototypes.',
      'Pitch creative ideas that elevate the player experience.',
    ],
    requirements: [
      'Currently studying or recently graduated in Computer Science, Game Development, or related field.',
      'Hands-on with at least one major engine (Unity preferred, Godot or Unreal welcome).',
      'Working knowledge of C# or a comparable programming language.',
      'Understands gameplay loops, physics basics, and object-oriented patterns.',
      'Excited to collaborate with a small, focused team and learn fast.',
    ],
    benefits: [
      'Direct mentorship from senior developers and technical leads.',
      'Opportunity to ship real features and expand your portfolio.',
      'Visibility into the full pipeline from concept to polish and testing.',
      'Reference letter plus consideration for future part-time or full-time roles.',
      'Flexible hybrid or fully-remote schedule.',
    ],
    status: 'open',
    statusLabel: 'Accepting applications',
    apply: {
      label: 'Apply via email',
      href: 'mailto:careers@livesoft.ca?subject=Game%20Developer%20Intern%20-%20Livesoft',
    },
  },
  {
    id: 'marketing-intern',
    title: 'Marketing Intern (B2B iGaming / Gaming Technology)',
    company: 'Live Soft Solutions Inc.',
    location: 'Canada (Remote or Hybrid)',
    workplace: 'Remote or Hybrid',
    type: 'Internship (Part-time or Full-time, Flexible)',
    tags: ['Marketing', 'B2B', 'iGaming'],
    summary: 'Duration: 3–6 months, with possibility of extension',
    about: '',
    customSections: [
      {
        heading: 'About Live Soft Solutions',
        content: 'Live Soft Solutions Inc. is a B2B gaming technology company building premade and customizable iGaming solutions for casino operators. We work closely with operators and industry partners across multiple markets, with a strong focus on compliance, fairness, and scalable technology.',
      },
      {
        heading: 'Role Overview',
        content: 'We are looking for a motivated Marketing Intern to support our marketing and business development efforts as we prepare for market expansion. This role is ideal for someone interested in B2B marketing, gaming, or technology startups, and who wants hands-on exposure rather than purely academic work.',
      },
    ],
    responsibilities: [
      'Support content creation for LinkedIn, website, and documentation (industry insights, product explanations, thought leadership)',
      'Assist with market research on iGaming trends, operators, and competitors',
      'Help prepare marketing materials such as pitch decks, one-pagers, and case-style content',
      'Support outreach initiatives to potential partners and clients (email, LinkedIn, events follow-up)',
      'Coordinate with the internal team (CTO, COO, CMO) on messaging and positioning',
      'Assist in maintaining basic marketing assets and content calendars',
    ],
    requirements: [
      'Student or recent graduate in Marketing, Business, Communications, or a related field',
      'Strong written English skills (professional, clear, structured)',
      'Comfortable researching new industries and learning quickly',
      'Interest in gaming, technology, fintech, or B2B software is a strong plus',
      'Self-driven, organized, and comfortable working in a startup environment',
    ],
    niceToHave: [
      'Experience with LinkedIn content or B2B marketing',
      'Basic understanding of SaaS or platform-based business models',
      'Familiarity with tools like Notion, Google Docs, Canva, or similar',
    ],
    benefits: [
      'Real startup experience with direct exposure to founders',
      'Understanding of the iGaming and gaming technology industry',
      'Practical experience in B2B marketing and market entry strategy',
      'Opportunity to grow into a longer-term role as the company scales',
    ],
    compensation: 'Paid or unpaid depending on profile and availability (to be discussed). Flexible hours to accommodate academic schedules.',
    status: 'open',
    statusLabel: 'Accepting applications',
    apply: {
      label: 'Apply via email',
      href: 'mailto:careers@livesoft.ca?subject=Marketing%20Intern%20-%20Live%20Soft%20Solutions',
    },
  },
]

const openRoles = JOBS.filter((job) => job.status === 'open').length

export default function Career() {
  return (
    <PageWrapper>
      <Hero>
        <HeroBadge>Careers at Livesoft</HeroBadge>
        <HeroTitle>Build the future of fair, data-driven gaming</HeroTitle>
        <HeroSubtitle>
          Our studio blends design craft, technical rigor, and player empathy. Join a team that ships modern experiences
          with thoughtful process, transparent communication, and a bias toward action.
        </HeroSubtitle>
        <HeroActions>
          <HeroButton
            href="mailto:careers@livesoft.ca?subject=Open%20roles%20at%20Livesoft"
            $primary
          >
            Send your resume
          </HeroButton>
        </HeroActions>
        <HeroStats>
          <Stat>
            <StatValue>{openRoles}</StatValue>
            <StatLabel>Open roles</StatLabel>
          </Stat>
          <Stat>
            <StatValue>{JOBS.length}</StatValue>
            <StatLabel>Total listings</StatLabel>
          </Stat>
          <Stat>
            <StatValue>2025</StatValue>
            <StatLabel>Focus year</StatLabel>
          </Stat>
        </HeroStats>
      </Hero>
      <JobGrid>
        {JOBS.map((job) => (
          <JobCard key={job.id}>
            <CardHeader>
              <div>
                <JobTitle>{job.title}</JobTitle>
                <Company>{job.company}</Company>
              </div>
              <StatusBadge $status={job.status}>
                {job.statusLabel}
              </StatusBadge>
            </CardHeader>
            <MetaRow>
              <MetaTag>{job.location}</MetaTag>
              <MetaTag>{job.workplace}</MetaTag>
              <MetaTag>{job.type}</MetaTag>
            </MetaRow>
            <TagList>
              {job.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </TagList>
            <Summary>{job.summary}</Summary>
            {job.about && <About>{job.about}</About>}
            {job.customSections && job.customSections.map((section) => (
              <SectionBlock key={section.heading}>
                <SectionHeading>{section.heading}</SectionHeading>
                <About>{section.content}</About>
              </SectionBlock>
            ))}
            <SectionDivider />
            <SectionBlock>
              <SectionHeading>{job.customSections ? 'Key Responsibilities' : "What you'll do"}</SectionHeading>
              <SectionList>
                {job.responsibilities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </SectionList>
            </SectionBlock>
            <SectionBlock>
              <SectionHeading>{job.customSections ? 'Who You Are' : "What we're looking for"}</SectionHeading>
              <SectionList>
                {job.requirements.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </SectionList>
            </SectionBlock>
            {job.niceToHave && (
              <SectionBlock>
                <SectionHeading>Nice to Have</SectionHeading>
                <SectionList>
                  {job.niceToHave.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </SectionList>
              </SectionBlock>
            )}
            <SectionBlock>
              <SectionHeading>{job.customSections ? "What You'll Gain" : "What you'll gain"}</SectionHeading>
              <SectionList>
                {job.benefits.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </SectionList>
            </SectionBlock>
            {job.compensation && (
              <SectionBlock>
                <SectionHeading>Compensation</SectionHeading>
                <About>{job.compensation}</About>
              </SectionBlock>
            )}
            <CardFooter>
              {job.apply && (
                <ApplyButton href={job.apply.href}>
                  {job.apply.label}
                </ApplyButton>
              )}
            </CardFooter>
          </JobCard>
        ))}
      </JobGrid>
    </PageWrapper>
  )
}

const PageWrapper = styled(MarketingPageWrapper)`
  gap: 40px;
`

const Hero = styled(GlassCard)`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 12px;
  padding: 44px;
  border: 1px solid rgba(176, 194, 255, 0.35);
  &:before {
    background: radial-gradient(circle at 15% 20%, rgba(3, 255, 164, 0.3), transparent 40%),
      radial-gradient(circle at 80% 0%, rgba(111, 124, 255, 0.35), transparent 55%);
  }
  @media (max-width: 640px) {
    padding: 32px;
  }
`

const HeroBadge = styled.span`
  align-self: flex-start;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #d8dcff;
  background: rgba(255, 255, 255, 0.1);
  padding: 6px 14px;
  border-radius: 999px;
`

const HeroTitle = styled.h1`
  font-size: clamp(32px, 4.2vw, 48px);
  margin: 0;
  line-height: 1.1;
`

const HeroSubtitle = styled.p`
  margin: 0;
  max-width: 720px;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  font-size: 18px;
`

const HeroActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`

const HeroButton = styled.a<{ $primary?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 20px;
  border-radius: 999px;
  font-weight: 600;
  font-size: 14px;
  text-decoration: none;
  color: white;
  border: 1px solid ${(props) => (props.$primary ? 'rgba(3, 255, 164, 0.8)' : 'rgba(255, 255, 255, 0.25)')};
  background: ${(props) => (props.$primary ? 'rgba(3, 255, 164, 0.15)' : 'transparent')};
  transition: transform 0.2s ease, border-color 0.2s ease, background 0.2s ease;
  &:hover {
    transform: translateY(-1px);
    border-color: rgba(255, 255, 255, 0.7);
    background: ${(props) => (props.$primary ? 'rgba(3, 255, 164, 0.25)' : 'rgba(255, 255, 255, 0.06)')};
  }
`

const HeroStats = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`

const Stat = styled.div`
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 18px;
  padding: 16px 24px;
  min-width: 140px;
  box-shadow: inset 0 0 0 1px rgba(3, 255, 164, 0.1);
`

const StatValue = styled.div`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 4px;
`

const StatLabel = styled.div`
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: rgba(255, 255, 255, 0.65);
`

const JobGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`

const JobCard = styled(GlassCard).attrs({ as: 'article' })`
  padding: 32px;
  &:before {
    background: radial-gradient(circle at 0% 0%, rgba(255, 255, 255, 0.08), transparent 50%);
  }
  @media (max-width: 640px) {
    padding: 24px;
  }
`

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  align-items: flex-start;
  margin-bottom: 20px;
  flex-wrap: wrap;
`

const JobTitle = styled.h2`
  margin: 0;
  font-size: 26px;
`

const Company = styled.p`
  margin: 4px 0 0;
  color: rgba(255, 255, 255, 0.7);
  font-size: 15px;
`

const StatusBadge = styled.span<{ $status: JobStatus }>`
  padding: 6px 14px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  border: 1px solid ${(props) => (props.$status === 'open' ? 'rgba(3, 255, 164, 0.7)' : 'rgba(255, 99, 132, 0.6)')};
  color: ${(props) => (props.$status === 'open' ? '#03ffa4' : '#ff99ae')};
  background: ${(props) => (props.$status === 'open' ? 'rgba(3, 255, 164, 0.1)' : 'rgba(255, 99, 132, 0.07)')};
`

const MetaRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 12px;
`

const MetaTag = styled.span`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.8);
  padding: 4px 12px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
`

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 16px;
`

const Tag = styled.span`
  padding: 6px 12px;
  border-radius: 999px;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.75);
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.02);
`

const Summary = styled.p`
  margin: 0 0 8px;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.9);
`

const About = styled.p`
  margin: 0 0 16px;
  color: rgba(255, 255, 255, 0.75);
  line-height: 1.6;
`

const SectionDivider = styled.div`
  height: 1px;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0));
  margin: 20px 0;
`

const SectionBlock = styled.div`
  margin-bottom: 20px;
`

const SectionHeading = styled.h3`
  margin: 0 0 10px;
  font-size: 15px;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #9fa8ff;
`

const SectionList = styled.ul`
  margin: 0;
  padding-left: 18px;
  display: grid;
  gap: 8px;
  color: rgba(255, 255, 255, 0.85);
  font-size: 15px;
  line-height: 1.6;
`

const CardFooter = styled.div`
  margin-top: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
`

const ApplyButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 18px;
  border-radius: 999px;
  background: rgba(108, 123, 255, 0.2);
  border: 1px solid rgba(108, 123, 255, 0.5);
  color: white;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.2s ease, transform 0.2s ease, border-color 0.2s ease;
  &:hover {
    transform: translateY(-1px);
    background: rgba(108, 123, 255, 0.35);
    border-color: rgba(108, 123, 255, 0.8);
  }
`
