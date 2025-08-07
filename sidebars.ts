import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  appSidebar: [
    {
      type: 'category',
      label: 'アプリ概要',
      link: {
        type: 'generated-index',
        title: 'アプリ概要',
        description: 'Digital Closet アプリの全体像と機能について',
      },
      collapsed: false,
      items: [
        'app/app',
      ],
    },
  ],
  membersSidebar: [
    {
      type: 'category',
      label: 'メンバー',
      link: {
        type: 'generated-index',
        title: '開発メンバー一覧',
        description: 'プロジェクトの開発メンバー紹介',
      },
      collapsed: false,
      items: [
        'members/members',
      ],
    },
  ],
  designSidebar: [
    {
      type: 'category',
      label: 'デザイン定義',
      link: {
        type: 'generated-index',
        title: 'デザインシステム',
        description: 'UI・UX設計やコンポーネント設計に関する情報',
      },
      collapsed: false,
      items: [
        'design/design',
      ],
    },
  ],
};

export default sidebars;