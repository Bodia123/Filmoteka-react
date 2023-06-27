import styled from '@emotion/styled';

export const ContentWrapper = styled.div`
  margin-top: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-top: 1px solid rgb(51, 46, 46);
  background-color: rgba(255, 255, 255, 0.17);
`;

// social
export const SocialContainer = styled.div``;
export const SocialList = styled.ul`
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
`;
export const Item = styled.li`
  &:not(:last-child) {
    margin-right: 25px;
  }
`;
export const Link = styled.a`
  text-decoration: none;
  color: black;
`;

export const FooterTitle = styled.p`
  margin: 0;
  text-align: center;
`;
