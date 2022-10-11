import PropTypes from 'prop-types';
import {SectionPhonebook,Title} from './Section.styled';
// ================================
export const Section =({title, children})=>{
  return(
    <SectionPhonebook>
      <Title>{title}</Title>
      <div>{children}</div>      
    </SectionPhonebook>
  )
}

Section.propTypes = {
  title:PropTypes.string.isRequired,
  children:PropTypes.node.isRequired
}