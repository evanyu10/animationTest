import React from 'react'

const Projects = () => {
  return (
    <div style={{
        backgroundColor: '#e5e7eb',
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
        transition: '0.3s',
        borderRadius: '5px',
        width: '100%',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
      <h2 className="font-semibold text-3xl sm:text-xl lg:text-4xl mb-4 text-center">My Work</h2>
      <p className="text-xl text-center">Please check out some of the work that I have done!</p>
      <a href="/projectpage">
        <button className="px-6 mt-4 p-3 w-full sm:w-fit rounded-full mr-4 mb-4 sm:mb-0 bg-gradient-to-br from-purple-200 to-purple-500 hover:bg-slate-200 hover:text-black text-white">
            Go to Projects
        </button>
      </a>
    </div>
  )
}

export default Projects
