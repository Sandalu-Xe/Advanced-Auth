import React from 'react';

function Home() {
  return (
    <div className="text-center text-white p-10">
      <h1 className="text-4xl font-bold mb-4">Welcome to the Home Page</h1>
      <p className="text-lg mb-6">
        Explore our application to learn more about our features and services. Sign up or log in to get started!
      </p>
      <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded">
        Get Started
      </button>
    </div>
  );
}

export default Home;
