import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { app } from 'src/apis/config';
import { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

const auth = getAuth(app);

export const useAuth = () => {
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        history.push('/login');
      }
    });
  }, [location.pathname]);
};
