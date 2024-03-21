import React from 'react'

interface Props extends React.InputHTMLAttributes<HTMLInputElement>{}

const Input = (props: Props) => {
  return (
    <input
      className="bg-gray-50 border-2 border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-800 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      {...props}
    />
  )
}

export default Input