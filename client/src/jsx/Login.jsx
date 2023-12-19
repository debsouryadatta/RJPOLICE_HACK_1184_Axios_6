/* eslint-disable no-unused-vars */
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleCivilianClick = () => {
    // Redirect to the civilian page
    navigate('/civilian');
  };

  const handlePoliceClick = () => {
    // Redirect to the police page
    navigate('/police');
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex">
        <div className="w-96 h-80 bg-white border border-gray-200 rounded-lg shadow dark:bg-white-800 dark:border-gray-700 p-6 mr-4">
          <div className="flex items-center">
            <img
              className="w-48 h-48 mb-3 rounded-full shadow-lg"
              src="https://previews.123rf.com/images/jakkapan/jakkapan1411/jakkapan141101630/33833725-silhouette-police-man-avatar-profile-pictures.jpg"
              alt="Police Avatar"
            />
            <div className="ml-4">
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-dark">Police Department</h5>
              <span className="text-sm text-gray-500 dark:text-gray-900"></span>
              <div className="mt-4">
                <button
                  onClick={handlePoliceClick}
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700 ms-3"
                >
                  Click Here 
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-96 h-80 bg-white border border-gray-200 rounded-lg shadow dark:bg-white-800 dark:border-gray-700 p-6">
          <div className="flex items-center">
            <img
              className="w-48 h-48 mb-3 rounded-full shadow-lg"
              src="https://static.vecteezy.com/system/resources/thumbnails/022/014/184/small/user-icon-member-login-isolated-vector.jpg"
              alt="Civilian Avatar"
            />
            <div className="ml-4">
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-dark">Civilian</h5>
              <span className="text-sm text-gray-500 dark:text-gray-900"></span>
              <div className="mt-4">
                <button
                  onClick={handleCivilianClick}
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700 ms-3"
                >
                  Click Here
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
