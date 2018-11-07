import React from 'react';
import Layout from '../components/Layout';
import SearchPanel from '../components/SearchPanel';

const IndexPage = () => (
  <Layout>
    <div className="text-center max-w-lg">
      <SearchPanel />
      <div style={{ marginTop: '6rem' }}>
        <p className="leading-loose align-bottom">
          This is a barebones system to seach for flights{' '}
          <span className="font-bold text-grey-darkest">
            You can not book any tickets.
          </span>
        </p>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
