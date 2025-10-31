// Fix: Import `Dispatch` and `SetStateAction` from 'react' to resolve missing 'React' namespace error.
import { createContext, Dispatch, SetStateAction } from 'react';
import { User } from '../types';

interface UserContextType {
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
}

export const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
});
