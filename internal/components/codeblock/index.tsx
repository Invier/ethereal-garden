import { codeToHast } from 'shiki';
import { Fragment } from 'react';
import { jsx, jsxs } from 'react/jsx-runtime';
import { toJsxRuntime } from 'hast-util-to-jsx-runtime';
import { transformerRemoveNotationEscape } from '@shikijs/transformers';

export default async function CodeBlock(props: any) {
  const {
    code,
    lang = 'tsx',
  } = props ?? {};
  const out = await codeToHast(code, {
    lang,
    themes: {
      light: 'one-light',
      dark: 'ayu-dark',
    },
    transformers: [
      transformerRemoveNotationEscape(),
    ],
  })

  return toJsxRuntime(out, {
    Fragment,
    jsx,
    jsxs,
    components: {
      pre: props => <pre data-custom-codeblock {...props} className='not-prose text-xs highlight' />
    },
  })
}