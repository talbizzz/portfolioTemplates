import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

const Item = withStyles({
    switchBase: {
        color: "#23150C",
        '&$checked': {
            color: "#465964",
        },
        '&$checked + $track': {
            backgroundColor: "white",
        },
    },
    checked: {},
    track: {},
})(Switch);

export default function SwitchButton({onClick}){
    const [state, setState] = React.useState({
        checkedA: true
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (
        <FormGroup>
            <FormControlLabel
                control={<Item checked={state.checkedA} onChange={handleChange} onClick={onClick} name="checkedA" on/>}
                label="🌙"
            />
        </FormGroup>
    );
}