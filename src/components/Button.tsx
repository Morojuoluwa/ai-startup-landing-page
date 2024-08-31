import React from 'react'

const Button = (props: React.PropsWithChildren) => {
  return (
   <button className='relative py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0px_0px_12px_#8c45ff]'>
    {props.children}
   </button>
  )
}

export default Button