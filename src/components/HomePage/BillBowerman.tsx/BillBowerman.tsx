import dirtyBoots from '../../../images/Home/BillBowerman/dirtyBoots.jpg';
import { AuthorSpan, BillBowermanContainer, QuoteParagraph, TextContainer } from '../../../styles/HomePage/BillBowerman.styles';

function BillBowerman() {
  return (
    <BillBowermanContainer>
      <TextContainer>
        <QuoteParagraph>"Good shoes must meet three requirements. Be light, comfortable and durable"</QuoteParagraph>
        <AuthorSpan>-Bill Bowerman</AuthorSpan>
      </TextContainer>
      <img className=' object-fill grayscale sm:w-[50%] sm:object-fill ' src={dirtyBoots} alt='Dirty Boots' />
    </BillBowermanContainer>
  );
}

export default BillBowerman;
