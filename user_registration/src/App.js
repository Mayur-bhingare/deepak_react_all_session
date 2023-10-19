// import (optional)
import { useState } from "react";
// logic (class or function )
const App = () => {
  // state are use to handel data
  let [studentList, setStudentList] = useState([]); // [value,function]
  let [inputText, setInputText] = useState("");

  let changeText = () => {
    // insert data in array
    let _studentList = [...studentList];
    _studentList.push(inputText);
    setStudentList(_studentList);

    setInputText("");
  };

  let changeInput = (event) => {
    setInputText(event.target.value);
  };
  console.log(studentList);
  return (
    <>
      <div className="d-flex flex-column align-items-center">
        <input
          onChange={changeInput}
          value={inputText}
          type="text"
          className="w-50 form-control"
        />
        <button onClick={changeText} className="btn btn-success">
          Click
        </button>
        <ul>
          {studentList.map((value, index) => {
            return <li key={index}>{value}</li>;
          })}
        </ul>
      </div>
    </>
  );
};

// export
export default App;
