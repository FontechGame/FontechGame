import React from 'react'

import { useDispatch } from 'react-redux'

import {
  updateIsLose,
  updateCurrentBlock,
  updateReminderBlock,
  clearTetris,
} from '@redux-folder/actions/tetrisManagerAction'

export const useReduxTetrisAction = () => {
  const dispatch = useDispatch()

  const doAsyncUpdateIsLose = async (
    isLose: boolean
  ) => {
    await dispatch(updateIsLose(isLose))
  }

  const doAsyncUpdateCurrentBlock = async (
    currentBlockIndexes: number[]
  ) => {
    await dispatch(
      updateCurrentBlock(currentBlockIndexes)
    )
  }

  const doAsyncUpdateReminderBlock = async (
    reminderBlockIndexes: number[]
  ) => {
    await dispatch(
      updateReminderBlock(reminderBlockIndexes)
    )
  }

  const doAsyncClearTetris = async () => {
    await dispatch(clearTetris())
  }

  return {
    doAsyncUpdateIsLose,
    doAsyncUpdateCurrentBlock,
    doAsyncUpdateReminderBlock,
    doAsyncClearTetris,
  }
}

export default useReduxTetrisAction
