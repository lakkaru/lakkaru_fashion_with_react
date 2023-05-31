import { Typography } from '@mui/material'
import React from 'react'

export default function ProductName({name, type}) {
  return (
    <Typography>{name} <strong>{type}</strong></Typography>
  )
}
