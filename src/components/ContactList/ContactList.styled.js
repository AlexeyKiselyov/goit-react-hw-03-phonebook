import styled from 'styled-components';
// =============================
export const Ul = styled.ul`
  margin: 0;
  padding: 0;

  list-style: disc;
`;

export const Contact = styled.li`
  margin-bottom: 10px;
  margin-left: 20px;

  font-weight: 600;
  font-size: 16px;
  line-height: 1.88;
  letter-spacing: 0.06em;
`;

export const Button = styled.button`
  margin-top: 5px;
  margin-left: 10px;
  padding: 4px 5px;
  min-width: 80px;
  height: 25px;

  display: inline-flex;
  align-items: center;
  gap: 10px;

  font-weight: 500;
  font-size: 14px;
  line-height: 1.1;
  letter-spacing: 0.06em;
  text-transform: capitalize;
  color: #ffffff;

  background-color: #2196f3;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  border-color: transparent;
  transition: scale, fill 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    scale: 1.04;
  }

  &:active {
    border-color: #2a2a2a;
  }

  &:hover svg {
    fill: #2a2a2a;
  }
`;
