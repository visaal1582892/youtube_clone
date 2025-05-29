import React from 'react'

const Header = () => {
  return (
    <header>
        {/* Title and menu */}
        <section>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="p-2 hover:bg-gray-200 rounded-full w-10 h-10"
                aria-hidden="true"
                focusable="false">
                <path d="M21 6H3V5h18v1zm0 5H3v1h18v-1zm0 6H3v1h18v-1z" />
            </svg>
        </section>
    </header>
  )
}

export default Header