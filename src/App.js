import { useState } from "react";
import Form from "./components/Form";
import Table from "./components/Table";

function App() {
  const [person, setPerson] = useState({});
  const [customers, setCustomers] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [indexNo, setIndexNo] = useState(-1);
  return (
    <div className="py-2 px-8 flex justify-center ">
      <div className="max-w-10">
        <h1 className="font-bold text-2xl mb-10 ">CUSTOMER</h1>
        <h1
          className={`h-10 font-bold text-lg ${
            isEdit ? "text-orange-600" : "text-green-600"
          }`}
        >
          {isEdit ? "EDIT" : "CREATE"}
        </h1>
        <Form
          customers={customers}
          setCustomers={setCustomers}
          isEdit={isEdit}
          person={person}
          indexNo={indexNo}
          setIsEdit={setIsEdit}
        />
        <Table
          data={customers}
          setIsEdit={setIsEdit}
          setCustomers={setCustomers}
          setPerson={setPerson}
          setIndex={setIndexNo}
        />
      </div>
    </div>
  );
}

export default App;
