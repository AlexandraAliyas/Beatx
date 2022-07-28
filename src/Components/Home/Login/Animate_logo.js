import "../../Animate_logo.css"; 
 
function Animate_logo() { 
  const name=["B","E","A","T","X"];
  return ( 
    <>
      <div class=" flex items-center w-screen h-screen flex-col justify-center bg-gradient-to-r from-indigo-500 via-purple-600 to-purple-700 ">
      {/* <div class=" bg-gradient-to-r from-indigo-500 via-purple-600 to-purple-700 ... "> */}
      <div className="waviy" > 
      
      {name.map((n,index)=>(
        <span style={{ "--i": `${index+1}` }}>{n}</span>
      ))}
     
        

        {/* <span style={{ "--i": "2" }}>I</span> 
        <span style={{ "--i": "3" }}>Y</span> 
        <span style={{ "--i": "4" }}>O</span> 
        <span style={{ "--i": "5" }}>V</span> 
        <span style={{ "--i": "6" }}>U</span> 
        <span style={{ "--i": "7" }}>D</span> 
        <span style={{ "--i": "8" }}>D</span> 
        <span style={{ "--i": "9" }}>I</span> 
        <span style={{ "--i": "10" }}>N</span>  */}
 
      </div> 
      
    {/* </div> */}
     <br/>
      <div className="tagline">
    Let Your Beat With Us</div>
    
      </div>
      
    </> 
  ); 
} 
 
export default Animate_logo;