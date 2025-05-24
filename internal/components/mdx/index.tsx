import { AutoTypeTable } from 'fumadocs-typescript/ui';
import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import { createGenerator } from 'fumadocs-typescript';
import { CodePreview } from '../preview';
import { Toaster } from 'ethereal-ui';

const generator = createGenerator();

// use this function to get MDX components, you will need it for rendering MDX
export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    AutoTypeTable: (props) => (
      <AutoTypeTable {...props} generator={generator} />
    ),
    Preview: (props: any) => {
      return (
        <CodePreview {...props} />
      )
    },
    Toaster: () => (
      <Toaster />
    ),
    ...components,
  };
}
