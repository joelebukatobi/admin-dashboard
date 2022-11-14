// Components
import Loading from '@/admin//components//Loading';
// Redux Toolkit
import { useSelector, useDispatch } from 'react-redux';
export default function Body({ children }) {
  const { data, loading } = useSelector((state) => state.user);
  return (
    <div className="body">
      {loading && <Loading />}
      {data && !loading && children}
    </div>
  );
}
