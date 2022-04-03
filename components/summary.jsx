import Grid from '@mui/material/Grid'
import SubTitle from './common/sub-title'
import Paragraph from './common/paragraph'

import Image from 'next/image'

export const Summary = () => {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12} md={6}>
        </Grid>

      </Grid>
    </>
  )
}

export default Summary