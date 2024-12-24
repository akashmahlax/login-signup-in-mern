
import { Link } from 'react-router-dom';


function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <button><Link to="/login">Login</Link></button>
      <button><Link to="/signup">sign up</Link></button>
     <button> <Link to="/products">Go to Products</Link></button>
    </div>
  );
}

export default HomePage;
