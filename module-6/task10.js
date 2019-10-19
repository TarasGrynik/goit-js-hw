import users from './users.js';

const getSortedUniqueSkills = users => {
  return users.reduce((acc, el) => {
    return el.skills.concat(acc);
  }, [])
    .filter((value, idx, array) => array.indexOf(value) === idx)
    .sort((a, b) => a.localeCompare(b));
};

console.log(getSortedUniqueSkills(users));
