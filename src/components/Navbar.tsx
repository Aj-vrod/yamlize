import { Link } from "./Footer";

const paths: Link[] = [
  { label: 'Home', url: '/' },
  { label: 'About', url: '/about' },
  { label: 'Contact', url: '/contact' },
];

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

  return (
    <nav style={navbarStyle}>
      <ul style={linkContainerStyle}>
        {paths.map((path) => (
          <li key={path.label} style={linkItemStyle}>
            <a href={path.url} style={linkStyle}>{path.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
