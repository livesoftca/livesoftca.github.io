import styled from 'styled-components'

export const PageWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 140px 20px 96px;
  display: flex;
  flex-direction: column;
  gap: 64px;
  color: white;
  position: relative;
  z-index: 1;
  &:before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 10% 30%, rgba(108, 123, 255, 0.12), transparent 45%),
      radial-gradient(circle at 90% 10%, rgba(3, 255, 164, 0.12), transparent 40%);
    z-index: -1;
    pointer-events: none;
  }
  @media (max-width: 640px) {
    padding-top: 120px;
    gap: 48px;
  }
`

export const GlassCard = styled.section`
  position: relative;
  background: rgba(8, 9, 24, 0.82);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 28px;
  padding: 36px;
  box-shadow: 0 25px 80px rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(20px);
  overflow: hidden;
  &:before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at top right, rgba(120, 96, 255, 0.25), transparent 45%);
    opacity: 0.7;
    pointer-events: none;
  }
  & > * {
    position: relative;
    z-index: 1;
  }
  @media (max-width: 640px) {
    padding: 28px;
  }
`

export const HeroCard = styled(GlassCard)`
  padding: 44px;
  background: linear-gradient(140deg, rgba(111, 124, 255, 0.3), rgba(12, 16, 48, 0.95));
  border: 1px solid rgba(176, 194, 255, 0.35);
  display: flex;
  flex-direction: column;
  gap: 20px;
  &:before {
    background: radial-gradient(circle at 20% 20%, rgba(3, 255, 164, 0.25), transparent 40%),
      radial-gradient(circle at 80% 0%, rgba(111, 124, 255, 0.25), transparent 45%);
    opacity: 1;
  }
  @media (max-width: 640px) {
    padding: 32px;
  }
`

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

export const Eyebrow = styled.span`
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 3px;
  color: #c7ceff;
`

export const HeroTitle = styled.h1`
  font-size: clamp(32px, 5vw, 44px);
  margin: 0;
`

export const HeroSubtitle = styled.p`
  margin: 0;
  color: rgba(255, 255, 255, 0.82);
  line-height: 1.6;
  font-size: 18px;
  max-width: 760px;
`

export const HeroActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`

export const CTAButton = styled.a`
  padding: 13px 26px;
  border-radius: 999px;
  font-weight: 600;
  font-size: 15px;
  color: white;
  background: linear-gradient(120deg, #7d5bff, #a861ff);
  border: 1px solid rgba(255, 255, 255, 0.1);
  text-transform: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 15px 35px rgba(118, 98, 255, 0.45);
  }
`

export const SecondaryButton = styled(CTAButton)`
  background: transparent;
  color: white;
  border-color: rgba(255, 255, 255, 0.25);
  &:hover {
    background: rgba(255, 255, 255, 0.08);
    box-shadow: none;
  }
`

export const SectionTitle = styled.h2`
  font-size: clamp(26px, 3vw, 34px);
  margin: 0;
`

export const SectionSubtitle = styled.p`
  margin: 0;
  color: rgba(255, 255, 255, 0.78);
  line-height: 1.6;
  max-width: 760px;
`

export const Paragraph = styled.p`
  margin: 0;
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.7;
`

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 24px;
`

export const Card = styled(GlassCard)`
  padding: 28px;
  gap: 12px;
  display: flex;
  flex-direction: column;
  &:before {
    background: radial-gradient(circle at 0% 0%, rgba(255, 255, 255, 0.08), transparent 55%);
  }
`

export const CardTitle = styled.h3`
  margin: 0;
  font-size: 18px;
`

export const CardDescription = styled.p`
  margin: 0;
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.6;
  font-size: 15px;
`

export const BulletList = styled.ul`
  margin: 0;
  padding-left: 18px;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
  display: grid;
  gap: 8px;
`

export const StatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 20px;
`

export const StatCard = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border-radius: 18px;
  padding: 20px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  text-align: center;
  box-shadow: inset 0 0 0 1px rgba(152, 160, 255, 0.08);
`

export const StatValue = styled.div`
  font-size: 30px;
  font-weight: 700;
  color: white;
`

export const StatLabel = styled.div`
  color: rgba(255, 255, 255, 0.75);
  font-size: 14px;
`

export const CTASection = styled(GlassCard)`
  text-align: center;
  padding: 44px 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  &:before {
    background: radial-gradient(circle at 50% 0%, rgba(108, 123, 255, 0.35), transparent 55%);
  }
`

export const Tag = styled.span`
  font-size: 13px;
  text-transform: uppercase;
  color: #9fa8ff;
  letter-spacing: 1px;
`

export const TwoColumn = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
`

export const Divider = styled.hr`
  border: none;
  height: 1px;
  background: rgba(255, 255, 255, 0.08);
  margin: 16px 0;
`

export const Pill = styled.span`
  padding: 4px 10px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 12px;
  color: rgba(255, 255, 255, 0.8);
`

export const StoryLayout = styled(GlassCard)`
  display: grid;
  grid-template-columns: minmax(0, 2fr) minmax(0, 1fr);
  gap: 32px;
  align-items: stretch;
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`

export const StoryContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`

export const StoryAccent = styled.div`
  border-radius: 22px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  background: rgba(2, 4, 18, 0.7);
  padding: 28px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-shadow: inset 0 0 0 1px rgba(103, 119, 255, 0.08);
`

export const StoryStats = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 12px;
`

export const StoryTimeline = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const StoryTimelineItem = styled.li`
  display: grid;
  grid-template-columns: 18px 1fr;
  gap: 12px;
  align-items: flex-start;
`

export const StoryTimelineDot = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: linear-gradient(120deg, #7d5bff, #03ffa4);
  margin-top: 6px;
`

export const StoryTimelineBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

export const StoryTimelineTitle = styled.span`
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: rgba(255, 255, 255, 0.85);
`

export const StoryTimelineDescription = styled.p`
  margin: 0;
  color: rgba(255, 255, 255, 0.75);
  line-height: 1.5;
`
