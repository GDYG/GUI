import { defineConfig } from 'dumi';
// 此处更换为自己的仓库名
let base: string | undefined = '/GUI'; // 此处更换为自己的仓库名
let publicPath: string | undefined = '/GUI/'; // 此处更换为自己的仓库名

if (process.env.SITE_BUILD_ENV === 'PREVIEW') {
  base = undefined;
  publicPath = undefined;
}
export default defineConfig({
    title: 'Gnt-ui', // 站点名称
    mode: 'site',
    favicon: 'https://img1.baidu.com/it/u=2480604110,4008147240&fm=26&fmt=auto&gp=0.jpg',
    logo: 'https://img1.baidu.com/it/u=2480604110,4008147240&fm=26&fmt=auto&gp=0.jpg',
    outputPath: 'doc-site', // 输出文件夹
    exportStatic: {}, // 后续会部署到 github pages 直接全部生成静态页面 不走前端路由
    dynamicImport: {}, // 拆包 站点过大时可以优化首屏加载速度
    base,
    publicPath,
    navs: [
      null, // null 值代表保留约定式生成的导航，只做增量配置
      {
        title: 'GitHub',
        path: 'https://github.com/GDYG/GUI',
      }
    ],
});