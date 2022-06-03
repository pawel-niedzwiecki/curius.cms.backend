import React, { useEffect, useState } from "react";

import { BaseHeaderLayout } from "@strapi/design-system/Layout";

import ComponentListSettingsModal from "../../../components/templates/listSettingsModal";

const Settings = () => {
  return (
    <>
      <BaseHeaderLayout
        title="General settings"
        subtitle="General settings for plugin strapi-iv-plugin-medusa"
        as="h2"
      />
      <ComponentListSettingsModal edit={[{ type: "APITokenMedusaServer" }]} />
    </>
  );
};

export default Settings;
