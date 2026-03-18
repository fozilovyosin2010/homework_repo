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

  const putData = async (id, obj) => {
    try {
      await axios.put(`${api}/${id}`, obj);
      getData();
    } catch (error) {
      console.error(error);
    }
  };

  const patchData = async (id, check) => {
    try {
      await axios.patch(`${api}/${id}`, { complete: check });
      getData();
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

  const [inpAddName, setInpAddName] = useState("");
  const [inpAddDes, setInpAddDes] = useState("");

  const handleAddOk = () => {
    if (inpAddName.trim() !== "" && inpAddDes.trim() !== "") {
      const obj = {
        id: Date.now(),
        name: inpAddName.trim(),
        description: inpAddDes.trim(),
        complete: false,
      };

      setInpAddDes("");
      setInpAddName("");

      postData(obj);

      setIsModalAddOpen(false);
    } else {
      alert("Пополни инпут");
    }
  };
  const handleAddCancel = () => {
    setIsModalAddOpen(false);

    setInpAddDes("");
    setInpAddName("");
  };

  // edit
  const [isModalEditOpen, setIsModalEditOpen] = useState(false);
  const [idx, setIdx] = useState(null);

  const [inpEditName, setInpEditName] = useState("");
  const [inpEditDes, setInpEditDes] = useState("");

  const showEditModal = (elem) => {
    setIsModalEditOpen(true);

    setIdx(elem.id);
    setInpEditName(elem.name);
    setInpEditDes(elem.description);
  };

  const handleEditOk = () => {
    if (inpEditName.trim() !== "" && inpEditDes.trim() !== "") {
      const obj = {
        id: idx,
        name: inpEditName.trim(),
        description: inpEditDes.trim(),
        complete: false,
      };

      putData(idx, obj);

      setInpEditDes("");
      setInpEditName("");
      setIdx(null);

      setIsModalAddOpen(false);
    } else {
      alert("Пополни инпут");
    }
  };

  const handleEditCancel = () => {
    setIsModalEditOpen(false);

    setInpEditDes("");
    setInpEditName("");
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
                  <Button
                    onClick={() => showEditModal(e)}
                    style={{ color: "blue " }}
                  >
                    <EditOutlined />
                  </Button>
                  <Checkbox
                    onClick={() => {
                      patchData(e.id, !e.complete);
                    }}
                    checked={e.complete}
                  />
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
      >
        <div className="flex flex-col gap-2">
          <Input
            value={inpAddName}
            onChange={(e) => setInpAddName(e.target.value)}
            placeholder="Name"
            size="medium"
          />
          <Input
            value={inpAddDes}
            onChange={(e) => setInpAddDes(e.target.value)}
            placeholder="Description"
            size="medium"
          />
        </div>
      </Modal>

      {/* editModal */}

      <Modal
        title="Добавить"
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalEditOpen}
        onOk={handleEditOk}
        onCancel={handleEditCancel}
      >
        <Input
          value={inpEditName}
          onChange={(e) => setInpEditName(e.target.value)}
          placeholder="Name"
          size="medium"
        />
        <Input
          value={inpEditDes}
          onChange={(e) => setInpEditDes(e.target.value)}
          placeholder="Description"
          size="medium"
        />
      </Modal>
    </div>
  );
};

export default App;
