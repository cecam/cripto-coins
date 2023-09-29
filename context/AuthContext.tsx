import React, { FC, createContext } from "react";

interface AuthContextProps {
  user: any;
  login: (username: string, password: string) => boolean;
  logout: () => void;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthContext = createContext<Partial<AuthContextProps>>({});

const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = React.useState("");

  const login = (username: string, password: string) => {
    //mock of database
    const localUser = localStorage.getItem("usersList");
    const response = localUser && JSON.parse(localUser);

    if (!response) {
      alert("No hay usuarios registrados");
    }

    let findUser = response.find((item) => item.user === username);

    if (!findUser) {
      alert("Usuario no registrado");
    }

    if (findUser && findUser.password === password) {
      setUser(findUser);
      localStorage.setItem("currentUser", JSON.stringify(findUser));
      return true;
    } else {
      return false;
    }
  };

  const logout = () => {
    setUser("");
    localStorage.removeItem("currentUser");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
