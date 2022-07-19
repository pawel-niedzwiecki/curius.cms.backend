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

import ComponentAlertDataStatus from "../../../molecules/alert/component.alert";
import { DirectionStatus } from "../../../../hooks/hook.dataStatus";

import ComponentListSettingsModalMedusaServer from "./medusaServer";
import ComponentListSettingsModalGeneral from "./general";

export default function ComponentListSettingsModal() {
  return (
    <>
      <ContentLayout>
        <Table>
          <Thead>
            <Tr>
              <Th>
                <Typography variant="beta">Name</Typography>
              </Th>
              <Th style={{ display: "flex", justifyContent: "flex-end" }}>
                <Typography variant="beta">Options</Typography>
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            <ComponentListSettingsModalMedusaServer />
            <ComponentListSettingsModalGeneral />
          </Tbody>
        </Table>
      </ContentLayout>
    </>
  );
}
