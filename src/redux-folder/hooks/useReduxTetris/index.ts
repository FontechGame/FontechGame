import React from 'react'

import useReduxTetrisAction from '@redux-folder/hooks/useReduxTetris/useReduxTetrisAction'
import useReduxTetrisState from '@redux-folder/hooks/useReduxTetris/useReduxTetrisState'

import { unionArray } from '@other-support/Consts'
import { defaultBlocks } from '@other-support/Data'

export const useReduxTetris = () => {
  const {
    isLose,
    count,
    reminderBlockIndexes,
    currentBlockIndexes,
  } = useReduxTetrisState()

  const {
    doAsyncUpdateIsLose,
    doAsyncUpdateCurrentBlock,
    doAsyncUpdateReminderBlock,
    doAsyncClearTetris,
  } = useReduxTetrisAction()

  const activeBlockIndexes = React.useMemo(
    () =>
      unionArray({
        currentArray: reminderBlockIndexes,
        targetArray: currentBlockIndexes,
      }),
    [reminderBlockIndexes, currentBlockIndexes]
  )

  const doAsyncUpdateCurrentBlockByRandom =
    async () => {
      const block =
        defaultBlocks[
          Math.floor(
            Math.random() * defaultBlocks.length
          )
        ]

      if (block) {
        await doAsyncUpdateCurrentBlock([
          ...block,
        ])
      }
    }

  const initTetris = async () => {
    await doAsyncUpdateIsLose(true)
    await doAsyncClearTetris()
  }

  const doAsyncUpdateReminderBlockCheckingIsLost =
    () => {
      doAsyncUpdateReminderBlock(
        currentBlockIndexes
      )

      if (
        currentBlockIndexes.find(
          each => each < 80
        )
      ) {
        doAsyncUpdateIsLose(false)
        return
      }

      doAsyncUpdateCurrentBlockByRandom()
    }

  const dropdownCurrentBlock = () => {
    if (isLose) {
      return
    }

    if (currentBlockIndexes.length === 0) {
      return
    }

    if (
      reminderBlockIndexes.find(each => each < 80)
    ) {
      doAsyncUpdateIsLose(false)
      return
    }

    if (
      currentBlockIndexes.find(each =>
        reminderBlockIndexes.find(
          eachReminder =>
            each + 20 == eachReminder
        )
      )
    ) {
      doAsyncUpdateReminderBlockCheckingIsLost()
      return
    }

    if (
      currentBlockIndexes.find(
        each => each + 20 > count
      )
    ) {
      doAsyncUpdateReminderBlockCheckingIsLost()
      return
    }

    doAsyncUpdateCurrentBlock(
      currentBlockIndexes.map(each => each + 20)
    )
  }

  return {
    isLose,
    count,
    reminderBlockIndexes,
    currentBlockIndexes,
    activeBlockIndexes,

    doAsyncUpdateIsLose,
    doAsyncUpdateCurrentBlock,
    doAsyncUpdateReminderBlock,
    doAsyncClearTetris,

    doAsyncUpdateCurrentBlockByRandom,
    initTetris,

    dropdownCurrentBlock,
  }
}

export default useReduxTetris
