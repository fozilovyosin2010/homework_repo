import React, { useState } from "react";

import {
  DeleteOutlined,
  EditOutlined,
  InfoCircleTwoTone,
} from "@ant-design/icons";

import { Avatar, Button, Card } from "antd";

import axios from "axios";

const CardProf = ({
  id,
  name,
  getReg,
  handleInfoBtn,
  handleEditBtn,
  handleDelBtn,
  disabled,
}) => {
  const actions = [
    <Button disabled={disabled} onClick={handleEditBtn} type="link">
      <EditOutlined style={{ color: "blue" }} key="edit" />
    </Button>,
    <Button disabled={disabled} onClick={handleDelBtn} type="link">
      <DeleteOutlined style={{ color: "red" }} key="setting" />
    </Button>,
    <Button disabled={disabled} onClick={handleInfoBtn} type="link">
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
