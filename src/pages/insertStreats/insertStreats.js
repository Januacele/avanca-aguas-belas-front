import React, { useState } from 'react'
import GridWrapper from '../../common/gridWrapper/GridWrapper'
import BasicSnackbar from '../../common/basicSnackbar/basicSnackbar';
import UserTable from '../../components/UserTable/UserTable';
import BasicCard from '../../common/basicCard/BasicCard';

export const InsertStreats = () => {
  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

    return (
      <GridWrapper>
        <BasicCard 
          content={<UserTable onError={() => setOpen(true)} />}
        />
        <BasicSnackbar
          open={open}
          severity="error"
          message="Data couldn't be fetched"
          onClose={handleClose}
        />
      </GridWrapper>
    )
}

export default InsertStreats
