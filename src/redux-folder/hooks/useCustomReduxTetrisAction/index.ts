import React from 'react'

import useReduxTetrisAction from '@redux-folder/hooks/useReduxTetrisAction'
import useReduxTetrisState from '@redux-folder/hooks/useReduxTetrisState'

import { defaultBlocks } from '@other-support/Data'

export const useCustomReduxTetrisAction = () => {
  const {
    isLose,
    count,
    reminderBlockIndexes,
    currentBlockIndexes,
    activeBlockIndexes,
  } = useReduxTetrisState()

  const {
    doAsyncUpdateIsLose,
    doAsyncUpdateCurrentBlock,
    doAsyncUpdateReminderBlock,
    doAsyncReminderDeleteLines,
    doAsyncClearTetris,
  } = useReduxTetrisAction()

  const initTetris = async () => {
    await doAsyncUpdateIsLose(false)
    await doAsyncClearTetris()
  }

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

  const doAsyncUpdateReminderBlockCheckingIsLost =
    async () => {
      await doAsyncUpdateReminderBlock(
        currentBlockIndexes
      )

      if (
        currentBlockIndexes.find(
          each => each < 80
        )
      ) {
        // console.log('set Lose')
        await doAsyncUpdateIsLose(true)
        return
      }

      await doAsyncReminderDeleteLines()
      await doAsyncUpdateCurrentBlockByRandom()
    }

  const dropDownCurrentBlock = () => {
    if (isLose) {
      return
    }

    if (currentBlockIndexes.length === 0) {
      return
    }

    if (
      reminderBlockIndexes.find(each => each < 80)
    ) {
      doAsyncUpdateIsLose(true)
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

  const updateCurrentBlockWithKeyCode = (
    keyCode: string
  ) => {
    if (isLose) {
      return
    }

    if (keyCode == 'ArrowDown') {
      console.log('do ArrowDown')
      return
    }

    if (keyCode == 'ArrowUp') {
      console.log('do ArrowDown')
      return
    }

    if (keyCode == 'ArrowRight') {
      if (
        currentBlockIndexes.find(
          each => (each + 1) % 20 == 1
        )
      ) {
        return
      }

      if (
        currentBlockIndexes.find(each =>
          reminderBlockIndexes.find(
            eachReminder =>
              each + 1 == eachReminder
          )
        )
      ) {
        return
      }

      doAsyncUpdateCurrentBlock(
        currentBlockIndexes.map(each => each + 1)
      )
      return
    }

    if (keyCode == 'ArrowLeft') {
      if (
        currentBlockIndexes.find(
          each => (each - 1) % 20 == 0
        )
      ) {
        return
      }

      if (
        currentBlockIndexes.find(each =>
          reminderBlockIndexes.find(
            eachReminder =>
              each - 1 == eachReminder
          )
        )
      ) {
        return
      }

      doAsyncUpdateCurrentBlock(
        currentBlockIndexes.map(each => each - 1)
      )

      return
    }
  }

  return {
    initTetris,
    doAsyncUpdateCurrentBlockByRandom,
    dropDownCurrentBlock,
    updateCurrentBlockWithKeyCode,
  }
}

export default useCustomReduxTetrisAction
