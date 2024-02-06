import {  useEffect, useState } from "react"
import Preview from "./components/Preview/Preview"
import Search from "./components/Search/Search"
import Error404 from './components/Error/Error'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  const [data, setdata] = useState({})
  const [isLoading, setisLoading] = useState(true)

  const [ispageavail, setispageavail] = useState(true)

  const [user, setuser] = useState("yashbhardwaj11")

  const fetchUserForFirstTime = async () => {
    setisLoading(true);
    try {
      const response = await fetch(`https://api.github.com/users/${user}`);
      const userData = await response.json();
  
      if (response.status === 200) {
        setdata(userData);
        setispageavail(userData.name !== null);
      } else {
        setispageavail(false);
        toast.error(`Error: ${userData.message}`);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      setispageavail(false);
      toast.error("Error fetching user data");
    } finally {
      setisLoading(false);
    }
  };

  useEffect(() => {
    fetchUserForFirstTime();
  }, [])
  
  

  return (
    ispageavail ? <div className="flex flex-col gap-5 h-screen w-full justify-center items-center bg-dark-bg">
      <div>
        <Search setdata = {setdata} setisLoading={setisLoading} />
      </div>
      <div>
        <Preview
          avatarUrl={data.avatar_url}
          blog={data.blog}
          email={data.email}
          followers={data.followers}
          following={data.following}
          location={data.location}
          login={data.login}
          name={data.name}
          public_repos={data.public_repos}
          twitter={data.twitter}
          isLoading={isLoading}
          bio={data.bio}
          joinedAt={data.created_at?.split("T")[0]}
        />
      </div>
    </div> 
    : 
    <div>
    <ToastContainer />
      <Error404/>
      </div>
  )
}

export default App
