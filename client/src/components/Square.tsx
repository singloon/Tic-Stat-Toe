import React from 'react'
import { DefaultButton } from 'office-ui-fabric-react'
import { SquareValue } from '../types'

interface ISquareProps {
  id: number
  value: SquareValue
  selectSquare: (id: number) => void
}

const styles = {
  square: {
    root: {
      width: 50,
      height: 50,
    },
  },
}

export const Square = (props: ISquareProps) => {
  const { id, value, selectSquare } = props
  return (
    <DefaultButton
      styles={styles.square}
      id={`${id}`}
      text={value || ''}
      onClick={() => {
        selectSquare(id)
      }}
    />
  )
}
