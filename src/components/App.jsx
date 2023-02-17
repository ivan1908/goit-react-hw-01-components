import Profile from './Profile/Profile.jsx';
import user from '../base/user.json';
import Statistics from './Statistics/Statistics.jsx';
import data from '../base/data.json';

import friends from '../base/friends.json';

import transactions from '../base/transactions.json';

export const App = () => {
  return (
    <>
      < Profile username={user.username} tag={user.tag} location={user.location} avatar={user.avatar} stats={user.stats} />
      < Statistics title="Upload stats" stats={data} />
    </>
  );
};