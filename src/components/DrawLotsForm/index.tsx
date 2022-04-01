import React from 'react'
import * as Yup from 'yup'
import classnames from 'classnames'
import { useFormik } from 'formik'

import FormikFormInput from '@components/FormikFormInput'
import CustomButton from '@components/CustomButton'

import { showAlert } from '@other-support/Consts'

const newNameKey = 'newName'

const initialValues = {
  [newNameKey]: '',
}

interface DrawLotsFormProps {
  newLotCallBack: (value: string) => void
}

const DrawLotsForm: React.FC<
  DrawLotsFormProps
> = ({ newLotCallBack = () => undefined }) => {
  const formik = useFormik({
    initialValues,
    onSubmit: values => {
      const newLot: string = values[newNameKey]

      if (!newLot) {
        showAlert('input value is empty')
        return
      }

      if (newLot.length === 0) {
        showAlert('input value is empty')
        return
      }

      newLotCallBack(newLot)
      formik.setFieldValue(newNameKey, '', false)
    },
  })

  return (
    <form
      className="flex flex-row items-start"
      onSubmit={formik.handleSubmit}
    >
      <FormikFormInput
        className="flex flex-row items-center"
        inputClassName="flex flex-row"
        inputWithErrorClassName="flex flex-col"
        labelClassName=" !text-white pr-2 pt-2"
        inputProps={{
          id: newNameKey,
          name: newNameKey,
          placeholder: 'New Name',
          type: 'text',
          onChange: formik.handleChange,
          value: formik.values[newNameKey],
        }}
        label="name*"
        showError={
          !!(
            formik.touched[newNameKey] &&
            formik.errors[newNameKey]
          )
        }
        errorString={formik.errors[newNameKey]}
      />
      <CustomButton
        className="px-2 pt-2 text-white"
        type="submit"
      >
        Submit
      </CustomButton>
    </form>
  )
}

export default DrawLotsForm
