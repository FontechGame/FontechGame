import React from 'react'
import classnames from 'classnames'
import BlockContainer from '@components/BlockContainer'

import useTetris from '@redux-folder/hooks/useTetris'

const defaultBlocks: Array<number[]> = [
  [101, 102, 103, 104],
  [102, 121, 122, 123],
  [101, 121, 122, 123],
  [101, 102, 121, 122],
  [101, 102, 122, 123],
]

const ReduxTetrisBlock: React.FC = () => {
  const {
    currentBlockIndexes,
    doUpdateCurrentBlock,
    doUpdateReminderBlock,
    doclearTetris,
    count,
    activeBlockIndexes,
    dropDownCurrentBlock,
  } = useTetris()

  React.useEffect(() => {
    doclearTetris()

    const block = defaultBlocks.pop()
    if (block) {
      doUpdateCurrentBlock([...block])
    }
  }, [])

  React.useEffect(() => {
    if (activeBlockIndexes.length === 0) {
      return
    }

    const dropDownActiveBlockIndexesResult =
      dropDownCurrentBlock()

    if (!dropDownActiveBlockIndexesResult) {
      doUpdateReminderBlock(currentBlockIndexes)

      const block = defaultBlocks.pop()
      if (block) {
        doUpdateCurrentBlock([...block])
      }
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
