import { useState } from 'react';
import ProfileForm from '../components/ProfileForm';
import useSWR from 'swr';
import axios from 'axios';

const fetcher = (url) => axios.get(url).then((res) => res.data);

const Profile = () => {
  const [formData, setFormData] = useState({ name: '', email: '', bio: '' });
  const { data: userData, error } = useSWR('/api/user', fetcher);

  const handleSubmit = async (values) => {
    // Implement Axios logic here to update user data
    try {
      await axios.put('/api/user', values);
      alert('Profile updated successfully');
    } catch (error) {
      alert('Error updating profile');
    }
  };

  if (error) return <div>Error loading user data</div>;
  if (!userData) return <div>Loading...</div>;

  return (
    <div>
      <h1>Profile Page</h1>
      <ProfileForm initialValues={userData} onSubmit={handleSubmit} />
    </div>
  );
};

export default Profile;