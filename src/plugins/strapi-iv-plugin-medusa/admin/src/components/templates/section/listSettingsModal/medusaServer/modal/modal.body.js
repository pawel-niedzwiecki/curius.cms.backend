import { Stack } from "@strapi/design-system/Stack";
import { Link } from "@strapi/design-system/v2/Link";
import { Loader } from "@strapi/design-system/Loader";
import { Button } from "@strapi/design-system/Button";
import { Grid, GridItem } from "@strapi/design-system/Grid";
import axiosInstance from "./../../../../../../utils/axiosInstance";
import React, { useState, useEffect, useCallback } from "react";
import { Field, FieldLabel, FieldInput } from "@strapi/design-system/Field";
import HookDataStatus, { dataStatusEnum } from "./../../../../../../hooks/hook.dataStatus";

import ComponentAlert from "./../../../../../molecules/alert/component.alert";

export default function Modal() {
  const [data, setData] = useState({
    id: 1,
    createdAt: null,
    updatedAt: null,
    url_medusa_server: null,
    api_token_medusa_server: null,
    more_important_data: "Medusa.js",
  });

  const [firstTime, setFirstTime] = useState(false);
  const [saveStatus, setSaveStatus] = useState(false);
  const { dataStatus, setDataStatus } = HookDataStatus(dataStatusEnum.pending);

  useEffect(() => {
    (async () => {
      try {
        const res = await axiosInstance.get("/strapi-iv-plugin-medusa/shop-general-setting");

        setData(res.data);
        if (!res?.data?.createdAt) setFirstTime(true);
        setDataStatus(dataStatusEnum.resolve);
      } catch (err) {
        setDataStatus(dataStatusEnum.reject);
      }
    })();
  }, []);

  const updateData = useCallback(() => {
    setDataStatus(dataStatusEnum.pending);
    (async () => {
      try {
        await axiosInstance.put("/strapi-iv-plugin-medusa/shop-general-setting", {
          url: data.url_medusa_server,
          apiToken: data.api_token_medusa_server,
          importantData: data.more_important_data,
        });
        setFirstTime(false);
        setSaveStatus(true);
        setDataStatus(dataStatusEnum.resolve);
        setTimeout(() => setSaveStatus(false), 1500);
      } catch (err) {
        setDataStatus(dataStatusEnum.reject);
      }
    })();
  }, [data]);

  return (
    <Grid gap={12}>
      {dataStatus === dataStatusEnum.pending && (
        <GridItem col={12} paddingBottom={4} style={{ display: "flex", paddingBottom: "4rem", paddingTop: "4rem" }}>
          <Loader style={{ margin: "0 auto" }} />
        </GridItem>
      )}

      <GridItem col={12}>
        <ComponentAlert
          data={{
            status: dataStatusEnum.resolve,
            display: saveStatus,
            description: "Saved",
          }}
        />
      </GridItem>

      <GridItem col={12}>
        <ComponentAlert
          data={{
            status: dataStatusEnum.reject,
            display: dataStatus === dataStatusEnum.reject,
            description: "Upss...😭 server has problem, try refresh website 👌",
          }}
        />
      </GridItem>

      <GridItem col={12}>
        <ComponentAlert
          data={{
            status: dataStatusEnum.resolve,
            callBack: () => setFirstTime(false),
            display: firstTime && dataStatus === dataStatusEnum.resolve,
            description: "This is your first time 😍 ... add data for medusa.js server and you will happy 😁",
          }}
        />
      </GridItem>

      {dataStatus === dataStatusEnum.resolve && (
        <>
          <GridItem col={12} paddingTop={4}>
            <Field name="urlMedusaServer">
              <Stack spacing={1}>
                <FieldLabel>
                  Add url medusa server
                  <Link
                    isExternal
                    style={{ marginLeft: "auto" }}
                    href="https://docs.medusajs.com/deployments/server/deploying-on-heroku"
                  >
                    Where looking url medusa server ?
                  </Link>
                </FieldLabel>
                <FieldInput
                  type="text"
                  placeholder="url..."
                  value={data.url_medusa_server}
                  onChange={(e) => setData({ ...data, url_medusa_server: e.target.value })}
                />
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
                  type="text"
                  placeholder="token..."
                  value={data.api_token_medusa_server}
                  onChange={(e) => setData({ ...data, api_token_medusa_server: e.target.value })}
                />
              </Stack>
            </Field>
          </GridItem>
          <GridItem col={12} style={{ display: "flex" }} paddingTop={4}>
            <Button fullWidth onClick={() => updateData()}>
              Save
            </Button>
          </GridItem>
        </>
      )}
    </Grid>
  );
}
