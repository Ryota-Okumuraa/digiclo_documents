import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

export const FirstView = () => {
    return (
        <>
            <section className={styles.firstView} >
                <div className={styles.inner}>
                    <div className={styles.textBox}>
                        <h1>DIGITAl<br />CLOSET</h1>
                        <div className={styles.textWrapper}>
                            <p>Z世代のためのスマートなファッション管理アプリ。</p>
                            <p>洗練された UI とシンプルな操作性で、<br />自分の服を楽しく管理。</p>
                        </div>
                    </div>
                </div>
                <img className={styles.sp} src=
                    {useBaseUrl('/img/first-viewsp.png')} alt="" />
            </section >
            <img className={styles.wave} src={useBaseUrl('/img/Slice1.png')} alt="" />
        </>
    );
}