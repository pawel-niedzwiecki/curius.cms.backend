import { Stack } from "@strapi/design-system/Stack";
import { Link } from "@strapi/design-system/v2/Link";
import { Loader } from "@strapi/design-system/Loader";
import { Button } from "@strapi/design-system/Button";
import { Grid, GridItem } from "@strapi/design-system/Grid";
import { Select, Option } from "@strapi/design-system/Select";
import React, { useState, useEffect, useCallback } from "react";
import { Field, FieldLabel } from "@strapi/design-system/Field";
import axiosInstance from "./../../../../../../utils/axiosInstance";
import ComponentAlert from "./../../../../../molecules/alert/component.alert";
import HookDataStatus, { dataStatusEnum } from "./../../../../../../hooks/hook.dataStatus";

export default function Modal() {
  const [data, setData] = useState({
    api_token_medusa_server: null,
    createdAt: null,
    id: 1,
    more_important_data: "Medusa.js",
    updatedAt: null,
    url_medusa_server: null,
  });

  const [saveStatus, setSaveStatus] = useState(false);
  const { dataStatus, setDataStatus } = HookDataStatus(dataStatusEnum.pending);

  useEffect(() => {
    (async () => {
      try {
        const res = await axiosInstance.get("/strapi-iv-plugin-medusa/shop-general-setting");
        setData(res.data);
        setDataStatus(dataStatusEnum.resolve);
      } catch (err) {
        console.log(err, "err");
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
                  required
                  value={data.more_important_data}
                  onChange={(value) => setData({ ...data, more_important_data: value })}
                >
                  <Option value={"Medusa.js"} default>
                    Medusa.js
                  </Option>
                  <Option value={"Strapi.js"}>Strapi.js</Option>
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
