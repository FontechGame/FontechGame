import React from 'react'
import classnames from 'classnames'

import CustomButton from '@components/CustomButton'

const DrawLots: React.FC = () => {
  return (
    <div className="p-4">
      <div className="flex flex-col w-[280px]">
        <div className="text-white">DrawLots</div>
      </div>
      <div className="relative bg-red-500 w-[300px] h-[300px]"></div>
    </div>
  )
}

export default DrawLots
