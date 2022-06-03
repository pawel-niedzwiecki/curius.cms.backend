import React, { useState } from "react";
import { Stack } from "@strapi/design-system/Stack";
import { Link } from "@strapi/design-system/v2/Link";
import { Button } from "@strapi/design-system/Button";
import { Grid, GridItem } from "@strapi/design-system/Grid";
import { Field, FieldLabel, FieldInput } from "@strapi/design-system/Field";
import HookSaveStatus, { DirectionStatus } from "../../../../hooks/hook.saveStatus";
import ComponentSaveStatus from "../../../molecules/ saveStatus/component.saveStatus";
import ComponentDateModificed from "../../../molecules/dateModificed/component.dateModificed";

export default function ComponentEditAPITokenMedusaServer({ data }) {
  const [apiToken, setApiToken] = useState(data?.api ? data?.api : "");
  const { saveStatus, setSaveStatus } = HookSaveStatus(DirectionStatus.pending);
  const [dateModificed, setDateModificed] = useState(data?.dateModificed ? data?.dateModificed : null);

  return (
    <Grid gap={12}>
      <GridItem col={12} padding={4}>
        <Field name="apiToken">
          <Stack spacing={1}>
            <FieldLabel>
              API token{" "}
              <Link isExternal href="https://docs.medusajs.com/api/admin/apps" style={{ marginLeft: "auto" }}>
                Where looking API token ?
              </Link>
            </FieldLabel>
            <FieldInput
              value={apiToken}
              type="text"
              placeholder="Add api token..."
              onChange={(e) => setApiToken(e.target.value)}
            />
          </Stack>
        </Field>
      </GridItem>

      <GridItem col={12} style={{ display: "flex" }} padding={4}>
        <Button fullWidth onClick={() => alert("save")}>
          Save
        </Button>
      </GridItem>

      <GridItem col={12} padding={4}>
        <ComponentSaveStatus data={{ saveStatus, callBack: setSaveStatus }} />
      </GridItem>

      <GridItem col={12} padding={4} style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
        <ComponentDateModificed dateModificed={dateModificed} />
      </GridItem>
    </Grid>
  );
}
