import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Marketplace.module.scss';
import Layout from '../components/layout';
import Link from 'next/link';

export default function Catalog({catalog}) {
  return (
    <Layout>
        <h1>Marketplace</h1>
        <catalog className={styles.catalog}>
        {catalog.map((item) => (
          <card key={item.title}>
            <img src={item.icon} width={100} />
            <h2>{item.title}</h2>
            <p className="description">{item.description}</p>
            <div>Price: 399 ₽ / month<br/><br/>
            <Link href="mailto:convectix@yandex.ru?subject=Order virtual machine">Order</Link>
            </div>
          </card>
        ))}
        </catalog>
    </Layout>
  )
}

export async function getStaticProps() {
    const res = await fetch('https://termbin.com/kyf7')
    const json = await res.json()
    return {
      props: {
        catalog: json,
      },
    }
  }
