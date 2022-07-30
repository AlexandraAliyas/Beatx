import "../../Animate_logo.css"; 
 
function Animate_logo() { 
  const name=["B","E","A","T","X"];
  return ( 
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-gradient-to-t from-blue-200 to-indigo-900 sm:px-6">
      {/* <div class=" flex items-center justify-center max-w-sm p-4 div w-screen h-screen flex-col bg-gradient-to-t from-blue-200 to-indigo-900 "> */}
      {/* <div class=" bg-gradient-to-r from-indigo-500 via-purple-600 to-purple-700 ... "> */}
      <div className="waviy"> 
      
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
    Let Your Heart Beat With Us</div>
    
      </div>
      
    // </div> 
  ); 
} 
 
export default Animate_logo;