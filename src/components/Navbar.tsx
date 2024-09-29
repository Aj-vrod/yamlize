type NavbarProps = {
  paths: string[]
}

export const Navbar = ({ paths }: NavbarProps) => {
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
        {paths.map((path, index) => (
          <li key={index} style={linkItemStyle}>
            <a href={path} style={linkStyle}>{path}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
