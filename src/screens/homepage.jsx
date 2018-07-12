import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import DocumentTitle from 'react-document-title';
import { Grid, Header, Button, Icon } from 'semantic-ui-react';
import Footer from '../components/base/footer';

const buttonGroupStyle = {
  width: '100%',
};

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header textAlign='center'>
          Some text
        </Header>
        <Footer/>
      </div>
    );
  }
}

HomePage.contextTypes = {
  router: PropTypes.object
};

export default HomePage;
