'use client'

import { Progress } from 'ethereal-ui';
import { useState, useEffect } from 'react';

export default () => {
  const [progress, setProgress] = useState<number | null>(null);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(66);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="space-y-4">
      <Progress className="w-full" />
      <div className="text-sm text-muted-foreground">
        Loading... Please wait while we process your request.
      </div>
    </div>
  )
} 