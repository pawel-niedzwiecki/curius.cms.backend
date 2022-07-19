import { Stack } from "@strapi/design-system/Stack";
import { Link } from "@strapi/design-system/v2/Link";
import { Loader } from "@strapi/design-system/Loader";
import { Button } from "@strapi/design-system/Button";
import { Grid, GridItem } from "@strapi/design-system/Grid";
import axiosInstance from "./../../../../../../utils/axiosInstance";
import React, { useState, useEffect, useCallback } from "react";

import { Select, Option } from "@strapi/design-system/Select";

import { Field, FieldLabel, FieldInput } from "@strapi/design-system/Field";
import HookDataStatus, { dataStatusEnum } from "./../../../../../../hooks/hook.dataStatus";

import ComponentAlert from "./../../../../../molecules/alert/component.alert";

export default function Modal() {
  const [url, setUrl] = useState("");
  const [token, setToken] = useState("");
  const [firstTime, setFirstTime] = useState(false);
  const [saveStatus, setSaveStatus] = useState(false);
  const { dataStatus, setDataStatus } = HookDataStatus(dataStatusEnum.pending);

  const [value, setValue] = useState("Medusa.js");
  const [error, toggleError] = useState();
  const [disabled, toggleDisabled] = useState();

  useEffect(() => {
    (async () => {
      try {
        const res = await axiosInstance.get("/strapi-iv-plugin-medusa/shop-general-setting");
        console.log(res.data);
        if (!!res?.data?.url_medusa_server) setUrl(res.data.url_medusa_server);
        if (!!res?.data?.api_token_medusa_server) setToken(res.data.api_token_medusa_server);
        if (!res?.data?.url_medusa_server?.length || !res?.data?.api_token_medusa_server?.length) setFirstTime(true);
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
        await axiosInstance.put("/strapi-iv-plugin-medusa/shop-general-setting", { apiToken: token, url });
        setFirstTime(false);
        setSaveStatus(true);
        setDataStatus(dataStatusEnum.resolve);
        setTimeout(() => setSaveStatus(false), 1500);
      } catch (err) {
        setDataStatus(dataStatusEnum.reject);
      }
    })();
  }, [url, token]);

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

      {dataStatus === dataStatusEnum.resolve && (
        <>
          <GridItem col={12} paddingTop={4}>
            <Field name="urlMedusaServer">
              <Stack spacing={1}>
                <FieldLabel>
                  Where is more important data?
                  <Link isExternal style={{ marginLeft: "auto" }} href="https://uxu.pl">
                    Why i must select more important data ?
                  </Link>
                </FieldLabel>
                <Select
                  id="select1"
                  required
                  placeholder="Your example"
                  onClear={() => setValue(undefined)}
                  clearLabel="Clear the meal"
                  error={error}
                  value={value}
                  onChange={setValue}
                  disabled={disabled}
                >
                  <Option value={"Medusa.js"} default>
                    Medusa.js
                  </Option>
                  <Option value={"Strapi.js"} default>
                    Strapi.js
                  </Option>
                </Select>
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
