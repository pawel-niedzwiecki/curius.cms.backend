import React, { memo, useState, useEffect } from "react";

import taskRequests from "../../api/task";

import { Box } from "@strapi/design-system/Box";
import { Flex } from "@strapi/design-system/Flex";
import { Typography } from "@strapi/design-system/Typography";
import { EmptyStateLayout } from "@strapi/design-system/EmptyStateLayout";
import { BaseHeaderLayout, ContentLayout } from "@strapi/design-system/Layout";

import { Illo } from "../../components/Illo";

const HomePage = () => {
  const [taskCount, setTaskCount] = useState(0);

  useEffect(() => {
    taskRequests.getTaskCount().then((res) => {
      setTaskCount(res.data);
    });
  }, [setTaskCount]);

  return (
    <>
      <BaseHeaderLayout title="Todo Plugin" subtitle="Discover the number of tasks you have in your project" as="h2" />
      <ContentLayout>
        {taskCount === 0 && <EmptyStateLayout icon={<Illo />} content="You don't have any tasks yet..." />}
        {taskCount > 0 && (
          <Box background="neutral0" hasRadius={true} shadow="filterShadow">
            <Flex justifyContent="center" padding={8}>
              <Typography variant="alpha">You have a total of {taskCount} tasks 🚀</Typography>
            </Flex>
          </Box>
        )}
      </ContentLayout>
    </>
  );
};

export default memo(HomePage);
