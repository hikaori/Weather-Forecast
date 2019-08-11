import styled from 'styled-components';
import colors from '../colors';
import { media } from '../util/Helper';

export const BasicSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 50%;
  ${media.phone`width: 100%;`}
  margin: 0 auto;
  text-align: center;
  margin: 1.2rem;
  ${media.phone`margin: 0rem;`}
  justify-content: center;
  box-sizing: border-box;
`;
export const SearchAreaSection = styled(BasicSection)``;

export const WeatherAreaSection = styled(BasicSection)`
  border: solid 1px ${colors.gray};
  border-radius: 6px;
  padding: 3.2rem;
  ${media.phone`margin-top: 3.2rem;`}
`;
