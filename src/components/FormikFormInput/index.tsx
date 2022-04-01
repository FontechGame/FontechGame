import React from 'react'
import classnames from 'classnames'
import { FormikErrors } from 'formik'

interface FormikFormInputProps {
  className?: string
  inputClassName?: string
  inputWithErrorClassName?: string
  labelClassName?: string
  inputProps: JSX.IntrinsicElements['input']
  label: string
  showError?: string | boolean | undefined
  errorString?:
    | string
    | string[]
    | FormikErrors<any>
    | FormikErrors<any>[]
    | undefined
}

const FormikFormInput = ({
  className,
  inputClassName,
  inputWithErrorClassName,
  labelClassName,
  inputProps = {},
  label,
  showError = false,
  errorString = '',
}: FormikFormInputProps) => {
  return (
    <div className={className}>
      <div className={inputClassName}>
        <label
          className={classnames(
            labelClassName,
            'block text-sm font-bold text-gray-700 flex-0'
          )}
        >
          {label}
        </label>
        <div className={inputWithErrorClassName}>
          <input
            className="py-2 px-3 w-full leading-tight text-gray-700 rounded border focus:outline-none shadow appearance-none focus:shadow-outline"
            type="text"
            {...inputProps}
          />
          <div
            className={classnames(
              'my-1 h-4 text-red-500 text-body-sm',
              showError && errorString
                ? 'opacity-100'
                : 'opacity-0'
            )}
          >
            {errorString}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormikFormInput
