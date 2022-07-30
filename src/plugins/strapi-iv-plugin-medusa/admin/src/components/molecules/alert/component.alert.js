import React, { useState, useEffect } from "react";
import { Alert } from "@strapi/design-system/Alert";
import { dataStatusEnum } from "../../../hooks/hook.dataStatus";

export default function ComponentAlert({ data: { display, status, description, callBack }, style }) {
  const [show, setShow] = useState(display);

  useEffect(() => {
    setShow(display);
  }, [display, status, description, callBack]);

  return (
    <>
      {show && status === dataStatusEnum.resolve && (
        <Alert
          style={style}
          closeLabel="Close alert"
          variant="success"
          onClose={() => {
            setShow(false);
            !!callBack && callBack();
          }}
        >
          {description}
        </Alert>
      )}
      {show && status === dataStatusEnum.reject && (
        <Alert
          style={style}
          closeLabel="Close alert"
          variant="danger"
          onClose={() => {
            setShow(false);
            !!callBack && callBack();
          }}
        >
          {description}
        </Alert>
      )}
    </>
  );
}
