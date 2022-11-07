// Next JS
import Link from 'next/link';
// Components
import Layout from '@/dashboard//Layout';
import Input from '@/element//Input';
import Textarea from '@/element//Textarea';

export default function index() {
  return (
    <Layout>
      <div className="body">
        <header className="flex flex-col ">
          <div className="flex items-center mb-[1.6rem]">
            <h3 className="text-black/90 mr-[1.6rem]">Category One</h3>
            <figcaption className="tag">
              <p>Publish</p>
            </figcaption>
          </div>

          <div className="flex">
            <Link href="/admin">
              <h5 className="text-black/70 hover:text-black">Dashboard &nbsp;</h5>
            </Link>
            <h5>&gt; &nbsp;</h5>
            <Link href="/admin/categories">
              <h5 className="text-black/70 hover:text-black">Categories &nbsp;</h5>
            </Link>
            <h5>&gt; &nbsp;</h5>
            <Link href="/admin/categories/article-one">
              <h5 className=" text-black/70 hover:text-black">Category One &nbsp;</h5>
            </Link>
          </div>
        </header>
        <form action="" className="mt-[4rem] w-1/2">
          <Input
            label={'Name'}
            placeholder={'Name'}
            type={'text'}
            onChange
            required
            className={'mb-[2.4rem]'}
            classInput={'mt-[.8rem]'}
          />
          <Textarea
            label={'Description'}
            placeholder={'Description'}
            type={'text'}
            onChange
            required
            className={'mb-[2.4rem]'}
            classTextArea={'mt-[.8rem]'}
          />
        </form>
      </div>
    </Layout>
  );
}
