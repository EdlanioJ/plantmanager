import React, {
  createContext,
  useCallback,
  useEffect,
  useState,
  useReducer,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface UserProps {
  username?: string;
  avatar?: string;
}
interface UserContextProps {
  isSignedIn?: boolean;
  signIn: () => Promise<void>;
  updateAvatar: (uri: string) => void;
  user: UserProps;
}

const UserContext = createContext({} as UserContextProps);

interface State {
  isSignedIn?: boolean;
  username?: string;
  avatar?: string;
}

type Action =
  | { type: 'login'; payload: { username: string; avatar?: string } }
  | { type: 'logout' }
  | { type: 'field'; payload: { field: string; value: string } };

function userReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'login': {
      const { payload } = action;
      return {
        ...state,
        isSignedIn: true,
        username: payload.username,
        avatar: payload.avatar,
      };
    }
    case 'logout': {
      return {
        isSignedIn: false,
      };
    }
    case 'field': {
      const { payload } = action;
      return {
        ...state,
        [payload.field]: payload.value,
      };
    }
    default:
      return state;
  }
}

const initialState: State = {};
export const UserProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  const updateAvatar = useCallback((uri: string) => {
    dispatch({ type: 'field', payload: { field: 'avatar', value: uri } });
  }, []);

  const signIn = useCallback(async () => {
    const [username, avatar] = await Promise.all([
      AsyncStorage.getItem('@plantmanager:user:name'),
      AsyncStorage.getItem('@plantmanager:user:avatar'),
    ]);
    if (username !== null) {
      dispatch({
        type: 'login',
        payload: { username, avatar: avatar || undefined },
      });
      return;
    }

    dispatch({ type: 'logout' });
  }, []);

  useEffect(() => {
    signIn();
  }, []);
  return (
    <UserContext.Provider
      value={{
        isSignedIn: state.isSignedIn,
        signIn,
        updateAvatar,
        user: { avatar: state.avatar, username: state.username },
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => React.useContext(UserContext);
