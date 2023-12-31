import "./App.css";

function App() {
  return (
    <>
      <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
        <div className="flex flex-col">
          <span className="countdown font-mono text-5xl">
            <span style={{ "--value": 15 }}></span>
          </span>
          days
        </div>
        <div className="flex flex-col">
          <span className="countdown font-mono text-5xl">
            <span style={{ "--value": 10 }}></span>
          </span>
          hours
        </div>
        <div className="flex flex-col">
          <span className="countdown font-mono text-5xl">
            <span style={{ "--value": 24 }}></span>
          </span>
          min
        </div>
        <div className="flex flex-col">
          <span className="countdown font-mono text-5xl">
            <span style={{ "--value": 48 }}></span>
          </span>
          sec
        </div>
      </div>
      <input
        type="radio"
        name="radio-3"
        className="radio radio-secondary"
        checked
      />
      <input type="radio" name="radio-3" className="radio radio-secondary" />
    </>
  );
}

export default App;
