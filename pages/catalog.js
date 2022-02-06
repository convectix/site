import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Catalog.module.scss'
import Layout from '../components/layout';

export default function Catalog({catalog}) {
  return (
    <Layout>
        <h1>Catalog</h1>
        <catalog className={styles.catalog}>
        {catalog.map((item) => (
            <card>
                <p>{item.title}</p>
                <img src={item.icon} width={100} />
                <p>{item.repo}</p>
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