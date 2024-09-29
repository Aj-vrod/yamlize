import { CSSProperties } from "react";

export type Link = {
    label: string,
    url: string
}

type FooterProps = {
    links: Link[]
}

export const Footer = ({ links }: FooterProps) => {
  const footerStyle: CSSProperties = {
    backgroundColor: '#1e1e1e',
    color: '#fff',
    padding: '20px 40px',
    textAlign: 'center', 
    fontFamily: 'Arial, sans-serif',
  };

  const linkStyle = {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
  };

  const linkItemStyle = {
    margin: '5px 0', 
  };

  const anchorStyle = {
    color: '#fff', 
    textDecoration: 'none',
    fontWeight: 'bold',
  };

  return(
    <footer style={footerStyle}>
      <ul style={linkStyle}>
        {links.map((link, index) => (
          <li key={index} style={linkItemStyle}>
            <a href={link.url} style={anchorStyle}>{link.label}</a>
          </li>
        ))}
      </ul>
    </footer>
  
)};
  