import {
  defineConfig,
  defineDocs,
  frontmatterSchema,
  metaSchema,
} from 'fumadocs-mdx/config';
import { rehypeCodeDefaultOptions } from 'fumadocs-core/mdx-plugins';
import { transformerTwoslash } from 'fumadocs-twoslash';
import remarkMath from 'remark-math';
import remarkMdx from 'remark-mdx';
import {
  fileGenerator,
  remarkDocGen,
  remarkInstall,
} from 'fumadocs-docgen';
import rehypeKatex from 'rehype-katex';
import { transformerRemoveNotationEscape } from '@shikijs/transformers';

export const docs = defineDocs({
  docs: {
    schema: frontmatterSchema,
  },
  meta: {
    schema: metaSchema,
  },
});

export default defineConfig({
  lastModifiedTime: 'git',
  mdxOptions: {
    rehypeCodeOptions: {
      inline: 'tailing-curly-colon',
      themes: {
        light: 'one-light',
        dark: 'ayu-dark',
      },
      transformers: [
        ...(rehypeCodeDefaultOptions.transformers ?? []),
        transformerTwoslash(),
        transformerRemoveNotationEscape(),
      ],
    },
    remarkPlugins: [
      remarkMdx,
      remarkMath,
      [remarkInstall, { persist: { id: 'package-manager' } }],
      [remarkDocGen, { generators: [fileGenerator()] }],
    ],
    rehypePlugins: (v) => [rehypeKatex, ...v],
  },
});
