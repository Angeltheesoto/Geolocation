import React, { useEffect, useState } from "react";

const Users = ({ users }) => {
  const [firstNames, setFirstNames] = useState([]);
  const [lastNames, setLastNames] = useState([]);
  const [numbers, setNumbers] = useState([]);

  useEffect(() => {
    for (let i = 1; i < 6; i++) {
      setNumbers((prev) => [...prev, i]);
    }
  }, []);

  useEffect(() => {
    setFirstNames(users?.firstNames);
    setLastNames(users?.lastNames);
  }, [users]);

  return (
    <div>
      <h1>First Names</h1>
      <ul>
        {firstNames &&
          firstNames?.map((name, index) => <li key={index}>{name}</li>)}
      </ul>
      <h1>Last Names</h1>
      <ul>
        {lastNames &&
          lastNames?.map((name, index) => <li key={index}>{name}</li>)}
      </ul>
      <h1>Numbers</h1>
      <ul>{numbers && numbers?.map((num) => <li key={num}>{num}</li>)}</ul>
    </div>
  );
};

export default Users;
