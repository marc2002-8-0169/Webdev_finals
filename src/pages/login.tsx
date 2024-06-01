import Link from 'next/link';

const LoginPage = () => {
  return (
    <div>
      <h1>Login</h1>
      {/* Add login form component */}
      <Link href="/register">Don't have an account? Register here</Link>
    </div>
  );
};

export default LoginPage;