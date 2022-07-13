import React from "react";
import { Alert } from "@strapi/design-system/Alert";
import { dataStatusEnum } from "../../../hooks/hook.dataStatus";

export default function ComponentAlert({ data: { status, description, callBack } }) {
  return (
    <>
      {status === dataStatusEnum.resolve && (
        <Alert closeLabel="Close alert" variant="success" onClose={() => callBack(false)}>
          {description}
        </Alert>
      )}
      {status === dataStatusEnum.reject && (
        <Alert closeLabel="Close alert" variant="danger" onClose={() => callBack(false)}>
          {description}
        </Alert>
      )}
    </>
  );
}
