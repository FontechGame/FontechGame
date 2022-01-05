import React from 'react'
import classnames from 'classnames'
import BlockContainer from '@components/BlockContainer'

import useReduxTetrisForReduxTetrisBlock from '@other-support/Hooks/useReduxTetrisForReduxTetrisBlock'

import { sleep } from '@other-support/Consts'

const ReduxTetrisBlock: React.FC = () => {
  const {
    isLose,
    count,
    activeBlockIndexes,

    doAsyncUpdateCurrentBlockByRandom,
    dropDownCurrentBlock,
    updateCurrentBlockWithKeyCode,

    keyCode,
    setKeyCode,
  } = useReduxTetrisForReduxTetrisBlock()

  React.useEffect(() => {
    doAsyncUpdateCurrentBlockByRandom()
  }, [])

  const changeCurrentBlock =
    React.useCallback(() => {
      const asyncChangeCurrentBlock =
        async () => {
          // console.log(
          //   'asyncChangeCurrentBlock keyCode: ',
          //   keyCode
          // )
          if (!keyCode) {
            dropDownCurrentBlock()
            return
          }

          // console.log('updateCurrentBlockWithKeyCode')
          updateCurrentBlockWithKeyCode(keyCode)
          setKeyCode(undefined)
        }

      asyncChangeCurrentBlock()
    }, [
      keyCode,
      dropDownCurrentBlock,
      updateCurrentBlockWithKeyCode,
    ])

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (isLose) {
        return
      }

      changeCurrentBlock()
    }, 100)

    return () => {
      clearInterval(interval)
    }
  }, [isLose, changeCurrentBlock])

  return (
    <div className="pt-[64px]">
      <div className="relative flex mt-4">
        <div className="absolute inset top-[64px] bottom-0 left-0 right-0 border-x border-b border-[cyan]" />
        <BlockContainer
          count={count}
          activeBlockIndexes={activeBlockIndexes}
        />
      </div>
    </div>
  )
}

export default ReduxTetrisBlock
