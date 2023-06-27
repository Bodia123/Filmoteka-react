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
  color: #ffffffa1;
  margin-top: 10px;
  background: linear-gradient(to bottom, #7892c2 5%, #476e9e 100%);
  background-color: #7892c2;
  border-radius: 21px;
  border: 1px solid #4e6096;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 18px;
  padding: 12px 30px;
  text-decoration: none;
  text-shadow: 9px 0px 13px #283966;
  &:hover,
  &:active {
    box-shadow: 0px 0px 0px 4px #9fb4f2;
  }
`;
