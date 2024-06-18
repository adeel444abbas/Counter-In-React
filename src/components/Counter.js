const Counter = (props) => {
  console.log(props);
  return (
    <>
      <div className="container" style={{ backgroundColor: props.color }}>
        <div className="counter">
          <h1>Counter: {props.count}</h1>
          <div className="buttons">
            <button onClick={props.handleIncreament}>+2</button>
            <button onClick={props.handleReset}>Reset</button>
            <button onClick={props.handleDecrement}>-2</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Counter;
