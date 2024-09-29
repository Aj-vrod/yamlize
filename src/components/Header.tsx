import { CSSProperties } from "react";

type HeaderProps = {
    title: string,
    textColor: string,
    backgroundColor: string,
    icon?: string
}

export const Header = ({ title, backgroundColor, textColor, icon }: HeaderProps) => {
  const headerStyle: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: backgroundColor || '#f0f0f0',
    color: textColor || '#000',
    height: '50vh',
    padding: '20px',
    boxSizing: 'border-box',
  };

  const titleStyle = {
    fontSize: '3rem',
    fontWeight: 'bold',
    margin: 0,
  };

  const iconStyle = {
    fontSize: '5rem',
    marginLeft: 'auto',
  };

  return (
    <header style={headerStyle}>
      <h1 style={titleStyle}>{title}</h1>
      {icon && <img src={icon} alt="Header Icon" style={iconStyle} />}
    </header>
  );
};
