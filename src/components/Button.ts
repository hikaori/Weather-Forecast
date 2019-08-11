import styled from 'styled-components';
import color from '../colors';
import fonts from '../fonts';
export const Button = styled.button`
  box-sizing: border-box;
  width: 240px;
  padding: 1.2rem;
  color: #fff;
  margin: 24px auto;
  border: none;
  border-radius: 6px;
  box-shadow: 1px 1px 4px grey;
  word-break: keep-all;
  background: radial-gradient(
    ${color.buttonLightBlue},
    ${color.buttonDarkBlue}
  );
  font-size: ${fonts.small};
  &:hover {
    box-shadow: none;
    background: radial-gradient(
      ${color.buttonDarkBlue},
      ${color.buttonLightBlue}
    );
  }
  & a {
    padding-bottom: 1.7rem;
    padding-top: 1.7rem;
    color: ${color.white};
  }
`;

export const RedButton = styled(Button)`
  background: radial-gradient(red, orange);
`;
