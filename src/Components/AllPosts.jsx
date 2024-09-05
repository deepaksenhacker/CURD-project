import React, { useContext, useEffect, useState } from 'react';
import MyContext from '../Context/myContext';
import { Link, useNavigate } from 'react-router-dom';
import { FaHeart, FaRegHeart, FaComment, FaShare } from 'react-icons/fa'; // Use react-icons for heart icons

const AllPosts = () => {
  const navigate = useNavigate();
  const context = useContext(MyContext);
  const { getAllPosts, AllPosts, loader } = context;

  const [like, setLike] = useState({});
  const [postLoader, setPostLoader] = useState(false);

  useEffect(() => {
    getAllPosts();
  }, []);

  const likeThePost = async (postId) => {
    setPostLoader(true);
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/posts/post/${postId}/like`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token'),
        },
      });

      const data = await res.json();
      if (localStorage.getItem('token')) {
        setLike((prevLike) => ({
          ...prevLike,
          [postId]: data.post.likes.length,
        }));
        setPostLoader(false);
      } else {
        navigate('/login');
        setPostLoader(false);
      }
    } catch (error) {
      console.error(error);
      setPostLoader(false);
    }
  };

  return (
    <div className='h-fit flex flex-wrap gap-6 justify-center'>
      {loader ? (
        <div className='h-svh m-auto'>
          <h5 className="text-3xl mt-52 text-center font-serif">
            Loading
            <i className="fas fa-circle mx-2 text-sm animate-ping text-green-600" />
            <i className="fas fa-circle mx-2 text-sm animate-ping text-green-600" />
          </h5>
        </div>
      ) : (
        <>
          {AllPosts.length > 0 ? (
            AllPosts.map((item) => {
              const { title, description, _id, image, user, likes } = item;
              const userProfile = user ? user.profileImage : '';
              const username = user ? user.username : '';

              return (
                <div key={_id} className="gap-2 w-full">
                  <div className="flex mb-2 gap-3">
                    <div className="w-7 h-7 rounded-full border-2 border-pink-700 overflow-hidden">
                      <img src={userProfile} alt="" className='w-full h-full object-cover' />
                    </div>
                    <h5 className="font-bold">@ {username}</h5>
                  </div>
                  <div className="overflow-hidden">
                    <Link to={`/posts/view/${_id}`} className="btn btn-dark w-100">
                      <img
                        src={postLoader ? 'https://assets-v2.lottiefiles.com/a/daeab06c-117b-11ee-bdd9-e3e06aee90a6/qwDWqaeysR.gif' : image}
                        alt=""
                        className="w-full h-full object-cover hover:scale-110 transition"
                      />
                    </Link>
                  </div>
                  <div className="mt-2 flex gap-4">
                    <button onClick={() => likeThePost(_id)}>
                      {like[_id] ? (
                        <FaHeart className="text-3xl text-red-500" />
                      ) : (
                        <FaRegHeart className="text-3xl text-zinc-500" />
                      )}
                    </button>
                    <FaComment className="text-3xl text-zinc-300" />
                    <a
                      href={`https://wa.me/?text=Check%20out%20this%20awesome%20content!%20Visit%20our%20site:%20https://dev1001.vercel.app/posts/view/${_id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className='font-bold'
                    >
                      <FaShare className="text-3xl text-zinc-400" />
                    </a>
                  </div>
                  <h5 className="font-bold m-1">
                    {likes.length < 1 ? "No likes" : likes.length + (like[_id] || 0)}
                  </h5>
                  <p className="text-wrap mt-1 p-1 font-bold">
                    {description} <FaShare />
                  </p>
                  <div className="flex flex-col gap-1">
                    <h5 className="text-sm font-bold">Comments</h5>
                    <div className="justify-center">
                      <textarea cols="" rows="3" className='w-full p-1 border' />
                      <button className='btn hover:bg-pink-400 text-sm text-white bg-pink-500'>
                        <i className="fas fa-comment-dots"></i> Comment
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className='h-svh'>
              <h2 className='text-white'>
                <i className="fas fa-pencil"></i> No Posts Here
              </h2>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default AllPosts;
