import React from 'react'

import DrawLotsForm from '@components/DrawLotsForm'
import CustomButton from '@components/CustomButton'

import useDrawLots from '@other-support/Hooks/useDrawLots'

const DrawLots: React.FC = () => {
  const {
    drawLots,
    removeDrawLot,
    insertToDrawLot,

    realDrawLot,
  } = useDrawLots()

  return (
    <div className="p-4">
      <div className="flex flex-col w-[280px]">
        <div className="text-white">DrawLots</div>
      </div>
      <DrawLotsForm
        newLotCallBack={insertToDrawLot}
      />
      <div className="-m-2 mb-2">
        <div className="text-red-400">List:</div>
        {drawLots.map((drawLot, index) => (
          <CustomButton
            className="m-2 !text-gray-700 !bg-white"
            key={`draw-lots-${drawLot}`}
            onClick={() => removeDrawLot(drawLot)}
          >
            {drawLot}
          </CustomButton>
        ))}
      </div>

      <CustomButton
        className="m-2"
        onClick={realDrawLot}
      >
        Do Draw!!
      </CustomButton>
    </div>
  )
}

export default DrawLots

/*
import React from 'react'

import DrawLotsForm from '@components/DrawLotsForm'
import CustomButton from '@components/CustomButton'

import useDrawLots from '@other-support/Hooks/useDrawLots'

const DrawLots: React.FC = () => {
  const {
    drawLots,
    anotherDrawLots,

    removeDrawLot,
    removeAnotherDrawLot,

    insertToDrawLot,

    drawLot,
    drawLotAll,
    clearDraw,

    drawLotResults,
  } = useDrawLots()

  return (
    <div className="p-4">
      <div className="flex flex-col w-[280px]">
        <div className="text-white">DrawLots</div>
      </div>
      <DrawLotsForm
        newLotCallBack={insertToDrawLot}
      />
      <div className="-m-2 mb-2">
        <div>drawLots</div>
        {drawLots.map((drawLot, index) => (
          <CustomButton
            className="m-2 !text-gray-700 !bg-white"
            key={`draw-lots-${drawLot}`}
            onClick={() => removeDrawLot(drawLot)}
          >
            {drawLot}
          </CustomButton>
        ))}
      </div>

      <div className="-m-2 ">
        <div>anotherDrawLots</div>
        {anotherDrawLots.map(
          (anotherDrawLot, index) => (
            <CustomButton
              className="m-2 !text-gray-700 !bg-white"
              key={`another-draw-lots-${anotherDrawLot}`}
              onClick={() =>
                removeAnotherDrawLot(
                  anotherDrawLot
                )
              }
            >
              {anotherDrawLot}
            </CustomButton>
          )
        )}
      </div>

      <div className="flex flex-row -m-2 mt-10">
        <CustomButton
          className="m-2"
          onClick={drawLot}
        >
          Draw
        </CustomButton>
        <CustomButton
          className="m-2"
          onClick={drawLotAll}
        >
          DrawAll
        </CustomButton>
        <CustomButton
          className="m-2"
          onClick={clearDraw}
        >
          Clear Draw
        </CustomButton>
      </div>

      <div>
      {Object.entries(drawLotResults).map(([key, value], index)=>(
        <div className="flex flex-row" key={`draw-lot-result-${index}`}>
          <div>{key} to {value}</div>
        </div>
      ))}
      </div>
    </div>
  )
}

export default DrawLots

*/
