import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {
  Card,
  CardDescription,
  CardGrid,
  CardTitle,
  CTAButton,
  CTASection,
  Eyebrow,
  GlassCard,
  HeroActions,
  HeroCard,
  HeroSubtitle,
  HeroTitle,
  PageWrapper,
  Section,
  SectionSubtitle,
  SectionTitle,
  SecondaryButton,
} from './marketingStyles'

const Form = styled.form`
  display: grid;
  gap: 16px;
`

const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
`

const Input = styled.input`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  padding: 12px 14px;
  color: white;
  font-size: 15px;
`

const TextArea = styled.textarea`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  padding: 12px 14px;
  color: white;
  font-size: 15px;
  min-height: 140px;
  resize: vertical;
`

const CONTACT_CARDS = [
  {
    title: 'Email',
    subtitle: 'General inquiries',
    value: 'hello@livesoft.ca',
    href: 'mailto:hello@livesoft.ca',
  },
  {
    title: 'Sales',
    subtitle: 'Book a demo',
    value: 'sales@livesoft.ca',
    href: 'mailto:sales@livesoft.ca',
  },
  {
    title: 'Office',
    subtitle: 'Hybrid work model',
    value: 'Mississauga, ON · Canada',
  },
  {
    title: 'Global Support',
    subtitle: 'We work with operators across 25+ jurisdictions. Our team is available 24/7 for technical support and onboarding assistance.',
  },
]

export default function Contact() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <PageWrapper>
      <HeroCard>
        <Eyebrow>Contact</Eyebrow>
        <HeroTitle>Get in Touch</HeroTitle>
        <HeroSubtitle>
          Ready to launch your iGaming platform? Have questions about our technology? We&apos;re here to help.
        </HeroSubtitle>
        <HeroActions>
          <CTAButton href="mailto:sales@livesoft.ca">
            Contact Sales
          </CTAButton>
          <SecondaryButton as={Link} to="/demo">
            Book a Demo
          </SecondaryButton>
        </HeroActions>
      </HeroCard>

      <Section>
        <SectionTitle>Contact Details</SectionTitle>
        <SectionSubtitle>Pick the channel that works best for your team.</SectionSubtitle>
        <CardGrid>
          {CONTACT_CARDS.map((card) => (
            <Card key={card.title}>
              <CardTitle>{card.title}</CardTitle>
              <CardDescription>{card.subtitle}</CardDescription>
              {card.href ? (
                <CTAButton
                  href={card.href}
                  style={{ width: 'fit-content', padding: '8px 16px', marginTop: 12 }}
                >
                  {card.value}
                </CTAButton>
              ) : (
                <CardDescription style={{ marginTop: 12 }}>
                  {card.value}
                </CardDescription>
              )}
            </Card>
          ))}
        </CardGrid>
      </Section>

      <GlassCard>
        <SectionTitle>Send us a Message</SectionTitle>
        <SectionSubtitle>Tell us about your project and we&apos;ll reach out within one business day.</SectionSubtitle>
        <Form onSubmit={handleSubmit}>
          <Label>
            Name *
            <Input name="name" placeholder="John Doe" required />
          </Label>
          <Label>
            Email *
            <Input type="email" name="email" placeholder="john@example.com" required />
          </Label>
          <Label>
            Company
            <Input name="company" placeholder="Your Company Name" />
          </Label>
          <Label>
            Message *
            <TextArea name="message" placeholder="Tell us about your project..." required />
          </Label>
          <CTAButton as="button" type="submit" style={{ width: 'fit-content' }}>
            Send Message
          </CTAButton>
        </Form>
      </GlassCard>

      <CTASection>
        <SectionTitle>Ready to Launch Your iGaming Platform?</SectionTitle>
        <SectionSubtitle>
          Get started with a personalized demo and see how LiveSoft can accelerate your go-to-market.
        </SectionSubtitle>
        <HeroActions style={{ justifyContent: 'center' }}>
          <CTAButton href="mailto:sales@livesoft.ca">
            Contact Sales
          </CTAButton>
          <SecondaryButton as={Link} to="/demo">
            Book a Demo
          </SecondaryButton>
        </HeroActions>
      </CTASection>
    </PageWrapper>
  )
}
