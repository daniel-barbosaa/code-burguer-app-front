import React, { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext({});

export function UserProvider({ children }) {
  const [userData, setUserData] = useState({});

  const putUserData = async (userInfoData) => {
    setUserData(userInfoData);

    await localStorage.setItem(
      'codeburguer:userData',
      JSON.stringify(userInfoData),
    );
  };

  const userLogOut = async () => {
    await localStorage.removeItem('codeburguer:userData');
  };

  useEffect(() => {
    const loadUserData = async () => {
      const clientInfo = await localStorage.getItem('codeburguer:userData');

      if (clientInfo) {
        setUserData(JSON.parse(clientInfo));
      }
    };

    loadUserData();
  }, []);

  return (
    <UserContext.Provider value={{ putUserData, userData, userLogOut }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useUser deve ser com useContext!');
  }

  return context;
};
