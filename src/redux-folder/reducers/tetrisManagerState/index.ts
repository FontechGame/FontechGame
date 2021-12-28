import {
  TRETRIS_STRING,
  TetrisManagerActionTypes,
  TetrisManagerType,
} from '@redux-folder/types/tetrisManagerType'

import { switchCaseTState } from '@other-support/Consts'

import { unionArray } from '@other-support/Consts'

const initTetrisManagerState: TetrisManagerType =
  {
    count: 800,
    reminderBlockIndexes: Array<number>(),
    currentBlockIndexes: Array<number>(),
  }

const tetrisManagerState = (
  state = initTetrisManagerState,
  action: TetrisManagerActionTypes
): TetrisManagerType => {
  const reducer = switchCaseTState<
    TetrisManagerActionTypes,
    TetrisManagerType
  >({
    [TRETRIS_STRING.UPDATE_CURRENT]:
      eachAction => ({
        ...state,
        currentBlockIndexes:
          eachAction.currentBlockIndexes,
      }),
    [TRETRIS_STRING.UPDATE_REMINDER]:
      eachAction => ({
        ...state,
        reminderBlockIndexes: unionArray({
          currentArray:
            state.reminderBlockIndexes,
          targetArray:
            eachAction.reminderBlockIndexes,
        }),
      }),
    [TRETRIS_STRING.CLEAR]: () =>
      initTetrisManagerState,
  })(() => state)(action.type)

  return reducer(action)
}

export default tetrisManagerState
