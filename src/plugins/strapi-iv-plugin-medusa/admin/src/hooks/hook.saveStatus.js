import React, { useState } from "react";

export const DirectionStatus = {
  pending: "pending",
  resolve: "resolve",
  reject: "reject",
};

export default function HookSaveStatus(status) {
  const [saveStatus, setSaveStatus] = useState(status ? status : "pending");

  return { saveStatus, setSaveStatus };
}
