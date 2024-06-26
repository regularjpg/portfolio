import { PropsWithChildren } from 'react';

export type BlockProps = PropsWithChildren<{
  spacing?: 0 | 4 | 8 | 12 | 16 | 20 | 24 | 28 | 32 | 36 | 40;
  isInline?: boolean;
}>;
