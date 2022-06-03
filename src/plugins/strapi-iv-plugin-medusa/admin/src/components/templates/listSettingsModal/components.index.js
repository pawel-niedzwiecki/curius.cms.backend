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

import { EditAPITokenMedusaServer } from "../../orgamis/formsForEditData/index";

export default function ListSettingsModal({ data }) {
  const [isVisible, setIsVisible] = useState(false);
  const [date, setDate] = useState();

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
                <Typography variant="beta">API token medusa server</Typography>
              </Td>
              <Td>
                <Flex justifyContent="flex-end">
                  <IconButton
                    onClick={() => setIsVisible((prev) => !prev)}
                    aria-label="Edit"
                    noBorder
                    icon={<Pencil />}
                  />
                </Flex>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </ContentLayout>

      {isVisible && (
        <ModalLayout onClose={() => setIsVisible((prev) => !prev)} labelledBy="title">
          <ModalHeader>
            <Typography fontWeight="bold" textColor="neutral800" as="h2" id="title">
              API token medusa server
            </Typography>
          </ModalHeader>
          <ModalBody>
            <EditAPITokenMedusaServer />
          </ModalBody>
          <ModalFooter
            startActions={
              <Button onClick={() => setIsVisible((prev) => !prev)} variant="tertiary">
                Cancel
              </Button>
            }
            endActions={
              <>
                <Button onClick={() => setIsVisible((prev) => !prev)}>Finish</Button>
              </>
            }
          />
        </ModalLayout>
      )}
    </>
  );
}
