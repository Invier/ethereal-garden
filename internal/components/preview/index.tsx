
import dynamic from 'next/dynamic';
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from 'ethereal-ui';

import { sanitizeUrl } from '@/internal/utils/get-toc';
import { CopyToClipboard } from '../copy-to-clipboard';
import { getFileContent } from '@/internal/utils/file-parser';

const CodeBlock = dynamic(() => import('../codeblock'), {
  ssr: false,
});

export const CodePreview = async ({
  children,
  file,
  lang,
  title = 'Default',
  description,
}: any) => {
  let internalLang = lang ?? file?.split('.').pop() ?? null;

  if (
    file
    && typeof file === 'string'
    && internalLang != null
  ) {
    let Component = null;
    let fileContents = '';

    try {
      Component = dynamic(() => import(`../../../content/docs${file}`), {
        ssr: false,
      });

      fileContents = await getFileContent(`/content/docs${file}.tsx`);
    } catch (error) {
      console.error(error);
    }

    if (!Component) {
      return children;
    }

    return (
      <div className='not-prose w-full h-fit max-h-[480px] overflow-y-auto overflow-x-auto md:pl-4 relative'>
        <Tabs defaultValue='preview'>
          <div className='flex flex-col gap-2'>
            <div className='flex flex-row justify-between items-center flex-wrap'>
              <h4 id={title} className='font-bold'>
                <a href={`#${sanitizeUrl(title)}`} className='group flex flex-row gap-1'>
                  {title}
                  <span className='hidden group-hover:block text-blue-500'>
                    #
                  </span>
                </a>
              </h4>
              <div className='flex flex-row gap-2 items-center'>
                <TabsList>
                  <TabsTrigger value='preview'>Preview</TabsTrigger>
                  <TabsTrigger value='code'>Code</TabsTrigger>
                </TabsList>
                <CopyToClipboard text={fileContents} />
              </div>
            </div>
            {
              description ? (
                <div className='text-sm text-fd-muted-foreground'>
                  {description}
                </div>
              ) : null
            }
          </div>          
          <div className='border rounded-lg p-4 my-4'>
            <TabsContent value='preview' className='!mt-0'>
              <Component />
            </TabsContent>
            <TabsContent value='code' className='!mt-0'>
              <CodeBlock code={fileContents} lang={internalLang} />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    )
  }

  return children;
};
