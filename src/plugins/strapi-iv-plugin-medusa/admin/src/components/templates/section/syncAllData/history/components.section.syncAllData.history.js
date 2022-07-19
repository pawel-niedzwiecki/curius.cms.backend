import React, { useEffect, useState } from "react";
import { Box } from "@strapi/design-system/Box";
import { Loader } from "@strapi/design-system/Loader";
import { TabPanel } from "@strapi/design-system/Tabs";
import { Status } from "@strapi/design-system/Status";
import { Typography } from "@strapi/design-system/Typography";
import axiosInstance from "./../../../../../utils/axiosInstance";
import { dataStatusEnum } from "../../../../../hooks/hook.dataStatus";
import { Table, Thead, Tbody, Tr, Td, Th } from "@strapi/design-system/Table";
import { BaseHeaderLayout, ContentLayout } from "@strapi/design-system/Layout";
import { IconButton, IconButtonGroup } from "@strapi/design-system/IconButton";
import { Dialog, DialogBody, DialogFooter } from "@strapi/design-system/Dialog";

export default function ComponentTabForHistory() {
  const [history, setHistory] = useState({ data: null });
  const [historyStatus, setHistoryStatus] = useState(dataStatusEnum.pending);

  useEffect(() => {
    (async () => {
      try {
        const res = await axiosInstance.get("/strapi-iv-plugin-medusa/shop-sync-data-history");
        setHistory(res.data);
        setHistoryStatus(dataStatusEnum.resolve);
      } catch (err) {
        setHistoryStatus(dataStatusEnum.reject);
      }
    })();
  }, []);

  return (
    <TabPanel>
      <Box color="neutral800" padding={4} background="neutral0">
        {historyStatus === dataStatusEnum.pending ? (
          <Loader style={{ margin: "1.5rem auto", display: "flex", justifyContent: "center" }} />
        ) : historyStatus === dataStatusEnum.reject ? (
          <Status variant="danger">
            <Typography style={{ display: "flex", alignItems: "center" }}>
              Upss...😭 server has problem, try refresh website 👌
            </Typography>
          </Status>
        ) : !!history?.data?.length ? (
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
              {!!history?.data?.length &&
                history.data.map((entry) => {
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
        ) : (
          <Status variant="success">
            <Typography style={{ display: "flex", alignItems: "center" }}>
              It is your first time 😍 So you don't have sync history
            </Typography>
          </Status>
        )}
      </Box>
    </TabPanel>
  );
}
