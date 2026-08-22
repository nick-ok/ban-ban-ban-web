import type { PropsWithChildren } from 'react';

import { I18nProvider } from './I18nProvider';

export const AppProviders = ({ children }: PropsWithChildren) => {
  return <I18nProvider>{children}</I18nProvider>;
};
