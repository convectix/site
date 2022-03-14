import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/layout.module.scss';

export default function Layout({ children }) {
    return (
    <>
    <Head>
        <meta charset="UTF-8" />
        <title>Convectix</title>
        <meta name="description" content="Telecom and cloud company" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
    </Head>
    <header className={styles.header}>
        <Link href="/">
            <img src="/convectix.svg" alt="Convectix" className={styles.logo} />
        </Link>
        <description>Telecom and cloud company</description>
        <nav>
            <Link href="/marketplace">Marketplace</Link>
        </nav>
    </header>
    <main className={styles.main}>
        {children}
    </main>
    <footer className={styles.footer}>
        <p>
            &copy; SIA Convectix Europe 2021 &nbsp;&nbsp; <a href="mailto:info@convectix.com">Contact us</a>
        </p>
        <p>
            ООО &laquo;Конвектикс&raquo; ИНН 7720857881 ОГРН 1217700597377
        </p>
    </footer>
    </>
  )
}