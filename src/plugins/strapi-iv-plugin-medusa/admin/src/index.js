import pluginId from "./pluginId";
import pluginPkg from "../../package.json";
import PluginIcon from "./components/atoms/pluginIcon";
import Initializer from "./components/atoms/initializer";
import { prefixPluginTranslations } from "@strapi/helper-plugin";

const name = pluginPkg.strapi.name;

export default {
  register(app) {
    app.addMenuLink({
      to: `/plugins/${pluginId}`,
      icon: PluginIcon,
      intlLabel: {
        id: `${pluginId}.plugin.name`,
        defaultMessage: `Shop medusa`,
      },
      Component: async () => {
        const component = await import(/* webpackChunkName: "[request]" */ "./pages/App");

        return component;
      },
      permissions: [
        // Uncomment to set the permissions of the plugin here
        // {
        //   action: '', // the action name should be plugin::plugin-name.actionType
        //   subject: null,
        // },
      ],
    });

    app.createSettingSection(
      {
        id: pluginId,
        intlLabel: {
          id: `${pluginId}.plugin.name`,
          defaultMessage: "Shop medusa",
        },
      },
      [
        {
          intlLabel: {
            id: `${pluginId}.plugin.name`,
            defaultMessage: "General settings",
          },
          id: "settings",
          to: `/settings/general/${pluginId}`,
          Component: async () => {
            return import("./pages/Settings/General");
          },
        },
        {
          intlLabel: {
            id: `${pluginId}.plugin.name`,
            defaultMessage: "Sync",
          },
          id: "settings",
          to: `/settings/sync/${pluginId}`,
          Component: async () => {
            return import("./pages/Settings/Sync");
          },
        },
      ]
    );

    app.registerPlugin({
      id: pluginId,
      initializer: Initializer,
      isReady: false,
      name,
    });
  },

  bootstrap(app) {},

  async registerTrads({ locales }) {
    const importedTrads = await Promise.all(
      locales.map((locale) => {
        return import(`./translations/${locale}.json`)
          .then(({ default: data }) => {
            return {
              data: prefixPluginTranslations(data, pluginId),
              locale,
            };
          })
          .catch(() => {
            return {
              data: {},
              locale,
            };
          });
      })
    );

    return Promise.resolve(importedTrads);
  },
};
