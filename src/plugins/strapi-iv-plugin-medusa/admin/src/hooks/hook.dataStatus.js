import { useState } from "react";

export const dataStatus = {
  pending: "pending",
  resolve: "resolve",
  reject: "reject",
};

export default function HookDataStatus(status) {
  const [dataStatus, setDataStatus] = useState(status ? status : "pending");

  return { dataStatus, setDataStatus };
}
