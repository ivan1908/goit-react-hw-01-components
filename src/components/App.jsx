import Profile from './Profile/Profile.jsx';
import user from '../base/user.json';
import Statistics from './Statistics/Statistics.jsx';
import data from '../base/data.json';
import FriendList from './FriendList/FriendList.jsx';
import friends from '../base/friends.json';
import TransactionHistory from './TransactionHistory/TransactionHistory.jsx';
import transactions from '../base/transactions.json';

export const App = () => {
  return (
    <>
      < Profile username={user.username} tag={user.tag} location={user.location} avatar={user.avatar} stats={user.stats} />
      < Statistics title="Upload stats" stats={data} />
      < Statistics stats={data} />
      < FriendList friends={friends} />
      < TransactionHistory items={transactions} />;
    </>
  );
};