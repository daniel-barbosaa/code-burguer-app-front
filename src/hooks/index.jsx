import { BagProvider } from './bag-context';
import { UserProvider } from './UserContext';

function AppProvider({ children }) {
  return (
    <BagProvider>
      <UserProvider>{children}</UserProvider>
    </BagProvider>
  );
}

export default AppProvider;
