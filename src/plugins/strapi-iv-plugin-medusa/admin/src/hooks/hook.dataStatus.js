import React, { useState } from "react";

export const DirectionStatus = {
  pending: "pending",
  resolve: "resolve",
  reject: "reject",
};

export default function HookDataStatus(status) {
  const [saveData, setDataStatus] = useState(status ? status : "pending");

  return { saveData, setDataStatus };
}
