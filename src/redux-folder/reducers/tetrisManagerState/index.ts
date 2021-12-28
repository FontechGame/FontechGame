import {
  TRETRIS_STRING,
  TetrisManagerActionTypes,
  TetrisManagerType,
} from '@redux-folder/types/tetrisManagerType'

import { switchCaseTState } from '@other-support/Consts'

const initTetrisManagerState: TetrisManagerType =
  {
    count: 800,
    activeBlockIndexes: Array<number>(),
  }

const tetrisManagerState = (
  state = initTetrisManagerState,
  action: TetrisManagerActionTypes
): TetrisManagerType => {
  const reducer = switchCaseTState<
    TetrisManagerActionTypes,
    TetrisManagerType
  >({
    [TRETRIS_STRING.UPDATE_ACTIVEBLOCKS]:
      eachAction => ({
        ...state,
        activeBlockIndexes:
          eachAction.activeBlockIndexes,
      }),
    [TRETRIS_STRING.CLEAR]: () =>
      initTetrisManagerState,
  })(() => state)(action.type)

  return reducer(action)
}

export default tetrisManagerState
