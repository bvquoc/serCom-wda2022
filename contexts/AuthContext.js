import { useState, createContext } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [save, setSave] = useState(false);
  const [loggedUser, setLoggedUser] = useState(null);

  const value = { save, setSave, loggedUser, setLoggedUser };

  return (
    <>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    </>
  );
};

export { AuthContext, AuthProvider };
