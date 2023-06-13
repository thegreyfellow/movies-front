import useAuth from '../hooks/useAuth';

const Logout: React.FC = () => {
  const { logout } = useAuth();

  return <button onClick={() => logout()}>Log Out</button>;
};

export default Logout;
