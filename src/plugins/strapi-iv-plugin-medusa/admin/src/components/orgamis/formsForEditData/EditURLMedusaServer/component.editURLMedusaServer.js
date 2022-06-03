import React, { useState } from "react";
import { Stack } from "@strapi/design-system/Stack";
import { Link } from "@strapi/design-system/v2/Link";
import { Button } from "@strapi/design-system/Button";
import { Grid, GridItem } from "@strapi/design-system/Grid";
import { Field, FieldLabel, FieldInput } from "@strapi/design-system/Field";
import HookDataStatus, { DirectionStatus } from "../../../../hooks/hook.dataStatus";
import ComponentDateModificed from "../../../molecules/dateModificed/component.dateModificed";
import ComponentAlertDataStatus from "../../../molecules/ alertDataStatus/component.alertDataStatus";

export default function ComponentEditURLMedusaServer({ data }) {
  const [urlMedusaServer, setUrlMedusaServer] = useState(data?.url ? data?.url : "");
  const { dataStatus, setDataStatus } = HookDataStatus(DirectionStatus.pending);
  const [dateModificed, setDateModificed] = useState(data?.dateModificed ? data?.dateModificed : null);

  return (
    <Grid gap={12}>
      <GridItem col={12} padding={4}>
        <Field name="urlMedusaServer">
          <Stack spacing={1}>
            <FieldLabel>
              URL medusa server
              <Link
                isExternal
                style={{ marginLeft: "auto" }}
                href="https://docs.medusajs.com/how-to/deploying-on-heroku"
              >
                Where looking url medusa server ?
              </Link>
            </FieldLabel>
            <FieldInput
              value={urlMedusaServer}
              type="text"
              placeholder="Add api token..."
              onChange={(e) => setUrlMedusaServer(e.target.value)}
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
        <ComponentAlertDataStatus data={{ dataStatus, callBack: setDataStatus }} />
      </GridItem>

      <GridItem col={12} padding={4} style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
        <ComponentDateModificed dateModificed={dateModificed} add="URL MEDUSA SERVER" />
      </GridItem>
    </Grid>
  );
}
