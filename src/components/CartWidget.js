import React from "react";
import IconButton from '@material-ui/core/IconButton';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';

function CartWidget( props ) {
    return (
        <IconButton id={props.id} edge="start" aria-label="menu">
            <LocalMallOutlinedIcon />
          </IconButton>
    )
}

export default CartWidget
