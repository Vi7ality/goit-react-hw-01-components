import 'modern-normalize';

import { Profile } from '../Profile/Profile.jsx';
import user from 'json/user.json';

import { Statistics } from '../Statistics/Statistics';
import data from 'json/data.json';

import { FriendList } from 'components/FriendList/FriendList.jsx';
import friends from 'json/friends.json'

import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory.jsx';
import transactions from 'json/transactions.json'

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />

    </div>
  );
};
