import React from 'react'
import classnames from 'classnames'

import CustomButton from '@components/CustomButton'

const items = [
  {
    name: 'Name',
  },
  {
    name: 'Name2',
  },
]
const Test: React.FC = () => {
  return (
    <div className="p-4">
      <div className="flex flex-col w-[280px]">
        <div className="text-white">Test</div>
      </div>
      <div className="relative w-[300px] h-[300px] bg-red-500 rounded-full">
        {false &&
          items.map((item, index) => (
            <div
              key={`item_${index}`}
              className="absolute inset-1 bg-yellow-500 rounded-full"
            ></div>
          ))}
      </div>
    </div>
  )
}

export default Test
