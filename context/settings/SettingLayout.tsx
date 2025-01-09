import { SettingProvider } from "./SettingProvider";

import { ReactNode } from 'react';

export const AuthLayout = ({ children }: { children: ReactNode }) => {
  return <SettingProvider>{children}</SettingProvider>;
};
