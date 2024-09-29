import React from 'react';
import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import { YamlDeclaration } from '@/pages/[slug]';

export const Navbar = () => {
  const navbarStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 40px',
    backgroundColor: '#1e1e1e', 
    color: '#fff', 
    fontFamily: 'Arial, sans-serif',
  };

  const linkContainerStyle = {
    display: 'flex',
    listStyleType: 'none',
    margin: 0,
    padding: 0,
  };

  const linkItemStyle = {
    marginLeft: '20px',
  };

  const linkStyle = {
    color: '#fff',
    textDecoration: 'none', 
    fontWeight: '500',
  };

  const files = fs.readdirSync(path.join('declarations'));
  
  const paths = files.map(file => {
    const fileContents = fs.readFileSync(path.join('declarations', file), 'utf8');
    const declarations = yaml.load(fileContents) as YamlDeclaration;
    
    return declarations.path
  });

  return (
    <nav style={navbarStyle}>
      <ul style={linkContainerStyle}>
        {paths.map((path, index) => (
          <li key={index} style={linkItemStyle}>
            <a href={path} style={linkStyle}>{path}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
