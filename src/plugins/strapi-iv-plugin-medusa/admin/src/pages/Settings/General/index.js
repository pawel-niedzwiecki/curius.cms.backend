import React, { useEffect, useState } from "react";

import { BaseHeaderLayout } from "@strapi/design-system/Layout";

import ListSettingsModal from "../../../components/templates/listSettingsModal";

const Settings = () => {
  return (
    <>
      <BaseHeaderLayout
        title="General settings"
        subtitle="General settings for plugin strapi-iv-plugin-medusa"
        as="h2"
      />
      <ListSettingsModal data={[{ type: "APITokenMedusaServer" }]} />
    </>
  );
};

export default Settings;
