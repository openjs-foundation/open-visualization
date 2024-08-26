import React from 'react';
import Head from 'next/head';
import {useRouter} from 'next/navigation';
// import Header from './header';
// import Footer from './footer';
import metaYaml from '../content/meta.json';

const findPageMeta = path => metaYaml.find(d => d.path === path);

const Layout = ({children}) => {
  const router = useRouter();
  const {page, meta, title} = findPageMeta(router.pathname) ?? findPageMeta('/') ?? {};
  return (
    <>
      <div className="page">{children}</div>
    </>
  );
};

export default Layout;
