import React from 'react'
import { CORE_VALUES, GLOBAL_STATS, STORY_CALLOUTS, STORY_MILESTONES, STORY_PARAGRAPHS, SUPPORT_ITEMS } from './content'
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
  Paragraph,
  Section,
  SectionSubtitle,
  SectionTitle,
  StatCard,
  StatGrid,
  StatLabel,
  StatValue,
  StoryAccent,
  StoryContent,
  StoryLayout,
  StoryStats,
  StoryTimeline,
  StoryTimelineBody,
  StoryTimelineDescription,
  StoryTimelineDot,
  StoryTimelineItem,
  StoryTimelineTitle,
  Tag,
  Divider,
} from './marketingStyles'

export default function Home() {
  return (
    <PageWrapper>
      <HeroCard>
        <Eyebrow>LiveSoft</Eyebrow>
        <HeroTitle>Powering the Next Generation of iGaming Operators</HeroTitle>
        <HeroSubtitle>
          LiveSoft is a modern iGaming platform provider building the technology stack that ambitious operators need to launch and scale.
        </HeroSubtitle>
      </HeroCard>

      <StoryLayout>
        <StoryContent>
          <SectionTitle>Our Story</SectionTitle>
          <SectionSubtitle>How we help ambitious brands launch faster.</SectionSubtitle>
          {STORY_PARAGRAPHS.map((text) => (
            <Paragraph key={text}>{text}</Paragraph>
          ))}
        </StoryContent>
        <StoryAccent>
          <Tag>Snapshot</Tag>
          <StoryStats>
            {STORY_CALLOUTS.map((callout) => (
              <div key={callout.label}>
                <StatValue style={{ fontSize: 26 }}>{callout.value}</StatValue>
                <StatLabel>{callout.label}</StatLabel>
              </div>
            ))}
          </StoryStats>
          <Divider />
          <Tag>Milestones</Tag>
          <StoryTimeline>
            {STORY_MILESTONES.map((item) => (
              <StoryTimelineItem key={item.title}>
                <StoryTimelineDot />
                <StoryTimelineBody>
                  <StoryTimelineTitle>{item.title}</StoryTimelineTitle>
                  <StoryTimelineDescription>{item.description}</StoryTimelineDescription>
                </StoryTimelineBody>
              </StoryTimelineItem>
            ))}
          </StoryTimeline>
        </StoryAccent>
      </StoryLayout>

      <Section>
        <SectionTitle>Our Values</SectionTitle>
        <SectionSubtitle>
          Principles that keep us focused on operator outcomes, player trust, and sustainable growth.
        </SectionSubtitle>
        <CardGrid>
          {CORE_VALUES.map((value) => (
            <Card key={value.title}>
              <CardTitle>{value.title}</CardTitle>
              <CardDescription>{value.description}</CardDescription>
            </Card>
          ))}
        </CardGrid>
      </Section>

      <GlassCard>
        <SectionTitle>Global Footprint</SectionTitle>
        <Paragraph>
          Our platform is live in 25+ jurisdictions, supporting operators in regulated markets across North America, Latin America,
          and emerging regions worldwide.
        </Paragraph>
        <StatGrid style={{ marginTop: 24 }}>
          {GLOBAL_STATS.map((stat) => (
            <StatCard key={stat.label}>
              <StatValue>{stat.value}</StatValue>
              <StatLabel>{stat.label}</StatLabel>
            </StatCard>
          ))}
        </StatGrid>
      </GlassCard>

      <GlassCard>
        <SectionTitle>Support That Scales With You</SectionTitle>
        <Paragraph>From integration to scaling, our team is with you every step of the way. We provide:</Paragraph>
        <BulletList>
          {SUPPORT_ITEMS.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </BulletList>
      </GlassCard>
    </PageWrapper>
  )
}
