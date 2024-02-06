
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Error = () => {

    const [count, setCount] = useState(1)
    
    const countingFunction = (e) => {
        e.preventDefault();
        toast(`🦄 ${count} sheeps`, {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: 1,
            theme: "colored",
            });
            setCount(count+1)
    }
  return (
    <div>
      <main className="grid min-h-full place-items-center bg-dark-bg px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-indigo-600">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">Page under construction</h1>
          <p className="mt-6 text-base leading-7 text-gray-300">Sorry, page you’re looking for is under development.</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
            onClick={countingFunction}
              href="/"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Building
            </a>
            
          </div>
        </div>
      </main>
    </div>
  )
}

export default Error
