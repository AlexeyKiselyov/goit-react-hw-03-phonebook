import styled from 'styled-components';
// =========================
export const Label = styled.label`
  display: block;  
  margin-bottom: 10px;

  font-weight: 600;
  font-size: 16px;
  line-height: 1.88;
  letter-spacing: 0.06em;
`

export const Input = styled.input`
  display: block;
  padding: 6px 15px;

  font-size: 16px;  
  letter-spacing: 0.06em;

  border: 2px solid grey;
  border-radius: 6px;

  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus{   
    border: 2px solid #2196f3;
  }
  `