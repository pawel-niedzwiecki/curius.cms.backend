import React, { useState, useEffect } from "react";
import { Stack } from "@strapi/design-system/Stack";
import { Link } from "@strapi/design-system/v2/Link";
import { Loader } from "@strapi/design-system/Loader";
import { Button } from "@strapi/design-system/Button";
import { Grid, GridItem } from "@strapi/design-system/Grid";
import axiosInstance from "./../../../../utils/axiosInstance";
import { Field, FieldLabel, FieldInput } from "@strapi/design-system/Field";
import HookDataStatus, { dataStatusEnum } from "../../../../hooks/hook.dataStatus";

import ComponentAlert from "../../../molecules/alert/component.alert";

export default function ComponentEditURLMedusaServer() {
  const [url, setUrl] = useState("");
  const [token, setToken] = useState("");
  const [firstTime, setFirstTime] = useState(false);
  const { dataStatus, setDataStatus } = HookDataStatus(dataStatusEnum.pending);

  useEffect(() => {
    (async () => {
      try {
        const res = await axiosInstance.get("/strapi-iv-plugin-medusa/shop-general-setting");
        if (!!res?.data?.url_medusa_server) setUrl(res.data.url_medusa_server);
        if (!!res?.data?.api_token_medusa_server) setToken(res.data.api_token_medusa_server);
        if (!res?.data?.url_medusa_server?.length || !res?.data?.api_token_medusa_server?.length) setFirstTime(true);
        setDataStatus(dataStatusEnum.resolve);
      } catch (err) {
        setDataStatus(dataStatusEnum.reject);
      }
    })();
  }, []);

  return (
    <Grid gap={12}>
      {dataStatus === dataStatusEnum.pending && (
        <GridItem col={12} padding={4} style={{ display: "flex" }}>
          <Loader style={{ margin: "0 auto" }} />
        </GridItem>
      )}
      {dataStatus === dataStatusEnum.reject && (
        <GridItem col={12} paddingTop={4}>
          <ComponentAlert
            data={{
              callBack: setFirstTime,
              status: dataStatusEnum.reject,
              description: "Upss...😭 server has problem, try refresh website 👌",
            }}
          />
        </GridItem>
      )}
      {dataStatus === dataStatusEnum.resolve && (
        <>
          <GridItem col={12} paddingTop={4}>
            {firstTime && (
              <ComponentAlert
                data={{
                  callBack: setFirstTime,
                  status: dataStatusEnum.resolve,
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
                <FieldInput
                  value={token}
                  type="text"
                  placeholder="token..."
                  onChange={(e) => setToken(e.target.value)}
                />
              </Stack>
            </Field>
          </GridItem>
          <GridItem col={12} style={{ display: "flex" }} paddingTop={4}>
            <Button fullWidth onClick={() => alert("save")}>
              Save
            </Button>
          </GridItem>
        </>
      )}
    </Grid>
  );
}
