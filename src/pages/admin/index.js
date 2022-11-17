// React
import { useEffect } from 'react';
// Components
import Card from '@/admin//components//Card';
import Table from '@/admin//element/Table';
import Layout from '@/admin//layouts/Layout';
// Config & Helpers
import { API_URL } from '@/config/index';

export default function index({ posts, categories, tags }) {
  return (
    <Layout>
      <div className="flex justify-between">
        <Card caption={'posts'} total={`${posts.length}`} svg={'icon-post'} />
        <Card caption={'tags'} total={`${tags.length}`} svg={'icon-tag'} />
        <Card caption={'categories'} total={`${categories.length}`} svg={'icon-category'} />
        <Card caption={'users'} total={'2'} svg={'icon-user'} />
      </div>
      <div className="mt-[4rem]">
        <Table caption={'Latest Posts'} tags={'Create New'} />
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await Promise.all([
    fetch(`${API_URL}/api/posts`),
    fetch(`${API_URL}/api/categories`),
    fetch(`${API_URL}/api/tags`),
    // fetch(`${API_URL}/api/users`),
  ]);

  const data = await Promise.all(res.map((res) => res.json()));
  console.log(data[0].posts);

  return {
    props: {
      posts: data[0].posts,
      categories: data[1].categories,
      tags: data[2].tags,
    },
  };
}
