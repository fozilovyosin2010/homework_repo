import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Component/Card";
import { Button, Input, Modal, Pagination, Select, Tooltip } from "antd";

import {
  DownOutlined,
  InfoCircleOutlined,
  UpOutlined,
  UserOutlined,
} from "@ant-design/icons";

const App = () => {
  const api = "http://37.27.29.18:8001/api/categories";

  const [users, setUsers] = useState([]);

  const [load, setLoad] = useState(true);

  const getData = async () => {
    try {
      setLoad(true);
      let { data } = await axios.get(api);
      setUsers(data.data.toReversed());
    } catch (error) {
      console.error(error);
    } finally {
      setLoad(false);
    }
  };

  const postData = async (obj) => {
    try {
      await axios.post(api, obj);
      getData();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const [pag, setPag] = useState(6);

  const [addItemsShow, setAddItemsShow] = useState(3);
  const [addItemsHide, setAddItemsHide] = useState(3);

  const data = users.slice(0, pag);

  const handlePagShow = (e) => {
    if (data.length + addItemsHide > data.length) {
      setPag((e) => e + addItemsShow);
    }
  };
  const handlePagHide = (e) => {
    if (data.length - addItemsHide > 0) {
      setPag((e) => e - addItemsHide);
    }
  };
  const handleChangeShowNum = (e) => {
    setAddItemsShow(e);
  };
  const handleChangeHideNum = (e) => {
    setAddItemsHide(e);
  };

  const [inpS, setInpS] = useState("");

  function handleInpS(e) {
    setInpS(e.target.value);
  }

  function handleAdd() {
    if (inpS.trim() !== "") {
      const obj = {
        name: inpS.trim(),
      };
      postData(obj);
      setInpS("");
    }
  }

  return (
    <div className="max-w-[1400px] m-[0_auto]">
      <div className="header p-[10px]">
        <div className="flex gap-3">
          <Input
            placeholder="Enter your username"
            onChange={handleInpS}
            value={inpS}
            style={{ maxWidth: "400px" }}
            prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
            suffix={
              <Tooltip title="Extra information">
                <InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
              </Tooltip>
            }
          />
          <Button onClick={handleAdd} type="primary">
            Add
          </Button>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-3 gap-[40px] p-[10px_20px]">
          {data.map((e, i) => {
            return <Card key={e.id} {...e} getReg={getData} />;
          })}
        </div>
        <div className="flex justify-center gap-[40px] py-[30px]">
          <div className="flex gap-3">
            <Button onClick={handlePagShow}>
              Show <DownOutlined />
            </Button>
            <Select
              defaultValue="3"
              style={{ width: 50 }}
              onChange={handleChangeShowNum}
              options={[
                { value: 1, label: "1" },
                { value: 2, label: "2" },
                { value: 3, label: "3" },
              ]}
            />
          </div>
          <div className="flex gap-3">
            <Button onClick={handlePagHide}>
              Hide <UpOutlined />
            </Button>
            <Select
              defaultValue="3"
              style={{ width: 50 }}
              onChange={handleChangeHideNum}
              options={[
                { value: 1, label: "1" },
                { value: 2, label: "2" },
                { value: 3, label: "3" },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
