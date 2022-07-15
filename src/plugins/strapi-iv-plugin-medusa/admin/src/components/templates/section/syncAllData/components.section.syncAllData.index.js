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

export default function ComponentSectionSyncAllData() {
  const [history, setHistory] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [syncStatus, setSyncStatus] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const res = await axiosInstance.get("/strapi-iv-plugin-medusa/shop-sync-data-history");
        setHistory(res.data);
      } catch (err) {}
    })();
  }, []);

  console.log(history);

  const entry = {
    description: "succes",
  };
  const entries = [];

  for (let i = 0; i < 5; i++) {
    entries.push({ ...entry, id: i });
  }

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
                  {syncStatus ? (
                    <Status variant="warning">
                      <Typography style={{ display: "flex", alignItems: "center" }}>
                        <Loader small style={{ marginRight: "0.6rem", display: "flex" }} />I sync data with medusa
                        server...
                      </Typography>
                    </Status>
                  ) : (
                    <>
                      <Status variant="success">
                        <Typography>
                          Last sync <Typography fontWeight="bold">22/01/2022</Typography>
                        </Typography>
                      </Status>
                      <Button
                        style={{ marginTop: "1.5rem", width: "100%", justifyContent: "center" }}
                        onClick={() => setIsVisible(true)}
                      >
                        Sync now
                      </Button>
                    </>
                  )}

                  <Dialog onClose={() => setIsVisible(false)} title="Confirmation" isOpen={isVisible}>
                    <DialogBody icon={<ExclamationMarkCircle />}>
                      <Stack spacing={2}>
                        <Flex justifyContent="center">
                          <Typography id="confirm-description">Are you sure, you want to sync now?</Typography>
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
                        <Button
                          variant="succes-light"
                          onClick={() => {
                            setIsVisible(false);
                            setSyncStatus(true);
                          }}
                          startIcon={<Play />}
                        >
                          Start
                        </Button>
                      }
                    />
                  </Dialog>
                </Box>
              </TabPanel>
              <TabPanel>
                <Box color="neutral800" padding={4} background="neutral0">
                  <Table>
                    <Thead>
                      <Tr>
                        <Th>
                          <Typography variant="sigma">ID</Typography>
                        </Th>
                        <Th>
                          <Typography variant="sigma">Status</Typography>
                        </Th>
                        <Th>
                          <Typography variant="sigma">type</Typography>
                        </Th>
                        <Th>
                          <Typography variant="sigma">create</Typography>
                        </Th>
                        <Th>
                          <Typography variant="sigma">update</Typography>
                        </Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {history?.data?.length &&
                        history?.data?.map((entry) => {
                          return (
                            <Tr key={entry.id}>
                              <Td>
                                <Typography textColor="neutral800">{entry.id}</Typography>
                              </Td>
                              <Td>
                                <Typography textColor="neutral800">{entry.status}</Typography>
                              </Td>
                              <Td>
                                <Typography textColor="neutral800">{entry.type}</Typography>
                              </Td>
                              <Td>
                                <Typography textColor="neutral800">{entry.createdAt}</Typography>
                              </Td>
                              <Td>
                                <Typography textColor="neutral800">{entry.updatedAt}</Typography>
                              </Td>
                            </Tr>
                          );
                        })}
                    </Tbody>
                  </Table>
                </Box>
              </TabPanel>
            </TabPanels>
          </TabGroup>
        </Box>
      </ContentLayout>
    </>
  );
}
