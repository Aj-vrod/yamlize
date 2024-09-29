import React from 'react';
import { Header } from '@/components/Header';
import { Body } from '@/components/Body';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';

function HomePage () {
  return (
    <>
      <Navbar />
      <Header 
        title="Welcome to YAMLize!"
        backgroundColor="#f0f0f0"
        textColor="#000"
      />
      <Body 
        title="Write YAML files to create pages"
        subtitle="Don't be so harsh. It's still a work in progress."
      />
      <Footer links={[]} />
    </>
  );
};

export default HomePage
