import React from 'react';
import Snackbar from 'material-ui/Snackbar';
import IconButton from 'material-ui/IconButton';
import CloseIcon from 'material-ui-icons/Close';

export const Warning = (props) => (
  <Snackbar
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    open={props.warning.open}
    onRequestClose={props.handleWarningClose}
    SnackbarContentProps={{
      'aria-describedby': 'message-id',
    }}
    message={<span id="message-id">{props.warning.message}</span>}
    action={[
      <IconButton
        key="close"
        aria-label="Close"
        color="inherit"
        onClick={props.handleWarningClose}
      >
        <CloseIcon />
      </IconButton>,
    ]}
  />
)

export default Warning;