import React, { useEffect, useState } from "react";
import "./App.css";
import SpeechBox from "./components/speechbox/SpeechBox";
// import axios from "axios";

const App = () => {
  // const [data, setData] = useState(null);
  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     try {
  //       const response = await axios.get("/users");
  //       setData(response.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   fetchUsers();
  // }, []);

  return (
    <div className="container">
      <SpeechBox />
    </div>
  );
};

export default App;
