import Navbar from '@/admin//layouts/Navbar';
import Sidebar from '@/admin//layouts//Sidebar';

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      <Sidebar />
      {children}
    </div>
  );
}
