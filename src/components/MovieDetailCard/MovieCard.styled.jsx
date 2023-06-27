import styled from '@emotion/styled';
// @media (min-width: 786px) {}

export const CardContainer = styled.div``;
export const ItemContainer = styled.div`
  @media (min-width: 786px) {
    display: flex;
  }
`;

//Image section
export const PosterWrapper = styled.div`
  padding: 10px;
  text-align: center;
  @media (min-width: 786px) {
    min-width: 280px;
  }
`;
export const Img = styled.img`
  width: 100%;
`;
export const LocalToogle = styled.button`
  background: none;
  color: #ffffffa1;
  &:hover,
  &:active {
    color: orange;
  }
`;
