import React, { useReducer } from "react";

const initialState = {
  initialValue: 0,
  step: 0,
};

const reducer = (state, action) => {
  if (action.type === "CHANGE_INITIAL_VALUE") {
    return { ...state, initialValue: action.payload };
  }

  if (action.type === "CHANGE_STEP") {
    return { ...state, step: action.payload };
  }

  if (action.type === "DEC") {
    return {
      ...state,
      initialValue:
        state.step === 0
          ? state.initialValue--
          : state.initialValue - Number(state.step),
    };
  }

  if (action.type === "INC") {
    return {
      ...state,
      initialValue:
        state.step === 0
          ? state.initialValue++
          : state.initialValue + Number(state.step),
    };
  }

  if (action.type === "RESET_VALUES") {
    return {
      ...state,
      initialValue: 0,
      step: 0,
    };
  }

  return state;
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { initialValue, step } = state;

  const initialValueChangeHandler = (e) => {
    dispatch({
      type: "CHANGE_INITIAL_VALUE",
      payload: e.target.value,
    });
  };

  const stepChangeHandler = (e) => {
    dispatch({
      type: "CHANGE_STEP",
      payload: e.target.value,
    });
  };

  const decValue = () => {
    dispatch({ type: "DEC" });
  };

  const incValue = () => {
    dispatch({ type: "INC" });
  };

  const resetValues = () => {
    dispatch({ type: "RESET_VALUES" });
  };

  return (
    <div>
      <div>
        <label>Step</label>
        <input type="number" value={step} onChange={stepChangeHandler} />
      </div>
      <div>
        <button onClick={decValue}>-</button>
        <div>
          <label>Initial value</label>
          <input
            type="number"
            value={initialValue}
            onChange={initialValueChangeHandler}
          />
        </div>
        <button onClick={incValue}>+</button>
      </div>
      <button onClick={resetValues}>Reeset</button>
    </div>
  );
};

export default App;
