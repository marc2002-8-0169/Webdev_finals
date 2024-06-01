import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // Logic to fetch user data from the database
    const userData = { name: 'John Doe', email: 'johndoe@example.com', bio: 'Hello, I am John Doe' };
    res.status(200).json(userData);
  } else if (req.method === 'PUT') {
    // Logic to update user data in the database
    try {
      // Example: const updatedUserData = await updateUser(req.body);
      res.status(200).json({ message: 'User data updated successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error updating user data' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}