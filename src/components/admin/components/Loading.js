// Redux Toolkit
import { useSelector } from 'react-redux';

export default function Login() {
  return (
    <div className="loading">
      <div className="h-[8rem] w-[8rem]">
        <svg className="h-full w-full" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M34.5 31.6667C34.5 33.2315 33.2315 34.5 31.6667 34.5H25C23.4351 34.5 22.1667 33.2315 22.1667 31.6667V28.3333C22.1667 26.7685 23.4351 25.5 25 25.5H31.6667C33.2315 25.5 34.5 26.7685 34.5 28.3333V31.6667ZM17.8333 31.6667C17.8333 33.2315 16.5649 34.5 15 34.5H8.33333C6.76852 34.5 5.5 33.2315 5.5 31.6667V21.6667C5.5 20.1018 6.76852 18.8333 8.33333 18.8333H15C16.5649 18.8333 17.8333 20.1018 17.8333 21.6667V31.6667ZM34.5 18.3333C34.5 19.8982 33.2315 21.1667 31.6667 21.1667H25C23.4351 21.1667 22.1667 19.8982 22.1667 18.3333V8.33333C22.1667 6.76852 23.4351 5.5 25 5.5H31.6667C33.2315 5.5 34.5 6.76852 34.5 8.33333V18.3333ZM17.8333 11.6667C17.8333 13.2315 16.5649 14.5 15 14.5H8.33333C6.76853 14.5 5.5 13.2315 5.5 11.6667V8.33333C5.5 6.76853 6.76853 5.5 8.33333 5.5H15C16.5649 5.5 17.8333 6.76852 17.8333 8.33333V11.6667Z"
            fill="black"
            stroke="black"
            className="svg-elem-1"
          ></path>
        </svg>
      </div>
    </div>
  );
}
