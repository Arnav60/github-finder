import React, { useContext } from 'react';
import { UserWrapper } from './styles';
import Spinner from '../layout/Spinner';
import UserItem from './UserItem';
import GithubContext from '../../context/github/githubContext';

const Users = () => {
  const githubContext = useContext(GithubContext);
  const { loading, users } = githubContext;
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <UserWrapper>
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </UserWrapper>
    );
  }
};
export default Users;
