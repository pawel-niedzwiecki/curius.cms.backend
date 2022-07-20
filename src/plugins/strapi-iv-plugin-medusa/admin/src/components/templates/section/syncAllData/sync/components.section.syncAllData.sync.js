import React, { useEffect, useState } from "react";
import Refresh from "@strapi/icons/Refresh";
import Play from "@strapi/icons/Play";
import ExclamationMarkCircle from "@strapi/icons/ExclamationMarkCircle";
import Trash from "@strapi/icons/Trash";
import { Loader } from "@strapi/design-system/Loader";
import { Box } from "@strapi/design-system/Box";
import { Flex } from "@strapi/design-system/Flex";
import { Stack } from "@strapi/design-system/Stack";
import { Status } from "@strapi/design-system/Status";
import { Button } from "@strapi/design-system/Button";
import { Typography } from "@strapi/design-system/Typography";
import axiosInstance from "./../../../../../utils/axiosInstance";
import { BaseCheckbox } from "@strapi/design-system/BaseCheckbox";
import { dataStatusEnum } from "../../../../../hooks/hook.dataStatus";
import { EmptyStateLayout } from "@strapi/design-system/EmptyStateLayout";
import { Table, Thead, Tbody, Tr, Td, Th } from "@strapi/design-system/Table";
import { BaseHeaderLayout, ContentLayout } from "@strapi/design-system/Layout";
import { IconButton, IconButtonGroup } from "@strapi/design-system/IconButton";
import { Dialog, DialogBody, DialogFooter } from "@strapi/design-system/Dialog";
import { Tabs, Tab, TabGroup, TabPanels, TabPanel } from "@strapi/design-system/Tabs";

export default function ComponentSectionSyncAllData() {
  const [isOpen, setIsOpen] = useState(false);
  const [history, setHistory] = useState({ data: [] });
  const [syncStatus, setSyncStatus] = useState(dataStatusEnum.pending);

  useEffect(() => {
    (async () => {
      try {
        const res = await axiosInstance.get("/strapi-iv-plugin-medusa/shop-sync-data-history");
        setHistory(res.data);
        setSyncStatus(dataStatusEnum.resolve);
      } catch (err) {
        setSyncStatus(dataStatusEnum.reject);
      }
    })();
  }, []);

  const syncData = async () => {
    setIsOpen(false);
    setSyncStatus(dataStatusEnum.pending);
    alert("start");
  };

  return (
    <>
      <TabPanel>
        <Box color="neutral800" paddingTop={4} background="neutral0">
          {syncStatus === dataStatusEnum.pending ||
          !!history.data.filter((item) => item.status === dataStatusEnum.pending).length ? (
            <Status variant="warning">
              <Typography style={{ display: "flex", alignItems: "center" }}>
                <Loader small style={{ marginRight: "0.6rem", display: "flex" }} />I sync data with medusa server...
              </Typography>
            </Status>
          ) : syncStatus === dataStatusEnum.resolve ? (
            <>
              <Status variant="success">
                <Typography>
                  {!history?.data?.length ? (
                    "It is your first time 😍"
                  ) : (
                    <>
                      Last sync
                      <Typography fontWeight="bold"> {history?.data[history?.data?.length - 1]?.createdAt}</Typography>
                    </>
                  )}
                </Typography>
              </Status>
              <Button
                style={{ marginTop: "1.5rem", width: "100%", justifyContent: "center" }}
                onClick={() => setIsOpen(true)}
              >
                Sync now
              </Button>
            </>
          ) : (
            <Status variant="danger">
              <Typography>Upss... Something with server is wrong , try refresh website</Typography>
            </Status>
          )}

          <Dialog onClose={() => setIsOpen(false)} title="Confirmation" isOpen={isOpen}>
            <DialogBody icon={<ExclamationMarkCircle />}>
              <Stack spacing={2}>
                <Flex justifyContent="center">
                  <Typography id="confirm-description">Are you sure, you want to sync now?</Typography>
                </Flex>
              </Stack>
            </DialogBody>
            <DialogFooter
              startAction={
                <Button onClick={() => setIsOpen(false)} variant="tertiary">
                  Cancel
                </Button>
              }
              endAction={
                <Button variant="succes-light" onClick={() => syncData()} startIcon={<Play />}>
                  Start
                </Button>
              }
            />
          </Dialog>
        </Box>
      </TabPanel>
    </>
  );
}
