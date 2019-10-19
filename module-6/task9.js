import users from './users.js';

const getNamesSortedByFriendsCount = users => {
  return users.sort((a, b) => {
    const nextValue = a.friends.length;
    const prevValue = b.friends.length;
    return nextValue - prevValue;
  }).map(user => user.name);
};

console.log(getNamesSortedByFriendsCount(users));
