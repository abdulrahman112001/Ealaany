import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useEffect,
  useState,
  Dispatch,
} from "react";
import Cookies from "js-cookie";
import { useLocalStorage } from "../../hooks";
import { useRouter } from "next/router";

type AuthProvider_TP = {
  children: ReactNode;
};
type AuthContext_TP = {
  user: any;
  permissions: string[];
  login: (data: any) => void;
  logout: () => void;
  hasPermission: (permission: string) => any;
  project_id?: string;
  setProjectID: Dispatch<any>;
};

const AuthContext = createContext<AuthContext_TP>(
  null as unknown as AuthContext_TP
);

export const AuthProvider = ({ children }: AuthProvider_TP) => {
  const [permissions, setPermissions] = useState<string[]>([]);
  const [user, setUser] = useLocalStorage<any>("user", null);
  const [project_id, setProjectID] = useLocalStorage<any>("project_id", null);

  const router = useRouter()

  useEffect(() => {
 
    if (user && user?.groups && user?.groups?.labels?.length > 0) {
      const userPermissions = user.groups?.labels.map(
        (permission: any) => permission.flag
      );
      console.log("🚀 ~ useEffect ~ userPermissions:", userPermissions);
      setPermissions(userPermissions);
    }
  }, [user]);

  const login = useCallback(
    async (data: any) => {
      if (setUser) setUser(data);
    },
    [setUser]
  );

  const logout = useCallback(async () => {
    Cookies.remove("tokin");
    if (setUser) setUser(null);
    router.replace("/");
  }, [setUser]);

  const hasPermission = useCallback(
    (permission: string) => {
      return permissions.includes(permission);
    },
    [permissions]
  );

  const value = useMemo(
    () => ({
      user,
      setUser,
      permissions,
      login,
      logout,
      hasPermission,
      setProjectID,
      project_id,
    }),
    [
      login,
      logout,
      user,
      permissions,
      hasPermission,
      setProjectID,
      setUser,
      project_id,
    ]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
