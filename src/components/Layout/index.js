import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../Header';
import Footer from '../Footer';
import './index.css';
import './drop.css';
import './theme.css';

const Layout = ({ children }) => (
  <div className="flex flex-col font-sans min-h-screen text-grey-darkest">
    <Helmet
      title="Flight Matrix"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <div className="flex flex-col flex-1 md:justify-center max-w-xl mx-auto px-4 py-8 md:p-8 w-full">
      {children}
    </div>
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Layout;
