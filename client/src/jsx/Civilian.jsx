/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const Civilian = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={`max-w-sm mx-auto ${isDarkMode ? 'dark' : ''}`}>
      <div className="mb-5">
        <label
          htmlFor="email"
          className={`block mb-2 text-sm font-medium ${isDarkMode ? 'text-white' : 'text-white'}`}
        >
          Your email
        </label>
        <input
          type="email"
          id="email"
          className={`shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${
            isDarkMode ? 'dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light' : ''
          }`}
          placeholder="name@flowbite.com"
          required
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="password"
          className={`block mb-2 text-sm font-medium ${isDarkMode ? 'text-white' : 'text-white'}`}
        >
          Your password
        </label>
        <input
          type="password"
          id="password"
          className={`shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${
            isDarkMode ? 'dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light' : ''
          }`}
          required
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="repeat-password"
          className={`block mb-2 text-sm font-medium ${isDarkMode ? 'text-white' : 'text-white'}`}
        >
          Repeat password
        </label>
        <input
          type="password"
          id="repeat-password"
          className={`shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${
            isDarkMode ? 'dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light' : ''
          }`}
          required
        />
      </div>


      <div className="mb-5">
        <label
          htmlFor="repeat-password"
          className={`block mb-2 text-sm font-medium ${isDarkMode ? 'text-white' : 'text-white'}`}
        >
          phone Number
        </label>
        <input
          type="password"
          id="repeat-password"
          className={`shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${
            isDarkMode ? 'dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light' : ''
          }`}
          required
        />
      </div>

      <div className="mb-5">
        <label
          htmlFor="repeat-password"
          className={`block mb-2 text-sm font-medium ${isDarkMode ? 'text-white' : 'text-white'}`}
        >
          residentialAddress
        </label>
        <input
          type="password"
          id="repeat-password"
          className={`shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${
            isDarkMode ? 'dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light' : ''
          }`}
          required
        />
      </div>

      <div className="mb-5">
        <label
          htmlFor="repeat-password"
          className={`block mb-2 text-sm font-medium ${isDarkMode ? 'text-white' : 'text-white'}`}
        >
          city
        </label>
        <input
          type="password"
          id="repeat-password"
          className={`shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${
            isDarkMode ? 'dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light' : ''
          }`}
          required
        />
      </div>

      <div className="mb-5">
        <label
          htmlFor="repeat-password"
          className={`block mb-2 text-sm font-medium ${isDarkMode ? 'text-white' : 'text-white'}`}
        >
           zipCode
        </label>
        <input
          type="password"
          id="repeat-password"
          className={`shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${
            isDarkMode ? 'dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light' : ''
          }`}
          required
        />
      </div>


      <div className="mb-5">
        <label
          htmlFor="repeat-password"
          className={`block mb-2 text-sm font-medium ${isDarkMode ? 'text-white' : 'text-white'}`}
        >
          Camera Model
        </label>
        <input
          type="password"
          id="repeat-password"
          className={`shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${
            isDarkMode ? 'dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light' : ''
          }`}
          required
        />
      </div>


      <div className="mb-5">
        <label
          htmlFor="repeat-password"
          className={`block mb-2 text-sm font-medium ${isDarkMode ? 'text-white' : 'text-white'}`}
        >
          Camera Location
        </label>
        <input
          type="password"
          id="repeat-password"
          className={`shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${
            isDarkMode ? 'dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light' : ''
          }`}
          required
        />
      </div>


      <div className="mb-5">
        <label
          htmlFor="repeat-password"
          className={`block mb-2 text-sm font-medium ${isDarkMode ? 'text-white' : 'text-white'}`}
        >
          camera Type
        </label>
        <input
          type="password"
          id="repeat-password"
          className={`shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${
            isDarkMode ? 'dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light' : ''
          }`}
          required
        />
      </div>

      <div className="mb-5">
        <label
          htmlFor="repeat-password"
          className={`block mb-2 text-sm font-medium ${isDarkMode ? 'text-white' : 'text-white'}`}
        >
          username
        </label>
        <input
          type="password"
          id="repeat-password"
          className={`shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${
            isDarkMode ? 'dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light' : ''
          }`}
          required
        />
      </div>


      <div className="mb-5">
        <label
          htmlFor="repeat-password"
          className={`block mb-2 text-sm font-medium ${isDarkMode ? 'text-white' : 'text-white'}`}
        >
          securityQuestion
        </label>
        <input
          type="password"
          id="repeat-password"
          className={`shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${
            isDarkMode ? 'dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light' : ''
          }`}
          required
        />
      </div>


      <div className="mb-5">
        <label
          htmlFor="repeat-password"
          className={`block mb-2 text-sm font-medium ${isDarkMode ? 'text-white' : 'text-white'}`}
        >
           securityAnswer
        </label>
        <input
          type="password"
          id="repeat-password"
          className={`shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${
            isDarkMode ? 'dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light' : ''
          }`}
          required
        />
      </div>

      <div className="flex items-start mb-5">
        <div className="flex items-center h-5">
          <input
            id="terms"
            type="checkbox"
            value=""
            className={`w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 ${
              isDarkMode ? 'dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800' : ''
            }`}
            required
          />
        </div>


        
        <label
          htmlFor="terms"
          className={`ms-2 text-sm font-medium ${isDarkMode ? 'text-white' : 'text-white'}`}
        >
          I agree with the{' '}
          <a href="#" className={`text-blue-600 hover:underline ${isDarkMode ? 'dark:text-blue-500' : ''}`}>
            terms and conditions
          </a>
        </label>
      </div>


      


      <button
        type="submit"
        className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ${
          isDarkMode ? 'dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' : ''
        }`}
      >
        Register your camera
      </button>
      
     
     

    </div>
  );
};

export default Civilian;
