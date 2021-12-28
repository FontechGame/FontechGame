import React from 'react'

import useLocalData from '@redux-folder/hooks/useLocalData'
import CustomButton from '@components/CustomButton'

const Snake: React.FC = () => {
  const {
    doSaveLocalData,
    doClearLocalData,
    data,
  } = useLocalData()

  return (
    <div className="p-4">
      <div className="flex flex-col w-[280px]">
        <div className="text-white">Snake</div>
        <div className="text-white">
          data: {data}
        </div>
        <CustomButton
          className="mb-2"
          onClick={() =>
            doSaveLocalData({
              data: {
                info: 'data',
              },
            })
          }
        >
          setData
        </CustomButton>
        <CustomButton
          onClick={() => doClearLocalData()}
        >
          Clear
        </CustomButton>
      </div>
    </div>
  )
}

export default Snake
