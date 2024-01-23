import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [localStorageChange, setLocalStorageChange] = useState(false);

      const [user, setUser] = useState(undefined);

      useEffect(() => {
        // Function to observe the local server
        const observeLocalServer = () => {
          // Check if there is any data stored with the key "currentUse"
          if (localStorage.getItem("Current User")) {
            // If data exists, retrieve it and store it in the state variable
            const currentUseData = localStorage.getItem("Current User");

            const parsedData = JSON.parse(currentUseData);
            console.log("AuthPRov", parsedData);

            // Set the observed data in the state
            setUser(parsedData);
          } else {
            setUser(undefined);
          }
        };

        return () => {
          return observeLocalServer();
        };
      }, [localStorageChange]);

    const authInfo = {
      user,
      setLocalStorageChange,
    };
    return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;