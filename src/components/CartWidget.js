import React from "react";
import IconButton from '@material-ui/core/IconButton';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import {Link} from "react-router-dom";

function CartWidget( props ) {
    return (
        <Link to={"/cart"}><IconButton id={props.id} edge="start" aria-label="menu">
            <LocalMallOutlinedIcon />
          </IconButton></Link>
    )
}

export default CartWidget
