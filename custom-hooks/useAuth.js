import React from 'react';
import { getFromDatabase, saveToDatabase } from '../fbdatabase/database';

export function  useAuth() {
  // const [userId, setUserId] = React.useState(null)
  const [userId, setUserId] = React.useState(null);
  const [users, setUsers] = useState(null);

  useEffect (() => {
    getUsers();
  }, []);

  const connect = (username) => {
    saveToDatabase(`/users/${username}`, true);
    setUserId(username);
  }

  const getUsers = () => {
    getFromDatabase('/users', res => {
      setUsers(Object.keys(res))
    })
  }

  return [userId, users, connect];
}