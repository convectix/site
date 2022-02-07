import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Marketplace.module.scss';
import Layout from '../components/layout';

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
            <div>{item.repo}</div>
          </card>
        ))}
        </catalog>
    </Layout>
  )
}

export async function getStaticProps() {
    const res = await fetch('https://termbin.com/hxfue')
    const json = await res.json()
    return {
      props: {
        catalog: json,
      },
    }
  }