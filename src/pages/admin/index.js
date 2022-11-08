import Card from '@/admin//components//Card';
import Table from '@/admin//element/Table';
import Layout from '@/admin//layouts/Layout';

export default function index() {
  return (
    <Layout>
      <div className="body">
        <div className="flex justify-between">
          <Card caption={'posts'} total={'17'} svg={'icon-post'} />
          <Card caption={'tags'} total={'5'} svg={'icon-tag'} />
          <Card caption={'categories'} total={'7'} svg={'icon-category'} />
          <Card caption={'users'} total={'2'} svg={'icon-user'} />
        </div>
        <div className="mt-[4rem]">
          <Table caption={'Latest Posts'} tags={'Create New'} />
        </div>
      </div>
    </Layout>
  );
}
