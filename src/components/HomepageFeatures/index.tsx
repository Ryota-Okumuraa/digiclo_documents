import type { ReactNode } from 'react';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

type CardItem = {
  title: string;
  image: string;
  textlist: string[];
}

const CardItems: CardItem[] = [
  {
    title: 'レイアウト',
    image: '/img/layout.png',
    textlist: [
      '- 全体は3カラム構成をベースに、視線の流れを意識したUI設計',
      '- ホワイトスペースを活かして、情報の階層を明確に',
      '- レスポンシブ対応で、スマホでも快適に閲覧可能'
    ]
  },
  {
    title: 'コンポーネント',
    image: '/img/components.png',
    textlist: [
      '- ボタンやフォームは共通化されており、デザインの一貫性を担保',
      '- アイテムカード・タグ・フィルターなど再利用性を重視',
      '- 色やフォントサイズもコンポーネント単位で設計'
    ]
  },
  {
    title: 'NG行動',
    image: '/img/ng.png',
    textlist: [
      '- 色が統一されていないボタン配置',
      '- ラベルの無いフォーム入力',
      '- 必要以上のアニメーションや視認性の低下を招く装飾'
    ]
  }
]

const Card: React.FC<CardItem> = ({ title, image, textlist }) => {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img src={useBaseUrl(image)} alt="" />
      </div>
      <div className={styles.content}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <ul className={styles.cardList}>
          {textlist.map((item: string, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}


export default function Overview(): ReactNode {
  return (
    <section className={styles.overview}>
      <div className={styles.inner}>
        <div className={styles.title}>
          <h2>OVERVIEW</h2>
          <span></span>
        </div>
        <p className={styles.text}>Digital Closet は、ユーザーが自分のクローゼットを<br />デジタル上で整理できるアプリです。<br />以下の3つの設計ポリシーに基づき、<br />誰でも簡単に使えるよう設計しています</p>
        <div className={styles.list}>
          {CardItems.map((props, id) => (
            <Card key={id} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
