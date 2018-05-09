import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Header, Container } from 'semantic-ui-react';

const style = {
  copyright: {
    color: "#a4a4a4",
    textAlign: "center",
  },
}

const Footer = () => (
  <div className='footer'>
    <Container
      text
      textAlign='center'
    >
      <h6 className={style.copyright}>
        Copyright &copy; 2018 Qatar Computing Research Institute
      </h6>
    </Container>
  </div>
)

export default Footer;
