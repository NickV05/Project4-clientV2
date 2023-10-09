import { useState, useEffect, createContext, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { AxiosResponse } from "axios"; 
import { get } from "../services/authService";
import { User } from "../models/User";

interface AuthContextType {
  isLoggedIn: boolean;
  isLoading: boolean;
  user: User | null;
  storeToken: (token: any) => void;
  authenticateUser: () => void;
  logOutUser: () => void;
  setUser: (user: User | null) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

function AuthProvider({ children }: AuthProviderProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);

  const navigate = useNavigate();

  const storeToken = (token: any) => {
    localStorage.setItem("authToken", token);
  };

  const removeToken = () => {
    localStorage.removeItem("authToken");
  };

  const authenticateUser = () => {
    const storedToken = localStorage.getItem("authToken");

    if (storedToken) {
      get("/users/verify")
        .then((response: AxiosResponse<User>) => {
          const userData = response.data;
          setIsLoggedIn(true);
          setIsLoading(false);
          setUser(userData);
        })
        .catch((error) => {
          console.error(error);
          removeToken();
          setIsLoggedIn(false);
          setIsLoading(false);
          setUser(null);
        });
    } else {
      setIsLoggedIn(false);
      setIsLoading(false);
      setUser(null);
    }
  };

  const logOutUser = () => {
    removeToken();
    authenticateUser();
    navigate("/login");
  };

  useEffect(() => {
    authenticateUser();
  }, []);

  const contextValue: AuthContextType = {
    isLoggedIn,
    isLoading,
    user,
    storeToken,
    authenticateUser,
    logOutUser,
    setUser,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}

export { AuthProvider, AuthContext };