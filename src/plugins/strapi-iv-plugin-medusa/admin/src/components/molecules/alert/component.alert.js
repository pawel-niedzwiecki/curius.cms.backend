import React from "react";
import { Alert } from "@strapi/design-system/Alert";
import { DirectionStatus } from "../../../hooks/hook.dataStatus";

export default function ComponentAlert({ data: { status, description } }) {
  return (
    <>
      {status === DirectionStatus.resolve && (
        <Alert closeLabel="Close alert" variant="success" onClose={() => callBack(DirectionStatus.pending)}>
          {description}
        </Alert>
      )}
      {status === DirectionStatus.reject && (
        <Alert closeLabel="Close alert" variant="danger" onClose={() => callBack(DirectionStatus.pending)}>
          {description}
        </Alert>
      )}
    </>
  );
}
