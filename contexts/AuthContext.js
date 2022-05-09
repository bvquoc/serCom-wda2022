import { onAuthStateChanged } from 'firebase/auth';
import { createContext, useState } from 'react';
import { useEffect } from 'react';
import { auth } from '../libs/firebase';
import { getUser } from '../service';
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [save, setSave] = useState(false);
  const [loggedUser, setLoggedUser] = useState(null);
  const [currentUserData, setCurrentUserData] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setLoggedUser(user);
      getUser(user?.uid).then((user) => setCurrentUserData(user[0]));
    });
  }, [loggedUser]);
  const value = { save, setSave, loggedUser, setLoggedUser, currentUserData };

  return (
    <>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    </>
  );
};

export { AuthContext, AuthProvider };
