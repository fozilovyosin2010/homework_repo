import React, { useState } from "react";

import {
  DeleteOutlined,
  EditOutlined,
  InfoCircleTwoTone,
} from "@ant-design/icons";
import { Avatar, Button, Card, Flex, Switch } from "antd";

import axios from "axios";

const CardProf = ({ id, name, getReg }) => {
  const api = "http://37.27.29.18:8001/api/categories";

  const delData = async (id) => {
    try {
      await axios.delete(`${api}?id=${id}`);
      getReg();
    } catch (error) {
      console.error(error);
    }
  };

  const actions = [
    <Button type="link">
      <EditOutlined style={{ color: "blue" }} key="edit" />
    </Button>,
    <Button onClick={() => delData(id)} type="link">
      <DeleteOutlined style={{ color: "red" }} key="setting" />
    </Button>,
    <Button type="link">
      <InfoCircleTwoTone key="info" />
    </Button>,
  ];
  return (
    <div>
      <Card actions={actions} style={{ minWidth: 350 }}>
        <Card.Meta
          avatar={<Avatar children={id} />}
          description={
            <>
              <div className="text-[30px] font-bold">{name}</div>
            </>
          }
        />
      </Card>
    </div>
  );
};

export default CardProf;
