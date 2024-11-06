// @ts-expect-error
import { createTypeTable } from 'fumadocs-typescript/ui';
import { CodePreview } from "../preview";

const { AutoTypeTable } = createTypeTable();

export const CustomMdxComponents = {
  Preview: (props: any) => {
    return (
      <CodePreview {...props} />
    )
  },
  AutoTypeTable,
}