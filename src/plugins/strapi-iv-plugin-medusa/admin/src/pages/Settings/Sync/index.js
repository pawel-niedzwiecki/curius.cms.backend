import React, { useEffect, useState } from "react";
import ExclamationMarkCircle from "@strapi/icons/ExclamationMarkCircle";
import Trash from "@strapi/icons/Trash";
import { Box } from "@strapi/design-system/Box";
import { Flex } from "@strapi/design-system/Flex";
import { Status } from "@strapi/design-system/Status";
import { Button } from "@strapi/design-system/Button";
import { Stack } from "@strapi/design-system/Stack";
import { Typography } from "@strapi/design-system/Typography";
import { Tabs, Tab, TabGroup, TabPanels, TabPanel } from "@strapi/design-system/Tabs";
import { EmptyStateLayout } from "@strapi/design-system/EmptyStateLayout";
import { BaseHeaderLayout, ContentLayout } from "@strapi/design-system/Layout";
import { IconButton, IconButtonGroup } from "@strapi/design-system/IconButton";
import { Dialog, DialogBody, DialogFooter } from "@strapi/design-system/Dialog";
import { Table, Thead, Tbody, Tr, Td, Th } from "@strapi/design-system/Table";

const Settings = () => {
  const [isVisible, setIsVisible] = useState(false);
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
              <TabPanel>
                <Box color="neutral800" paddingTop={4} background="neutral0">
                  <Status variant="success">
                    <Typography>
                      Last sync <Typography fontWeight="bold">22/01/2022</Typography>
                    </Typography>
                  </Status>
                  <Button
                    style={{ marginTop: "1.5rem", width: "100%", justifyContent: "center" }}
                    onClick={() => setIsVisible(true)}
                  >
                    Click me
                  </Button>
                  <Dialog onClose={() => setIsVisible(false)} title="Confirmation" isOpen={isVisible}>
                    <DialogBody icon={<ExclamationMarkCircle />}>
                      <Stack spacing={2}>
                        <Flex justifyContent="center">
                          <Typography id="confirm-description">Are you sure you want to delete this?</Typography>
                        </Flex>
                      </Stack>
                    </DialogBody>
                    <DialogFooter
                      startAction={
                        <Button onClick={() => setIsVisible(false)} variant="tertiary">
                          Cancel
                        </Button>
                      }
                      endAction={
                        <Button variant="danger-light" startIcon={<Trash />}>
                          Confirm
                        </Button>
                      }
                    />
                  </Dialog>
                </Box>
              </TabPanel>
              <TabPanel>
                <Box color="neutral800" padding={4} background="neutral0">
                  Second panel
                </Box>
              </TabPanel>
            </TabPanels>
          </TabGroup>
        </Box>
      </ContentLayout>
    </>
  );
};

export default Settings;
