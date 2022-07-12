import React, { useState } from "react";
import { Stack } from "@strapi/design-system/Stack";
import { Link } from "@strapi/design-system/v2/Link";
import { Button } from "@strapi/design-system/Button";
import { Grid, GridItem } from "@strapi/design-system/Grid";
import { Field, FieldLabel, FieldInput } from "@strapi/design-system/Field";
import hookDataStatus, { dataStatus } from "../../../../hooks/hook.dataStatus";

import ComponentAlert from "../../../molecules/alert/component.alert";

export default function ComponentEditURLMedusaServer() {
  const [url, setUrl] = useState("");
  const [token, setToken] = useState("");
  const [firstTime, setFirstTime] = useState(true);
  const { status, setStatus } = hookDataStatus(dataStatus.pending);

  return (
    <Grid gap={12}>
      <GridItem col={12} paddingTop={4}>
        {firstTime && (
          <ComponentAlert
            data={{
              callBack: setFirstTime,
              status: dataStatus.resolve,
              description: "This is your first time 😍 ... add data for medusa.js server and you will happy 😁",
            }}
          />
        )}
      </GridItem>

      <GridItem col={12} paddingTop={4}>
        <Field name="urlMedusaServer">
          <Stack spacing={1}>
            <FieldLabel>
              Add url medusa server
              <Link
                isExternal
                style={{ marginLeft: "auto" }}
                href="https://docs.medusajs.com/how-to/deploying-on-heroku"
              >
                Where looking url medusa server ?
              </Link>
            </FieldLabel>
            <FieldInput value={url} type="text" placeholder="url..." onChange={(e) => setUrl(e.target.value)} />
          </Stack>
        </Field>
      </GridItem>

      <GridItem col={12} paddingTop={4}>
        <Field name="apiToken">
          <Stack spacing={1}>
            <FieldLabel>
              Add API token
              <Link isExternal href="https://docs.medusajs.com/api/admin/apps" style={{ marginLeft: "auto" }}>
                Where looking API token ?
              </Link>
            </FieldLabel>
            <FieldInput value={token} type="text" placeholder="token..." onChange={(e) => setToken(e.target.value)} />
          </Stack>
        </Field>
      </GridItem>

      <GridItem col={12} style={{ display: "flex" }} paddingTop={4}>
        <Button fullWidth onClick={() => alert("save")}>
          Save
        </Button>
      </GridItem>
    </Grid>
  );
}
