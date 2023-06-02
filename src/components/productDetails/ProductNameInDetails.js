import React from 'react'
import { Typography } from '@mui/material'


export default function ProductNameInDetails({name, type}) {
  return (
    <Typography variant="h4" color='#6a5acd'>{name}{type}</Typography>

    )
}
