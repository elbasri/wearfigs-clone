import HomeMain from '../src/components/home';
import axios from 'axios'
import { getCategories } from '../src/utils/constants';

export default function Home({ categories, collections }) {

  return (<HomeMain categories={categories} collections={collections} />)
}

export async function getStaticProps() {

  const {data: cat} = await getCategories(24,12,null);
  const {data: col} = await getCategories(25,12,null);

  const data = { categories: cat || {}, collections: col || {}}
  return {
    props:  data || {},
    revalidate: 1
  }
}

