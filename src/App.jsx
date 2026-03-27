import axios from "axios";

import React, { useEffect, useState } from "react";

import Card from "./Component/Card";

import { Button, Form, Input, Modal, Select, Tooltip } from "antd";

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

  const delData = async (id) => {
    try {
      await axios.delete(`${api}?id=${id}`);
      getData();
    } catch (error) {
      console.error(error);
    }
  };

  const putData = async (obj) => {
    try {
      await axios.put(api, obj);
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

  function handleSubmitAdd(val) {
    postData(val);
    formDataAdd.resetFields();
  }

  const [formDataAdd] = Form.useForm();

  // get info modal

  const [openInfo, setOpenInfo] = useState(false);

  // obj for InfoModal
  const [objMod, setObjMod] = useState(null);

  const showModalInfo = (elem) => {
    setOpenInfo(true);

    setObjMod(elem);
  };
  const handleOkInfo = () => {
    setOpenInfo(false);
    setObjMod(null);
  };
  const handleCancelInfo = () => {
    setOpenInfo(false);
    setObjMod(null);
  };

  // edit modal

  const [formData] = Form.useForm();
  const [openEdit, setOpenEdit] = useState(false);
  const [idxEdit, setIdxEdit] = useState(null);

  const handleSubmitEdit = (values) => {
    const obj = { id: idxEdit, ...values };

    putData(obj);

    setOpenEdit(false);
    setIdxEdit(null);
  };

  function handleOpenEdit(obj) {
    setOpenEdit(true);

    setIdxEdit(obj.id);

    setTimeout(() => {
      formData.setFieldsValue({ name: obj.name });
    }, 0);
  }
  function handleCloseEdit() {
    setOpenEdit(false);

    setIdxEdit(null);
  }

  return (
    <div className="max-w-[1400px] m-[0_auto] px-[20px]">
      <div className="header border-b py-[10px]">
        <Form
          form={formDataAdd}
          onFinish={handleSubmitAdd}
          className="flex gap-3"
        >
          <Form.Item
            name="name"
            rules={[
              {
                required: true,
                message: "Please input the name of collection!",
              },
            ]}
          >
            <Input placeholder="add name " />
          </Form.Item>
          <Button htmlType="submit" type="primary">
            Add
          </Button>
        </Form>
      </div>
      <div className="content flex flex-col gap-[30px]">
        <div className="grid grid-cols-3 gap-[40px] py-[10px]">
          {data.map((elem, i) => {
            return (
              <Card
                key={elem.id}
                {...elem}
                getReg={getData}
                handleDelBtn={() => delData(elem.id)}
                handleInfoBtn={() => showModalInfo(elem)}
                handleEditBtn={() => handleOpenEdit(elem)}
              />
            );
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
      {/* get info modal */}
      <Modal
        open={openInfo}
        title="Info"
        onOk={handleOkInfo}
        onCancel={handleCancelInfo}
        footer={(_, { OkBtn, CancelBtn }) => (
          <>
            {/* <Button>Custom Button</Button> */}
            <CancelBtn />
            <OkBtn />
          </>
        )}
      >
        <Card {...objMod} disabled={true} />
      </Modal>
      {/* edit modal */}
      <Modal
        open={openEdit}
        title="Edit a user"
        okText="Edit"
        cancelText="Cancel"
        okButtonProps={{ autoFocus: true, htmlType: "submit" }}
        onCancel={handleCloseEdit}
        // destroyOnHidden
        modalRender={(dom) => (
          <Form
            layout="vertical"
            form={formData}
            name="form_in_modal"
            clearOnDestroy
            onFinish={handleSubmitEdit}
          >
            {dom}
          </Form>
        )}
      >
        <Form.Item
          name="name"
          label="Name"
          rules={[
            {
              required: true,
              message: "Please input the name of collection!",
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Modal>
    </div>
  );
};

export default App;
