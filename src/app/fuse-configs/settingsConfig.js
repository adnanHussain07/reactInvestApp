const settingsConfig = {
  layout: {
    style: 'layout1', // layout1 layout2 layout3
    config: {}, // checkout default layout configs at app/fuse-layouts for example  app/fuse-layouts/layout1/Layout1Config.js
  },
  customScrollbars: true,
  direction: 'ltr', // rtl, ltr
  theme: {
    main: 'greyDark', //'default',
    navbar: 'greyDark',
    toolbar: 'greyDark', // 'mainThemeLight',
    footer: 'greyDark', // 'mainThemeDark',
  },
};

export default settingsConfig;
