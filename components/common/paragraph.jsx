import styled from '@emotion/styled'

const TextWrapper = styled.div`
  width: 100%;
  @media (max-width: 600px) {
    width: 93%;
    margin: 0 auto !important;
  }
`;



const Paragraph = (props) => {
  return (
    <TextWrapper sx={{
        
    }}>
      {props.paragraph}
    </TextWrapper>
  )
}

export default Paragraph




