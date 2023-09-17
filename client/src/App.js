import React, { useEffect, useState } from "react";
import "./App.css";
import Users from "./components/users/Users";
import axios from "axios";

const App = () => {
  const [data, setData] = useState(null);
  // Fetch users data
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("/users");
        setData(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="container">
      <Users users={data ? data : "loading.."} />
    </div>
  );
};

export default App;
