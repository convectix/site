import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
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
      <header>
            <img src="/convectix.svg" alt="Convectix" id="logo" />
            <description>Telecom and cloud company</description>
        </header>
        <section id="projects">
            <div style={{background: "#28AAE2"}}>
                <h3><a href="https://www.bsdstore.ru/en/about.html">CBSD</a></h3>
                <p>Yet one more wrapper around jail, bhyve and XEN on FreeBSD platform.</p>
                <a href="https://github.com/cbsd/cbsd">GitHub</a>
                <a href="https://cbsd.io">Docs</a>
            </div>
            <div style={{background: "#00A89E"}}>
                <h3><a href="https://myb.convectix.com">MyB</a></h3>
                <p>The most simplified API for creating and destroying cloud virtual machines.</p>
            </div>
            <div style={{background: "#19BCA4"}}>
                <h3>nubectl</h3>
                <p>Cloud control CLI utility for human beings.</p>
                <a href="https://github.com/bitcoin-software/nubectl">GitHub</a>
            </div>
            <div style={{background: "#39B54A"}}>
                <h3><a href="https://clonos.convectix.com">ClonOS</a></h3>
                <p>Turnkey Open Source platform based on FreeBSD and the CBSD framework.</p>
                <a href="https://github.com/clonos/">GitHub</a>
            </div>
            <div style={{background: "#8DC63F"}}>
                <h3><a href="https://k8s-bhyve.convectix.com">k8s-bhyve</a></h3>
                <p>Build K8S on top of bhyve hypervisor.</p>
            </div>
            <div style={{background: "#FFCE07"}}>
                <h3><a href="https://t.me/bhyve_bot">bhyve_bot</a></h3>
                <p>Virtual machines right in Telegram.</p>
            </div>
            <div style={{background: "#F98C41"}}>
                <h3><a href="https://run-bhyve.convectix.com">run-bhyve</a></h3>
                <p>bhyve public vm hosting.</p>
                <a href="https://github.com/run-bhyve">GitHub</a>
            </div>
            <div style={{background: "#F95C41"}}>
                <h3><a href="https://www.bitclouds.sh">BitClouds</a></h3>
                <p>Programmable VPS platform where you can have any instance for up to one satoshi per minute.</p>
                <a href="https://github.com/bitcoin-software/bitclouds.sh">GitHub</a>
            </div>
        </section>
        <section id="community">
            <h2>Community</h2>
            <ul>
                <li>MyBee &mdash; <a href="https://habr.com/en/post/569226">FreeBSD OS and hypervisor bhyve as private cloud</a></li>
                <li><a href="https://www.bsdstore.ru/en/articles.html">Articles</a> by Oleg Ginzburg</li>
            </ul>
        </section>
        <section id="team">
            <h2>Team</h2>
            <ul>
                <li>Ramzan Bekbulatov</li>
                <li>Edgar Blaževičs</li>
                <li>Edmunds Blaževičs</li>
                <li>Oleg Ginzburg</li>
                <li>Egor Kuzmichev</li>
                <li>Wesley Mouedine Assaby</li>
                <li>Kirills Parfjonovs</li>
            </ul>
        </section>
        <footer>
            &copy; SIA Convectix Europe 2021 &nbsp;&nbsp; <a href="mailto:info@convectix.com">Contact us</a>
        </footer>
    </div>
  )
}
