import React from "react";
import { Alert } from "@strapi/design-system/Alert";
import { DirectionStatus } from "../../../hooks/hook.dataStatus";

export default function ComponentAlertDataStatus({ data: { dataStatus, callBack } }) {
  return (
    <>
      {dataStatus === DirectionStatus.resolve && (
        <Alert closeLabel="Close alert" variant="success" onClose={() => callBack(DirectionStatus.pending)}>
          Saved 😍
        </Alert>
      )}
      {dataStatus === DirectionStatus.reject && (
        <Alert closeLabel="Close alert" variant="danger" onClose={() => callBack(DirectionStatus.pending)}>
          something wreak 😭 you can try again 😇
        </Alert>
      )}
    </>
  );
}
