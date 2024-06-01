import Link from 'next/link';

const RegisterPage = () => {
  return (
    <div>
      <h1>Register</h1>
      {/* Add registration form component */}
      <Link href="/login">Already have an account? Login here</Link>
    </div>
  );
};

export default RegisterPage;