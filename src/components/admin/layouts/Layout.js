// React
import { useEffect } from 'react';
// Next JS
import { useRouter } from 'next/router';
// Components
import Navbar from '@/admin//layouts/Navbar';
import Body from '@/admin//layouts/Body';
import Sidebar from '@/admin//layouts//Sidebar';
// import Login from '@/admin//components//Login';
import Loading from '@/admin//components//Loading';
// Redux Toolkit/admin
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '@/features//user/userActions';

export default function Layout({ children }) {
  const navigate = useRouter().push;
  const { data, loading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser())
      .unwrap()
      .then(() => {
        if (loading && !data && error) {
          navigate('/admin/login');
        }
      });
  }, []);

  return (
    <div className="layout">
      {loading && <Loading />}

      {data && (
        <>
          <Navbar />
          <Sidebar />
          <Body>{children}</Body>
        </>
      )}
    </div>
  );
}
