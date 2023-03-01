import Head from 'next/head';
import styles from './layout.module.css';

export default function Layout({ children, page }) {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="Surf Forecast" />
                <title>
                    St-Clair Forecast ~ by EB
                </title>
            </Head>
            <main>
                {children}
            </main>
            <footer className={styles.footer}>
                Made by
                <span className={styles.EB}>
                    eb
                </span>
                <button className={styles.toPageTopBtn}>
                    <a href='#'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-arrow-up-circle" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z" />
                        </svg>
                    </a>
                </button>
            </footer>
        </>
    )
}