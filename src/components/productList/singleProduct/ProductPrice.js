import { Typography } from '@mui/material'
import React from 'react'
import { priceValueFormat } from '../../../util/functions'

export default function ProductPrice({price}) {
  return (
    <Typography sx={{fontWeight:'bold'}}>{priceValueFormat(price)}</Typography>
  )
}
