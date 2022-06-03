import React from "react";
import { Alert } from "@strapi/design-system/Alert";
import { DirectionStatus } from "../../../hooks/hook.saveStatus";

export default function ComponentSaveStatus({ data: { saveStatus, callBack } }) {
  return (
    <>
      {saveStatus === "resolve" && (
        <Alert closeLabel="Close alert" variant="success" onClose={() => callBack(DirectionStatus.pending)}>
          Saved 😍
        </Alert>
      )}
      {saveStatus === "reject" && (
        <Alert closeLabel="Close alert" variant="danger" onClose={() => callBack(DirectionStatus.pending)}>
          something wreak 😭 you can try again 😇
        </Alert>
      )}
    </>
  );
}
