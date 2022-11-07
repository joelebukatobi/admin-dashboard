// Next JS
import Link from 'next/link';
// Components
import Layout from '@/dashboard//Layout';

export default function index() {
  return (
    <Layout>
      <div className="body">
        <header className="flex items-center">
          <h3 className="text-black/90 mr-[1.6rem]">Categories</h3>
          <div className="tag">
            <p>
              <Link href="/admin/posts/create/">Create New</Link>
            </p>
          </div>
        </header>
        <div className="mt-[2.4rem] border-[.1rem] border-black/10 rounded-[.8rem]">
          <table>
            <thead>
              <tr>
                <th>S/N</th>
                <th>Title</th>
                <th>Category</th>
                <th>Published Date</th>
                <th>Author</th>
                <th className="@apply rounded-tr-[.8rem] w-[5%] pl-[0]">Edit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Malcolm Lockyer</td>
                <td>Web Dev</td>
                <td>1/1/2022</td>
                <td>Malcolm Lockyer</td>
                <td>
                  <Link href="/admin/categories/article-one">
                    <svg>
                      <use href={`/images/sprite.svg#icon-post`} />
                    </svg>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}
