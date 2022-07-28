import React, { useState } from "react";
//import { useNavigate } from "react-router-dom";
import Button3 from './Button3.js';
import './home.css';



const Home = () => {
  const [data, setData] = useState("");
  //const navigate = useNavigate();

  const [mood, setMood] = useState('');

//   useEffect(() => {
//     axios.get(http://127.0.0.1:5000).then((res) => {
//       const persons = res.data;
//       setData(persons);
//       console.log(res.data);
//     });
//   }, []);

  return (
    <div className="App">
      <div className="App-header">
        <div>
           
          <div
            className="Mood bg-gradient-to-r from-indigo-500 via-purple-600 to-purple-700 ..."
            style={{
            //   height: "320px",
              height: "100vh",
              width: "18em",
              display: "grid",
            //   grid-column: 1/span 3,
             // backgroundColor: "rgb(24, 23, 23)",
              padding: "40px",
              marginLeft: "30px",
              color: "white",
            }}
          > <span> </span>
            <div className="title-font">YOUR MOOD NOW:
                <Button3 mood="Happy"/>
                <Button3 mood="Sad"/>
                <Button3 mood="Angry"/>
                <Button3 mood="Excited"/>
                </div>
          </div>
          <p style={{ color: "white" }}>{data.mood}</p>
        </div>
      </div>
    </div>
  );
};

export default Home;