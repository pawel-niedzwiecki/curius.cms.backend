import { useState } from "react";

export const dataStatusEnum = {
  pending: "pending",
  resolve: "resolve",
  reject: "reject",
};

export default function HookDataStatus(status) {
  const [dataStatus, setDataStatus] = useState(status ? status : "pending");

  return { dataStatus, setDataStatus, dataStatusEnum };
}
