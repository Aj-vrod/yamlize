import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import { Header } from '@/components/Header'
import { Body } from '@/components/Body';
import { Footer, Link } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';

type Header = {
  title: string,
  backgroundColor: string,
  textColor: string,
  icon?: string
}
type Body = {
  title: string,
  subtitle?: string
}
type Footer = {
  links: Link[]
}

export type YamlDeclaration = {
  name: string,
  path: string,
  header: Header,
  body: Body,
  footer: Footer
}

// Fetch the list of paths (one for each YAML file)
export const getStaticPaths = async () => {
  // Read all YAML files in the 'declarations' directory
  const files = fs.readdirSync(path.join('declarations'));
  
  const paths = files.map(file => {
    const fileContents = fs.readFileSync(path.join('declarations', file), 'utf8');
    const declarations = yaml.load(fileContents) as YamlDeclaration;
    
    // Return the path defined in each YAML file
    return {
      params: { slug: declarations.name }
    };
  });

  return {
    paths, // These are the paths we want to pre-render
    fallback: false, // No fallback means it will return 404 if path is missing
  };
}

type Props = {
  params: {
    slug: string
  }
}

// Fetch page content based on the path/slug
export const getStaticProps = async ({ params }: Props) => {
  // Find the correct YAML file based on the slug
  const filePath = path.join('declarations', `${params.slug}.yaml`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const declarations = yaml.load(fileContents);

  return {
    props: { declarations }, // Pass the parsed data as props
  };
}

type Declarations = {
  declarations: YamlDeclaration
}

export default function Page ({ declarations }: Declarations) {
  
  return(
    <>
      <Navbar />
      <Header 
        title={declarations.header.title} 
        backgroundColor={declarations.header.backgroundColor} 
        textColor={declarations.header.textColor}
        icon={declarations.header.icon || ''}
      />
      <Body title={declarations.body.title} subtitle={declarations.body.title || ""} />
      <Footer links={declarations.footer.links} />
    </>
  )
};
