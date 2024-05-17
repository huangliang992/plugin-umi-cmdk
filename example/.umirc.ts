import { defineConfig } from '@umijs/max';
import { join } from 'path';

export default defineConfig({
  plugins: [join(__dirname, '../src/index.ts')],
  huangl250: {
    keyFilter: 'meta.k',
    searchPlaceholder: '搜索菜单',
    empty: '找不到搜索结果',
    suggestionKeys: [],
    groups: [],
  },
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max',
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: '权限演示',
      path: '/access',
      component: './Access',
    },
    {
      name: ' CRUD 示例',
      path: '/table',
      component: './Table',
    },
  ],
  npmClient: 'yarn',
});
