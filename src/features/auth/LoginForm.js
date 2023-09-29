import { useState } from 'react';
import { toast } from 'react-toastify';

import useAuth from '../../hooks/useAuth';

export default function LoginForm() {
  const [emailOrMobile, setEmailOrMobile] = useState('');
  const [password, setPassword] = useState('');

  const { login } = useAuth();

  const handleSubmitForm = async e => {
    try {
      e.preventDefault();
      await login(emailOrMobile, password);
      toast.success('success login');
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data.message);
    }
  };

  return (
    <form className="d-flex flex-column gap-3" onSubmit={handleSubmitForm}>
      <input
        type="text"
        className="form-control rounded-md h-13"
        placeholder="Email address or phone number"
        value={emailOrMobile}
        onChange={e => setEmailOrMobile(e.target.value)}
      />
      <input
        type="password"
        className="form-control rounded-md h-13"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button className="btn btn-primary w-100 fw-bold rounded-md h-12 text-4.5">
        Log In
      </button>
    </form>
  );
}
