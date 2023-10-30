import React from "react";
import { signInWithPopup } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 96887d7 (Added Signin and Signup)
import authimage from "../static/images/authimage.jpg";
import logo from "../static/images/logo.png";
import googleicon from "../static/images/googleicon.png";

<<<<<<< HEAD
=======
=======
import authimage from "../assets/authimage.jpg";
import logo from "../assets/logo.png";
import googleicon from "../assets/googleicon.png";
import { NavLink } from "react-router-dom";
>>>>>>> ec7cc13 (Added signin/signup)
>>>>>>> 96887d7 (Added Signin and Signup)
import { auth, provider } from "../Firebase";
import { adduser } from "../redux/Slice/user";

const Login = () => {
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 96887d7 (Added Signin and Signup)
  const user = useSelector((state) => state.userState.user);
  const dispatch = useDispatch();

  const handleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((data) => {
        // console.log(data);
        dispatch(adduser(data.user.email));
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      {
        !!user && !!Object.keys(user).length && <Navigate to="/home" />
        /* If there exist a user then redirect to Home Page */
      }

      <div className="w-full h-screen md:flex sm:justify-center">
        <div class="w-3/5 h-full sm:hidden md:flex ">
          <img src={authimage} className="h-full object-cover" />
        </div>

        <div class="w-2/5 h-full md:pl-8 md:flex-col sm:p-5">
          {/* Csi logo and text  */}
          <div className="mt-[60px] top-[70px]">
            <div className="flex items-center font-bold space-x-2">
              <img src={logo} width="85px" height="70px" />
              <div className="flex flex-col text-dark">
                <h1 className="text-[33px]  font-juneauBold">Resume</h1>
                <h1 className="text-[33px]  font-juneauBold mt-[-0.7rem]">
                  Builder
                </h1>
              </div>
            </div>
          </div>
          {/* end of csi logo and text  */}

          <div className="pt-5 mt-5 border-t-solid border-t-4 ls:w-[500px]  sm:w-[400px] border-t-green">
            <h1 className="font-juneauBold text-[32px]">
              Nice to see you here.
            </h1>
            <div className="flex md:justify-center pt-10">
              <button
                onClick={handleSignIn}
                className="bg-dark flex items-center space-x-4 justify-center w-[300px] p-3 rounded-md"
              >
                <img src={googleicon} width={30} />
                <a className="text-white">Sign in with Google</a>
              </button>
            </div>
          </div>
          <div className="flex pt-5">
            <p className="md:left-[170px] relative">© CSI CHAPTER 2023</p>
          </div>
        </div>
      </div>
    </div>
  );
};
<<<<<<< HEAD
export default Login;
=======
export default Login;
=======
	const user = useSelector((state) => state.userState.user);
	const dispatch = useDispatch();

	const handleSignIn = () => {
		signInWithPopup(auth, provider)
			.then((data) => {
				// console.log(data);
				dispatch(adduser(data.user.email));
				console.log(user);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<div>
			{
				!!user && !!Object.keys(user).length && <Navigate to="/home" />
				/* If there exist a user then redirect to Home Page */
			}

			<div className="bg-black-100 flex items-center justify-center h-screen">
				<div className="bg-[#00df9a] p-8 rounded-lg shadow-md w-96">
					<img src={logo} />
					<h2 className="text-2xl font-semibold mb-4 text-black text-center">
						Login
					</h2>
					<form>
						<div className="mb-4">
							<label
								htmlFor="email"
								className="block text-sm font-medium text-gray-700 text-white py-3"
							>
								Email
							</label>
							<input
								type="email"
								id="email"
								name="email"
								className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
								required
							/>
						</div>
						<div className="mb-4">
							<label
								htmlFor="password"
								className="block text-sm font-medium text-gray-700 text-white py-3"
							>
								Password
							</label>
							<input
								type="password"
								id="password"
								name="password"
								className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
								required
							/>
						</div>
						<button
							type="submit"
							className="bg-blue-500 w-full text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
						>
							Login
						</button>
					</form>
					<div className="mt-4 flex">
						<button
							onClick={handleSignIn}
							className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 focus:outline-none focus:ring focus:ring-red-300"
						>
							Sign in with Google
						</button>
					<button className="bg-white w-[140px] rounded-md font-medium mx-4 mx-auto">
						<NavLink to="/register">Not a User? Register here!</NavLink>
					</button>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Login;
>>>>>>> ec7cc13 (Added signin/signup)
>>>>>>> 96887d7 (Added Signin and Signup)
