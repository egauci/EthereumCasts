import React, { Fragment } from 'react';
import { Container } from 'semantic-ui-react';
import Head from 'next/head';
import Header from './Header';

export default ({ children }) => {
  return (
    <Fragment>
      <Head>
        <link
          rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
        />
      </Head>
      <Container>
        <Header />
        {children}
      </Container>
    </Fragment>
  );
};
