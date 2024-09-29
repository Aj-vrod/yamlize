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
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: backgroundColor || '#f0f0f0',
    color: textColor || '#000',
    height: '30vh',
    padding: '20px',
    boxSizing: 'border-box',
  };

  const titleStyle = {
    fontSize: '3rem',
    fontWeight: 'bold',
    margin: 0,
    alignSelf: 'flex-start',
  };

  const svgStyle = {
    height: '80%',
    alignSelf: 'center',
  };

  return (
    <header style={headerStyle}>
      <h1 style={titleStyle}>{title}</h1>
      {icon && <img src={icon} alt="Header Icon" style={svgStyle} />}
    </header>
  );
};
