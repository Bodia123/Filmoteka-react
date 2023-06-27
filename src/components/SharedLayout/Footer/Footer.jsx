import {
  ContentWrapper,
  SocialContainer,
  SocialList,
  Item,
  Link,
  FooterTitle,
} from './Footer.styled';
import { AiFillGithub } from 'react-icons/ai';
const Footer = function () {
  return (
    <footer>
      <ContentWrapper>
        <SocialContainer>
          <SocialList>
            <Item>
              <Link href="https://github.com/Bodia123" target="_blank">
                <AiFillGithub size={35} />
              </Link>
            </Item>

            <Item>
              <Link href="https://github.com/Bodia123" target="_blank">
                <AiFillGithub size={35} />
              </Link>
            </Item>

            <Item>
              <Link href="https://github.com/Bodia123" target="_blank">
                <AiFillGithub size={35} />
              </Link>
            </Item>
          </SocialList>
        </SocialContainer>

        <FooterTitle>2023 Filmoteka від Богдана</FooterTitle>
      </ContentWrapper>
    </footer>
  );
};
export default Footer;
