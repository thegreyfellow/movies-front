import useAuth from '../../hooks/useAuth';

const LogoutButton: React.FC = () => {
  const { logout } = useAuth();

  return (
    <div style={{ width: '100px' }}>
      <button onClick={() => logout()}>Log Out</button>
    </div>
  );
};

export default LogoutButton;
