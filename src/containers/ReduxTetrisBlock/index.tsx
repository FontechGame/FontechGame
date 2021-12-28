import React from 'react'
import classnames from 'classnames'
import BlockContainer from '@components/BlockContainer'

import useTetris from '@redux-folder/hooks/useTetris'

const ReduxTetrisBlock: React.FC = () => {
  const {
    isLose,
    count,
    activeBlockIndexes,
    currentBlockIndexes,
    doUpdateCurrentBlock,
    doUpdateReminderBlock,
    dropDownCurrentBlock,
    doClearTetris,
    doUpdateCurrentBlockByRandom,
  } = useTetris()

  React.useEffect(() => {
    // doClearTetris()

    doUpdateCurrentBlockByRandom()
  }, [])

  React.useEffect(() => {
    if (activeBlockIndexes.length === 0) {
      return
    }

    const dropDownActiveBlockIndexesResult =
      dropDownCurrentBlock()

    if (!dropDownActiveBlockIndexesResult) {
      doUpdateReminderBlock(currentBlockIndexes)

      doUpdateCurrentBlockByRandom()
      return
    }

    setTimeout(
      () =>
        doUpdateCurrentBlock(
          dropDownActiveBlockIndexesResult
        ),
      10
    )
  }, [
    count,
    currentBlockIndexes,
    activeBlockIndexes,
    doUpdateCurrentBlock,
    doUpdateReminderBlock,
    dropDownCurrentBlock,
  ])

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
