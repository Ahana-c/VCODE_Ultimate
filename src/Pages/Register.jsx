import React from "react";
import logo from "../assets/logo.png";

const RegisterForm = () => {
	return (
		<div className="bg-black-100 flex items-center justify-center h-screen">
			<div className="bg-[#00df9a] p-8 rounded-lg shadow-md w-96 flex flex-col items-center">
				<img src={logo} style={{"height":"200px" , "width":"250px"}} />
				<h2 className="text-2xl font-semibold mb-4 text-black text-center">
					Register
				</h2>
				<form className="w-full">
					<div className="mb-4">
						<label
							htmlFor="name"
							className="block text-sm font-medium py-3 text-gray-700 text-white"
						>
							Name
						</label>
						<input
							type="text"
							id="name"
							name="name"
							className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
							required
						/>
					</div>
					<div className="mb-4">
						<label
							htmlFor="email"
							className="block text-sm font-medium py-3 text-gray-700 text-white"
						>
							Email
						</label>
						<input
							type="email"
							id="email"
							name="email"
							className="w-full px-3 py-2 border rounded-md py-3 focus:outline-none focus:ring focus:border-blue-500"
							required
						/>
					</div>
					<div className="mb-4">
						<label
							htmlFor="password"
							className="block text-sm font-medium py-3 text-gray-700 text-white"
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
					<div className="mb-4">
						<label
							htmlFor="confirmPassword"
							className="block text-sm font-medium py-3 text-gray-700 text-white"
						>
							Confirm Password
						</label>
						<input
							type="password"
							id="confirmPassword"
							name="confirmPassword"
							className="w-full px-3 py-2 border rounded-md py-3 focus:outline-none focus:ring focus:border-blue-500"
							required
						/>
					</div>
					<button
						type="submit"
						className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 w-full"
					>
						Register
					</button>
				</form>
			</div>
		</div>
	);
};

export default RegisterForm;
