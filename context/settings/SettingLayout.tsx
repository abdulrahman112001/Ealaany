import { SettingProvider } from "./SettingProvider";

export const AuthLayout = ({ children }) => {
  return <SettingProvider>{children}</SettingProvider>;
};
