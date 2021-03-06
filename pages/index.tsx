import React from 'react';
import { GetStaticProps } from 'next';
import About from '../src/components/about';
import Contact from '../src/components/contact';
import Cover from '../src/components/cover';
import Footer from '../src/components/footer';
import Header from '../src/components/header';
import Projects from '../src/components/projects';
import { Repo } from '../src/models/repo';
import websitePageHOC from '../src/components/common/wrappers/hoc';

interface HomeProps {
  repos: Repo[];
}

function Home({ repos }: HomeProps) {
  return (
    <div>
      <Cover />
      <Header />
      <Projects />
      <About repos={repos} />
      <Contact />
      <Footer />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://api.github.com/users/victoroda/repos');
  const repos: Repo[] = await res.json();

  return {
    props: {
      repos,
    },
  };
};

export default websitePageHOC(Home, {
  seoProps: { headTitle: 'Home' },
});
