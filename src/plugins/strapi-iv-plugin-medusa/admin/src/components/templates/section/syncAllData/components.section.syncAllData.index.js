import React, { useEffect, useState } from "react";
import Refresh from "@strapi/icons/Refresh";
import Play from "@strapi/icons/Play";
import ExclamationMarkCircle from "@strapi/icons/ExclamationMarkCircle";
import Trash from "@strapi/icons/Trash";
import { Loader } from "@strapi/design-system/Loader";
import { Box } from "@strapi/design-system/Box";
import { Flex } from "@strapi/design-system/Flex";
import { Status } from "@strapi/design-system/Status";
import { Button } from "@strapi/design-system/Button";
import { Stack } from "@strapi/design-system/Stack";
import { BaseCheckbox } from "@strapi/design-system/BaseCheckbox";
import { Typography } from "@strapi/design-system/Typography";
import axiosInstance from "./../../../../utils/axiosInstance";
import { Tabs, Tab, TabGroup, TabPanels, TabPanel } from "@strapi/design-system/Tabs";
import { EmptyStateLayout } from "@strapi/design-system/EmptyStateLayout";
import { BaseHeaderLayout, ContentLayout } from "@strapi/design-system/Layout";
import { IconButton, IconButtonGroup } from "@strapi/design-system/IconButton";
import { Dialog, DialogBody, DialogFooter } from "@strapi/design-system/Dialog";
import { Table, Thead, Tbody, Tr, Td, Th } from "@strapi/design-system/Table";

import { dataStatusEnum } from "../../../../hooks/hook.dataStatus";

import ComponentTabForHistory from "./history/components.section.syncAllData.history";
import ComponentTabForSyncData from "./sync/components.section.syncAllData.sync";

export default function ComponentSectionSyncAllData() {
  return (
    <>
      <BaseHeaderLayout title="Sync" subtitle="You cann sync all data now with medusa serwer" as="h2" />
      <ContentLayout>
        <Box padding={8} background="neutral0">
          <TabGroup label="Some stuff for the label" id="tabs" variant="simple">
            <Tabs>
              <Tab>Sync now</Tab>
              <Tab>History</Tab>
            </Tabs>
            <TabPanels>
              <ComponentTabForSyncData />
              <ComponentTabForHistory />
            </TabPanels>
          </TabGroup>
        </Box>
      </ContentLayout>
    </>
  );
}
