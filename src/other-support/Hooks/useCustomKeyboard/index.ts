import React from 'react'

const useCustomKeyboard = () => {
  const [keyCode, setKeyCode] = React.useState<
    string | undefined
  >(undefined)

  const keyDownAction = (e: KeyboardEvent) => {
    setKeyCode(e.code)
  }

  React.useEffect(() => {
    document.addEventListener(
      'keydown',
      keyDownAction
    )

    return () => {
      document.removeEventListener(
        'keydown',
        keyDownAction
      )
    }
  }, [])

  return {
    keyCode,
    setKeyCode,
  }
}

export default useCustomKeyboard
