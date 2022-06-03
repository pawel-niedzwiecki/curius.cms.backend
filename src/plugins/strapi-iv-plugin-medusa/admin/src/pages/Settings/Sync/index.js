import React, { useEffect, useState } from "react";

import { Box } from "@strapi/design-system/Box";
import { Flex } from "@strapi/design-system/Flex";
import { Typography } from "@strapi/design-system/Typography";
import { EmptyStateLayout } from "@strapi/design-system/EmptyStateLayout";
import { BaseHeaderLayout, ContentLayout } from "@strapi/design-system/Layout";
import { IconButton, IconButtonGroup } from "@strapi/design-system/IconButton";

import { Table, Thead, Tbody, Tr, Td, Th } from "@strapi/design-system/Table";

const Settings = () => {
  return (
    <>
      <BaseHeaderLayout title="Sync" subtitle="Sync plugin strapi-iv-plugin-medusa with your medusa server" as="h2" />
      <ContentLayout>
        <Box background="neutral0" hasRadius={true} shadow="filterShadow">
          <Flex justifyContent="center" padding={8}>
            <Typography variant="alpha">You have a total of tasks 🚀</Typography>
          </Flex>
        </Box>
      </ContentLayout>
    </>
  );
};

export default Settings;
