import Header from 'components/Header';
import React, { Fragment } from 'react';

const style = {
  maxWidth: '1440px',
  margin: '0 auto',
  marginTop: '80px',
};

export default function PageWrapper({
  children,
}: {
  children: React.ReactElement[] | React.ReactElement;
}) {
  return (
    <Fragment>
      <Header />
      <section style={style}>{children}</section>
    </Fragment>
  );
}
