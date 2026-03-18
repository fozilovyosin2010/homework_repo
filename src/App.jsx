import React, { useEffect, useState } from "react";

import { Button, Input, Select } from "antd";
import axios from "axios";

const App = () => {
  const [status, setStatus] = useState("");

  const handleStatus = (value) => {
    setStatus(value);
  };

  return (
    <div>
      <div className="header p-[10px_20px] border-b-[2px] border-[rgb(22,119,255)]">
        <div className="max-w-[1440px] m-[0_auto] flex justify-between">
          <Input placeholder="Поиск" size="medium" style={{ width: "300px" }} />
          <div className="flex gap-2">
            <Button type="primary">добавить</Button>
            <Select
              defaultValue=""
              style={{ width: 120 }}
              onChange={handleStatus}
              options={[
                { value: "", label: "All" },
                { value: true, label: "Active" },
                { value: false, label: "Inactive" },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
