import React, { useEffect, useState } from "react";

import Pencil from "@strapi/icons/Pencil";

import { Flex } from "@strapi/design-system/Flex";
import { Stack } from "@strapi/design-system/Stack";
import { Link } from "@strapi/design-system/v2/Link";
import { Button } from "@strapi/design-system/Button";
import { Grid, GridItem } from "@strapi/design-system/Grid";
import { DatePicker } from "@strapi/design-system/DatePicker";
import { Typography } from "@strapi/design-system/Typography";
import { IconButton } from "@strapi/design-system/IconButton";
import { Field, FieldLabel, FieldInput } from "@strapi/design-system/Field";
import { Table, Thead, Tbody, Tr, Td, Th } from "@strapi/design-system/Table";
import { BaseHeaderLayout, ContentLayout } from "@strapi/design-system/Layout";
import { ModalLayout, ModalBody, ModalHeader, ModalFooter } from "@strapi/design-system/ModalLayout";

import { ComponentEditURLMedusaServer, ComponentEditAPITokenMedusaServer } from "../../orgamis/formsForEditData/index";
import ComponentAlertDataStatus from "../../molecules/ alertDataStatus/component.alertDataStatus";
import { DirectionStatus } from "../../../hooks/hook.dataStatus";

export default function ComponentListSettingsModal({ edit }) {
  const [data, setData] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [editDataType, setEditDataType] = useState(null);

  return (
    <>
      <ContentLayout>
        <Table>
          <Thead>
            <Tr>
              <Th>
                <Typography variant="beta">Name</Typography>
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>
                <Typography variant="beta">URL medusa server</Typography>
              </Td>
              <Td>
                <Flex justifyContent="flex-end">
                  <IconButton
                    noBorder
                    icon={<Pencil />}
                    aria-label="Edit"
                    onClick={() => {
                      setIsVisible(true);
                      setEditDataType("editURLMedusaServer");
                    }}
                  />
                </Flex>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Typography variant="beta">API token medusa server</Typography>
              </Td>
              <Td>
                <Flex justifyContent="flex-end">
                  <IconButton
                    noBorder
                    aria-label="Edit"
                    icon={<Pencil />}
                    onClick={() => {
                      setIsVisible(true);
                      setEditDataType("editAPITokenMedusaServer");
                    }}
                  />
                </Flex>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </ContentLayout>{" "}
      {isVisible && (
        <ModalLayout
          onClose={() => {
            setIsVisible(false);
            setEditDataType(null);
          }}
          labelledBy="title"
        >
          <ModalHeader>
            <Typography fontWeight="bold" textColor="neutral800" as="h2" id="title">
              {editDataType === "editURLMedusaServer" && "Edit url medusa server"}
              {editDataType === "editAPITokenMedusaServer" && "Edit api token medusa server"}
            </Typography>
          </ModalHeader>
          <ModalBody>
            {!editDataType && (
              <ComponentAlertDataStatus data={{ dataStatus: DirectionStatus.reject, callBack: setEditDataType }} />
            )}

            {editDataType === "editURLMedusaServer" && <ComponentEditURLMedusaServer />}
            {editDataType === "editAPITokenMedusaServer" && <ComponentEditAPITokenMedusaServer />}
          </ModalBody>
          <ModalFooter
            startActions={
              <Button
                onClick={() => {
                  setIsVisible(false);
                  setEditDataType(null);
                }}
                variant="tertiary"
              >
                Cancel
              </Button>
            }
            endActions={
              <>
                <Button
                  onClick={() => {
                    setIsVisible(false);
                    setEditDataType(null);
                  }}
                >
                  Finish
                </Button>
              </>
            }
          />
        </ModalLayout>
      )}
    </>
  );
}
