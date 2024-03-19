import React, { useContext, useState } from 'react';
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import AccountNav from '../components/AccountNav';
import PlacePage from './PlacePage';
import { UserContext } from '../context/UserContext';

const ProfilePage = () => {

  const [redirect, setRedirect] = useState(null);
  const { ready, user, setUser } = useContext(UserContext);

  const navigate = useNavigate();


  let { subpage } = useParams();

  if (subpage === undefined) {
    subpage = 'profile';
  }

  const logout = async () => {
    await axios.post('http://localhost:4000/api/logout');
    navigate('/');
    setUser(null);
  };


  if (!ready) {
    return 'Loading...';
  }

  if (ready && !user && !redirect) {
    return <Navigate to={'/login'} />
  }

  if (redirect) {
    return <Navigate to={redirect} />
  }

  return (
    <div>
      <AccountNav />
      {subpage === 'profile' && (
        <div className="text-center max-w-lg mx-auto">
          Logged in as  {user.name} ({user.email})<br />

          <button onClick={logout} className="primary max-w-sm mt-2">Logout</button>
        </div>
      )}

      {subpage === 'places' && (
        <PlacePage/>
      )}
    </div>
  )
}

export default ProfilePage