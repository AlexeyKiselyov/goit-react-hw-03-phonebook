import styled from 'styled-components';
// ===========================
export const Label = styled.label`
  display: block;
  margin-bottom: ${p => p.theme.space[4]}px;

  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.m}px;
  line-height: ${p => p.theme.lineHeights.body};
`;

export const Input = styled.input`
  display: block;
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[5]}px;
  padding-right: ${p => p.theme.space[5]}px;

  font-size: ${p => p.theme.fontSizes.m}px;

  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.normal};

  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    border: ${p => p.theme.borders.accent};
  }
`;

export const Button = styled.button`
  margin-top: ${p => p.theme.space[5]}px;
  margin-bottom: ${p => p.theme.space[5]}px;
  padding-left: ${p => p.theme.space[5]}px;
  padding-right: ${p => p.theme.space[5]}px;
  min-width: 150px;
  height: 35px;
  display: inline-flex;
  align-items: center;
  gap: ${p => p.theme.space[5]}px;

  color: ${p => p.theme.colors.white};
  font-size: 16px;
  line-height: ${p => p.theme.lineHeights.body};
  letter-spacing: 0.06em;
  text-transform: capitalize;

  background-color: ${p => p.theme.colors.accent};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

  border-radius: ${p => p.theme.radii.normal};
  border-color: transparent;
  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  outline: 2px solid transparent;
  border: 2px solid transparent;

  &:hover,
  &:focus {
    border-color: ${p => p.theme.colors.hoverbtn};
  }
  &:active {
    scale: 1.01;
  }

  &:hover svg {
    fill: ${p => p.theme.colors.hoverbtn};
  }
`;
