import styled from 'styled-components';
// ===========================
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

export const Button = styled.button`  
  margin-top: 20px;
  margin-bottom: 15px;
  min-width: 150px;
  height: 35px;

  font-weight: 700;
  font-size: 16px;
  line-height: 1.88;
  letter-spacing: 0.06em;
  text-transform: capitalize;
  color: #ffffff;

  background-color:  #2196f3;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  border-color: transparent;
  transition: scale 250ms cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover,
  &:focus{   
    scale: 1.05;
  }
  &:active{
    border-color: #2a2a2a;
  }`