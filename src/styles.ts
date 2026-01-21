import styled from 'styled-components'

export const Copyright = styled.div`
  text-align: center;
  color: #aaa;
  padding: 20px 0;
  margin-top: auto;
`


export const MainWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 100%;
  transition: width .25s ease, padding .25s ease;
  margin: 0 auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 80px;
  @media (min-width: 768px) {
    padding: 32px;
  }
  @media (min-width: 1024px) {
    width: 1100px;
    padding: 40px;
  }
  @media (min-width: 1360px) {
    width: 1200px;
  }
`

export const TosWrapper = styled.div`
  position: relative;
  &:after {
    content: " ";
    background: linear-gradient(180deg, transparent, #15151f);
    height: 50px;
    pointer-events: none;
    width: 100%;
    position: absolute;
    bottom: 0px;
    left: 0px;
  }
`

export const TosInner = styled.div`
  max-height: 400px;
  padding: 10px;
  overflow: auto;
  position: relative;
`
