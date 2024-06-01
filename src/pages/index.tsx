import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      <nav>
        <div>WebDev Final</div>
        <div>
          <Link href="/register">Register</Link>
          <Link href="/login">Login</Link>
        </div>
      </nav>
      <h1>Welcome to WebDev Final</h1>
      {/* Add other content */}
    </div>
  );
};

export default HomePage;