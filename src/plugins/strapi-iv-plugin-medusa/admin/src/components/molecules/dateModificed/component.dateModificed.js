import React from "react";
import Information from "@strapi/icons/Information";

import { Tag } from "@strapi/design-system/Tag";
import { DatePicker } from "@strapi/design-system/DatePicker";

export default function ComponentDateModificed({ dateModificed, add }) {
  return (
    <>
      {!dateModificed ? (
        <Tag icon={<Information aria-hidden={true} />}>
          This is your first time 😍 ... add ,,{add}'' and you will happy 😁 from new own shop on medusa
        </Tag>
      ) : (
        <div style={{ width: "100%", display: "block" }}>
          <DatePicker
            name="lastupdate"
            label="Last update"
            onChange={dateModificed}
            selectedDate={dateModificed}
            clearLabel={"Clear the datepicker"}
            onClear={() => dateModificed}
            selectedDateLabel={(formattedDate) => `Date picker, current is ${formattedDate}`}
            disabled
          />
        </div>
      )}
    </>
  );
}
