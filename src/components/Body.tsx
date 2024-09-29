import { CSSProperties } from "react";

type BodyProps = {
    title: string,
    subtitle?: string
}

export const Body = ({ title, subtitle }: BodyProps) => {
    const bodyStyle: CSSProperties = {
        padding: '40px',
        textAlign: 'left',
        color: '#333',
        fontFamily: 'Arial, sans-serif',
        height: '70vh'
      };
    
      const titleStyle = {
        fontSize: '2.5rem',
        fontWeight: 'bold',
        marginBottom: '10px',
      };
    
      const subtitleStyle = {
        fontSize: '1.5rem',
        fontWeight: '300',
        color: '#666', 
      };
    return(
        <div style={bodyStyle}>
            <h1 style={titleStyle}>{title}</h1>
            {subtitle && <h2 style={subtitleStyle}>{subtitle}</h2>}
        </div>
    )
};

