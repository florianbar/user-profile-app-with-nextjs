import { useEffect, useContext } from 'react';

import { ProfileContext } from '../context/profile-context';
import ProfileControls from '../components/ProfileControls';
import ProfileList from '../components/ProfileList';

export default function Home() {
  const { fetchProfiles } = useContext(ProfileContext);

  useEffect(() => {
      fetchProfiles();
  }, [fetchProfiles]);

  return (
    <div className="container">
      <h1>User Profiles</h1>
      <ProfileControls />
      <ProfileList />
    </div>
  )
}
