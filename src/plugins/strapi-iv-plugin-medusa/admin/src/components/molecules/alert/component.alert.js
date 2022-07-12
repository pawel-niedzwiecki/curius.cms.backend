import React from "react";
import { Alert } from "@strapi/design-system/Alert";
import { dataStatus } from "../../../hooks/hook.dataStatus";

export default function ComponentAlert({ data: { status, description, callBack } }) {
  return (
    <>
      {status === dataStatus.resolve && (
        <Alert closeLabel="Close alert" variant="success" onClose={() => callBack(false)}>
          {description}
        </Alert>
      )}
      {status === dataStatus.reject && (
        <Alert closeLabel="Close alert" variant="danger" onClose={() => callBack(false)}>
          {description}
        </Alert>
      )}
    </>
  );
}
