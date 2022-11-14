// React
import { useState, useEffect } from 'react';
// Next JS
import Link from 'next/link';
import { useRouter } from 'next/router';
// Components
import Input from '@/admin//element/Input';
import Layout from '@/admin//layouts/Layout';
import Loading from '@/admin//components/Loading';
// Redux Toolkit
import { useSelector } from 'react-redux';

export default function Profile() {
  const { data, loading } = useSelector((state) => state.user);
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [username, setUserName] = useState('');
  const [new_image, setNewImage] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmation, setPasswordConfirmation] = useState('');

  return (
    <Layout>
      {loading && <Loading />}
      {data && (
        <div>
          <header className="flex flex-col ">
            <div className="flex items-center mb-[1.6rem]">
              <h3 className="text-black/90 mr-[1.6rem]">Welcome {data.first_name}</h3>
              <figcaption className="tag">
                <p>Save</p>
              </figcaption>
            </div>

            <div className="flex">
              <Link href="/admin">
                <h5 className="text-black/70 hover:text-black">Dashboard &nbsp;</h5>
              </Link>
              <h5>&gt; &nbsp;</h5>
              <Link href={`/admin/user/${data.username}`}>
                <h5 className=" text-black/70 hover:text-black">User &nbsp;</h5>
              </Link>
            </div>
          </header>
          <form action="" className="mt-[4rem] w-1/2">
            <div className="flex items-start gap-x-[3.2rem] mb-[2.4rem];">
              <Input
                label={'First Name'}
                placeholder={'First Name'}
                type={'text'}
                value={data.first_name}
                onChange={(e) => setFirstName(e.target.value)}
                required
                className={'mb-[2.4rem]'}
                classInput={'mt-[.8rem]'}
              />
              <Input
                label={'Last Name'}
                placeholder={'Last Name'}
                type={'text'}
                value={data.last_name}
                onChange={(e) => setLastName(e.target.value)}
                required
                className={'mb-[2.4rem]'}
                classInput={'mt-[.8rem]'}
              />
            </div>
            <div className="flex items-start gap-x-[3.2rem] mb-[2.4rem];">
              <Input
                label={'Username'}
                placeholder={'Username'}
                type={'text'}
                value={data.username}
                onChange={(e) => setUserName(e.target.value)}
                required
                className={'mb-[2.4rem]'}
                classInput={'mt-[.8rem]'}
              />{' '}
              <Input
                label={'Profile Picture'}
                placeholder={'Profile Picture'}
                type={'file'}
                value={new_image}
                onChange={(e) => setNewImage(e.target.value)}
                required
                className={'mb-[2.4rem] '}
                classInput={
                  'mt-[.8rem] relative after:content-["Upload_an_image"] after:bg-white after:h-full after:w-full after:absolute after:top-0  after:left-[1.6rem] after:z-5 after:flex after:items-center after:font-light after:text-[#b9bec7]'
                }
              />
            </div>
            <Input
              label={'Email'}
              placeholder={'Email'}
              type={'email'}
              value={data.email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={'mb-[2.4rem]'}
              classInput={'mt-[.8rem]'}
            />

            <div className="flex items-start gap-x-[3.2rem] mb-[2.4rem];">
              <Input
                label={'Password'}
                placeholder={'Password'}
                type={'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className={'mb-[2.4rem]'}
                classInput={'mt-[.8rem]'}
              />
              <Input
                label={'Confirm Password'}
                placeholder={'Password'}
                type={'text'}
                value={password_confirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
                required
                className={'mb-[2.4rem]'}
                classInput={'mt-[.8rem]'}
              />
            </div>
          </form>
        </div>
      )}
    </Layout>
  );
}
