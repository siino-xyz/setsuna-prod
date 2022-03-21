import { client } from '../libs/client'
import Link from 'next/link'
import Moment from 'react-moment'

import Box from '@mui/material/Box';

import Header from '../components/header'
import Footer from '../components/footer'
import Service from '../components/service'
import Layout from '../components/layout'
import Detail from '../components/detail'
import Profile from '../components/profile'
import SectionTitle from '../components/sectiontitle'
import Form from '../components/contact'
import HeroHeader from '../components/heroheader'
import BlogHeader from '../components/blogheader'

export default function Home() {
  return (
    <>
      <Header />
      <HeroHeader />
      <Layout>
        <SectionTitle
          sectiontitle={'高速でセキュアなウェブサイトを作ります'}
        />
        <Service />
        <SectionTitle
          sectiontitle={'Jamstackとは？'}
        />
        <Detail />
        <SectionTitle
          sectiontitle={'プロフィール'}
        />
        <Profile />
        <SectionTitle
          sectiontitle={'ご用命・ご相談はこちらから'}
        />
        <Form />
      </Layout>
      <Footer />
    </>
  )
}
