import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: 'white',
    },
}));

const OpenableImage = ({image, caption}) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen(!open);
    };
    return(
        <div>
            <button className="pointer grow no-underline dib bg-white" onClick={handleToggle} style={{border:"0px"}} >
                <img className=""src={image} alt=""/>
            </button>
            <div class="bg-image">
                <Backdrop
                    className={classes.backdrop}
                    open={open}
                    onClick={handleClose}
                    style={{ background:"black"}}
                >
                    {/*<div className="tr pt3 pr3"
					  style={{background: `url(${image}) top center no-repeat`, width: "100%", height: "100%"}}>
					<p className="baskerville washed-red">{caption}</p>
				</div>*/}
                    <img src={image} alt="img" style={{maxWidth:"100%", maxHeight:"100%" }} />
                    <p className="w-200 fl baskerville washed-red" style={{position:"absolute", bottom:"8px", right:"16px"}}>{caption}</p>
                </Backdrop>
            </div>
        </div>
    )
}

export default OpenableImage