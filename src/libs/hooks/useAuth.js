import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { app } from 'src/apis/config';
import { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

const auth = getAuth(app);

export const useAuth = () => {
  const history = useHistory();
  const location = useLocation();
  const notAuthPaths = ['/login', '/signup'];

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      /* ログインしていて, notAuthPaths にいる場合 */
      if (user && notAuthPaths.includes(location.pathname))
        return history.push('/');
      /* ログインしていなくて notAuthPaths にいない場合 */
      if (!user && !notAuthPaths.includes(location.pathname))
        return history.push('/login');
    });
  }, [location.pathname]);
};
