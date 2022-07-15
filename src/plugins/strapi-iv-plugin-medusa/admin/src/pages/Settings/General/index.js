import React from "react";
import { BaseHeaderLayout } from "@strapi/design-system/Layout";
import ComponentListSettingsModal from "../../../components/templates/section/listSettingsModal";

const SettingsGeneral = () => {
  return (
    <>
      <BaseHeaderLayout
        title="General settings"
        subtitle="General settings for plugin strapi-iv-plugin-medusa"
        as="h2"
      />

      <ComponentListSettingsModal />
    </>
  );
};

export default SettingsGeneral;
