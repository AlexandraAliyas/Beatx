import "../../Animate_logo.css";

function AnimateLogo() {
  const name = ["B", "E", "A", "T", "X"];
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-gradient-to-t from-blue-200 to-indigo-900 sm:px-6">
      {/* <div className=" flex items-center justify-center max-w-sm p-4 div w-screen h-screen flex-col bg-gradient-to-t from-blue-200 to-indigo-900 "> */}
      {/* <div className=" bg-gradient-to-r from-indigo-500 via-purple-600 to-purple-700 ... "> */}
      <div className="waviy">

        {name.map((n, index) => (
          <span style={{ "--i": `${index + 1}` }}>{n}</span>
        ))}

        <br />
        <div className="tagline">
          Let Your Heart Beat With Us</div>
          <button onClick={() => (window.location = '/login')}>Login</button>
      </div>

    </div>
  );
}

export default AnimateLogo;