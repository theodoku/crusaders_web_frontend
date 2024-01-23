import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { loginUser, registerUser } from '../redux/userReducer';
import backgroundImage from '../assets/Deus Vult.jpeg';

const initialState = {
  username: '',
  password: '',
  isMember: true,
};

const LoginForm = () => {
  const [values, setValues] = useState(initialState);
  const userState = useSelector((store) => store.user);
  const { isLoading = false } = userState || {};
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const { username, password } = values;
    if (!username || !password) {
      toast.error('Please fill out all Fields');
    } else if (values.isMember) {
      try {
        dispatch(loginUser({ username, password }));
      } catch (error) {
        toast.error(
          'Error during login. Please check your credentials and try again.',
        );
      }
    } else {
      try {
        dispatch(registerUser({ username, password }));
      } catch (error) {
        toast.error('Error during registration. Please try again.');
      }
    }
  };

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  useEffect(() => {
    if (userState.isAuthenticated) {
      navigate('/');
    }
  }, [navigate, userState]);

  return (
    <div className="  flex w-full">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text lg:text-left">
            <h1 className="text-5xl font-bold text-black-500">
              TEAM CRUSADERS
            </h1>
            <p className="py-6 text-silver">Deus Vult!</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-primary-content">
            <form onSubmit={onSubmit} className="card-body">
              <h3 className="text-center text-3xl ">
                {values.isMember ? 'Login' : 'Register'}
              </h3>
              <div className="w-full  grid gap-5 ">
                <div className="form-control">
                  <label
                    className="input-group input-group-vertical"
                    htmlFor="username"
                  >
                    <span className="bg-green-500 text-white font-bold">
                      Username
                    </span>
                    <input
                      type="text"
                      value={values.username}
                      name="username"
                      id="username"
                      onChange={handleChange}
                      className="input input-bordered focus:outline-none"
                    />
                  </label>
                </div>
                <label
                  className="input-group input-group-vertical"
                  htmlFor="password"
                >
                  <span className="bg-green-500 text-white font-bold">
                    Password
                  </span>
                  <input
                    type="password"
                    value={values.password}
                    name="password"
                    id="password"
                    onChange={handleChange}
                    className="input input-bordered focus:outline-none"
                  />
                </label>
                <button
                  type="submit"
                  className="btn bg-green-500 hover:text-green-500 hover:border hover:border-green-500 text-white"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span className="btn btn-outline loading loading-spinner text-primary text-xl" />
                  ) : (
                    'Submit'
                  )}
                </button>
              </div>
              <p className="text-center">
                {values.isMember ? 'Not a member yet? ' : 'Already a member? '}
                <button
                  type="button"
                  onClick={toggleMember}
                  className="link link-success"
                >
                  {values.isMember ? 'Register' : 'Login'}
                </button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
