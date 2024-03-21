import React from 'react'

interface Props extends React.LabelHTMLAttributes<HTMLLabelElement> {}

const Label = ({children, ...props}: Props) => {
  return (
    <label
      htmlFor="first_name"
      className="block mb-2 text-sm font-medium text-gray-900"
      {...props}>
        {children}
    </label>
  )
}

export default Label;