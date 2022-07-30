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

import Modal from "./modal/modal.body";

export default function ComponentListSettingsModalMedusaServer({ edit }) {
  const [data, setData] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [editDataType, setEditDataType] = useState(null);

  return (
    <>
      <Tr>
        <Td>
          <Typography variant="beta">Config [ medusa.js server ]</Typography>
        </Td>
        <Td>
          <Flex justifyContent="flex-end">
            <IconButton noBorder icon={<Pencil />} aria-label="Edit" onClick={() => setIsVisible(true)} />
          </Flex>
        </Td>
      </Tr>

      {isVisible && (
        <ModalLayout onClose={() => setIsVisible(false)} labelledBy="title">
          <ModalHeader>
            <Typography fontWeight="bold" textColor="neutral800" as="h2" id="title">
              Medusa server
            </Typography>
          </ModalHeader>
          <ModalBody>
            <Modal />
          </ModalBody>
          <ModalFooter
            startActions={
              <Button onClick={() => setIsVisible(false)} variant="tertiary">
                Cancel
              </Button>
            }
            endActions={
              <>
                <Button onClick={() => setIsVisible(false)}>Finish</Button>
              </>
            }
          />
        </ModalLayout>
      )}
    </>
  );
}
