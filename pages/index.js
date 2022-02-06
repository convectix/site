import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout';
import Projects from '../components/projects';
import Team from '../components/team';
import Community from '../components/community';

export default function Home() {
  return (
    <Layout>
        <Projects/>
        <Community/>
        <Team/>
    </Layout>
  )
}
