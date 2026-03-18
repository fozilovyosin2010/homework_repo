import React, { useEffect, useState } from "react";

import { Button, Checkbox, Input, Modal, Select } from "antd";
import axios from "axios";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

const App = () => {
  const api = `http://localhost:3000/users`;

  const [inpSearch, setInpSearch] = useState("");
  const [status, setStatus] = useState("");

  const handleStatus = (value) => {
    setStatus(value);
  };

  const [users, setUsers] = useState([]);

  const getData = async () => {
    try {
      let { data } = await axios.get(api);
      setUsers(data);
    } catch (error) {
      console.error(error);
    }
  };
  const delData = async (id) => {
    try {
      await axios.delete(`${api}/${id}`);
      getData();
    } catch (error) {
      console.error(error);
    }
  };

  const postData = async (obj) => {
    try {
      await axios.post(api, obj);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  function handleDel(id) {
    delData(id);
  }

  const [isModalAddOpen, setIsModalAddOpen] = useState(false);
  const showAddModal = () => {
    setIsModalAddOpen(true);
  };
  const handleAddOk = () => {
    setIsModalAddOpen(false);
  };
  const handleAddCancel = () => {
    setIsModalAddOpen(false);
  };

  return (
    <div>
      <div className="header p-[10px_20px] border-b-[2px] border-[rgb(22,119,255)]">
        <div className="max-w-[1440px] m-[0_auto] flex justify-between">
          <Input
            placeholder="Поиск"
            size="medium"
            value={inpSearch}
            style={{ width: "300px" }}
            onChange={(e) => setInpSearch(e.target.value)}
          />
          <div className="flex gap-2">
            <Button type="primary" onClick={showAddModal}>
              добавить
            </Button>
            <Select
              defaultValue=""
              style={{ width: 120 }}
              onChange={handleStatus}
              options={[
                { value: "", label: "All" },
                { value: "true", label: "Complete" },
                { value: "false", label: "Incomplete" },
              ]}
            />
          </div>
        </div>
      </div>
      <div className="container max-w-[1440px] m-[0_auto]">
        {users
          .filter((e) => {
            return status === "true"
              ? e.complete
              : status === "false"
                ? !e.complete
                : e;
          })
          .filter((e) => {
            return (
              e.name.toLowerCase().includes(inpSearch.toLowerCase().trim()) ||
              e.description
                .toLowerCase()
                .includes(inpSearch.toLowerCase().trim())
            );
          })
          .map((e) => {
            return (
              <div key={e.id} className="p-[10px] flex justify-between">
                <div>
                  <div className="text-[16px] font-medium">{e.name}</div>
                  <div className="text-[18px] font-[400]">{e.description}</div>
                </div>
                <div className="flex items-center gap-3">
                  <Button onClick={() => handleDel(e.id)}>
                    <DeleteOutlined style={{ color: "red" }} />
                  </Button>
                  <Button style={{ color: "blue " }}>
                    <EditOutlined />
                  </Button>
                  <Checkbox checked={e.complete} />
                </div>
              </div>
            );
          })}
      </div>
      {/* addModal */}
      <Modal
        title="Добавить"
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalAddOpen}
        onOk={handleAddOk}
        onCancel={handleAddCancel}
        transitionName="ant-motion-zoom-fast" // speeds up modal content animation
        maskTransitionName="ant-motion-fade-fast"
      >
        <div className="flex flex-col gap-2">
          <Input placeholder="Name" size="medium" />
          <Input placeholder="Description" size="medium" />
        </div>
      </Modal>
    </div>
  );
};

export default App;
