import React from 'react'
import Button from '@mui/material/Button';

interface IProps{
    label : string
}
export const CustomButton = (props: IProps) => {
  return (
    <Button variant="contained">{props.label}</Button>
  )
}
