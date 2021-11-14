import { useEffect, useState } from "react";
import Bottom from "./Controller/Bottom/Bottom";
import Top from "./Controller/Top/Top";
import axios from "axios";

function App() {
  const [formData, setFormData] = useState({});
  const [data1, setData1] = useState([]);
  useEffect(() => {
    axios
      .post("http://localhost:9000/jobs", formData)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [formData]);
  useEffect(() => {
    axios
      .get("http://localhost:9000/jobs")
      .then((res) => {
        setData1(res.data.job);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [formData]);
  return (
    <div className="App">
      <Top setFormData={setFormData} />
      <Bottom data1={data1} />
    </div>
  );
}

export default App;
