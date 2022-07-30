import axiosInstance from "../../src/utils/axiosInstance";

const settings = {
  get: async () => {
    const data = await axiosInstance.get(`/strapi-iv-plugin-medusa/shop-general-setting`);
    return data;
  },
};

export default settings;
