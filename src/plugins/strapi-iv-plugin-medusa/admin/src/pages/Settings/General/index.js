import React, { useEffect, useState } from "react";

import { BaseHeaderLayout } from "@strapi/design-system/Layout";

import ComponentListSettingsModal from "../../../components/templates/listSettingsModal";
import settings from "../../../api/settings";

const Settings = () => {
  useEffect(() => {
    const test = settings.get();
    console.log(test.then((d) => console.log(d)));
  }, []);

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
