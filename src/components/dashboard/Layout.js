import Navbar from '@/dashboard//Navbar';
import Sidebar from '@/dashboard//Sidebar';

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      <Sidebar />
      {children}
    </div>
  );
}
