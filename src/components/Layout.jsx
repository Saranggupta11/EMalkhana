// components/Layout.js
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className=''>
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
