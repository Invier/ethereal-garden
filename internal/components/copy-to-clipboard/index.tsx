'use client';

import { ClipboardCopyIcon } from "lucide-react";
import { useCopyToClipboard } from 'usehooks-ts';

export const CopyToClipboard = ({
  text,
}: {
  text: string;
}) => {
  const [_, copy] = useCopyToClipboard()

  const handleCopy = (text: string) => () => {
    copy(text)
      .then(() => {
        console.log('Copied!', { text })
      })
      .catch(error => {
        console.error('Failed to copy!', error)
      })
  }

  return (
    <button
      onClick={handleCopy(text)}
      className='p-2 border rounded text-sm'
    >
      <ClipboardCopyIcon size={20} className='text-fd-primary'  />
    </button>
  );
}