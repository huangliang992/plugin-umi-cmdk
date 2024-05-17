// @ts-nocheck
// This file is generated by Umi automatically
// DO NOT CHANGE IT MANUALLY!
import * as Plugin_0 from '/home/huangliang/plugin-umi-cmdk/example/src/app.ts';
import * as Plugin_1 from '@@/core/helmet.ts';
import * as Plugin_2 from '/home/huangliang/plugin-umi-cmdk/example/src/.umi/plugin-access/runtime.tsx';
import * as Plugin_3 from '/home/huangliang/plugin-umi-cmdk/example/src/.umi/plugin-initialState/runtime.tsx';
import * as Plugin_4 from '/home/huangliang/plugin-umi-cmdk/example/src/.umi/plugin-layout/runtime.tsx';
import * as Plugin_5 from '/home/huangliang/plugin-umi-cmdk/example/src/.umi/plugin-model/runtime.tsx';
import * as Plugin_6 from '/home/huangliang/plugin-umi-cmdk/example/src/.umi/plugin-huangl250/runtime.tsx';
import { PluginManager } from 'umi';

function __defaultExport (obj) {
  if (obj.default) {
    return typeof obj.default === 'function' ? obj.default() :  obj.default
  }
  return obj;
}
export function getPlugins() {
  return [
    {
      apply: __defaultExport(Plugin_0),
      path: process.env.NODE_ENV === 'production' ? void 0 : '/home/huangliang/plugin-umi-cmdk/example/src/app.ts',
    },
    {
      apply: Plugin_1,
      path: process.env.NODE_ENV === 'production' ? void 0 : '@@/core/helmet.ts',
    },
    {
      apply: Plugin_2,
      path: process.env.NODE_ENV === 'production' ? void 0 : '/home/huangliang/plugin-umi-cmdk/example/src/.umi/plugin-access/runtime.tsx',
    },
    {
      apply: Plugin_3,
      path: process.env.NODE_ENV === 'production' ? void 0 : '/home/huangliang/plugin-umi-cmdk/example/src/.umi/plugin-initialState/runtime.tsx',
    },
    {
      apply: Plugin_4,
      path: process.env.NODE_ENV === 'production' ? void 0 : '/home/huangliang/plugin-umi-cmdk/example/src/.umi/plugin-layout/runtime.tsx',
    },
    {
      apply: Plugin_5,
      path: process.env.NODE_ENV === 'production' ? void 0 : '/home/huangliang/plugin-umi-cmdk/example/src/.umi/plugin-model/runtime.tsx',
    },
    {
      apply: Plugin_6,
      path: process.env.NODE_ENV === 'production' ? void 0 : '/home/huangliang/plugin-umi-cmdk/example/src/.umi/plugin-huangl250/runtime.tsx',
    },
  ];
}

export function getValidKeys() {
  return ['patchRoutes','patchClientRoutes','modifyContextOpts','modifyClientRenderOpts','rootContainer','innerProvider','i18nProvider','accessProvider','dataflowProvider','outerProvider','render','onRouteChange','antd','getInitialState','layout','qiankun','request','huangl250',];
}

let pluginManager = null;

export function createPluginManager() {
  pluginManager = PluginManager.create({
    plugins: getPlugins(),
    validKeys: getValidKeys(),
  });


  return pluginManager;
}

export function getPluginManager() {
  return pluginManager;
}
