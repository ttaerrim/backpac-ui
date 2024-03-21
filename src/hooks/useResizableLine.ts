import { useState } from 'react';

export const useResizableLine = () => {
  const [line, setLine] = useState(3);

  new ResizeObserver((entries) => {
    for (const entry of entries) {
      const { width } = entry.contentRect; // this

      if (width < 400) {
        setLine(1);
      } else if (width < 500) {
        setLine(2);
      } else {
        setLine(3);
      }
    }
  }).observe(document.body);

  return { line };
};
