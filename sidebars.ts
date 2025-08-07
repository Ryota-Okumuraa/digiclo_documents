import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  appSidebar: [
    {
      type: 'doc',
      id: 'app/app',
      label: 'アプリ概要',
    },
  ],
  designSidebar: [
    {
      type: 'doc',
      id: 'design/design',
      label: 'デザイン概要',
    },
  ],
  membersSidebar: [
    {
      type: 'doc',
      id: 'members/members',
      label: 'メンバー紹介',
    },
  ],
};

export default sidebars;
