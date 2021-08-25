import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { EventDel } from "./EventDel";


const AntSwitch = withStyles((theme) => ({
  root: {
    width: 28,
    height: 16,
    padding: 0,
    display: "flex",
  },
  switchBase: {
    padding: 2,
    color: theme.palette.grey[500],
    "&$checked": {
      transform: "translateX(12px)",
      color: " #262323",
      "& + $track": {
        opacity: 1,
        backgroundColor: "#B7C1B4",
        borderColor: theme.palette.primary.main,
      },
    },
  },
  thumb: {
    width: 12,
    height: 12,
    boxShadow: "none",
  },
  track: {
    border: `1px solid ${theme.palette.grey[500]}`,
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: theme.palette.common.white,
  },
  checked: {},
}))(Switch);

function AddEvent(props) {
  const [state, setState] = React.useState({
    checkedC: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const [DelShow, setEventDel] = React.useState(false);
  return (
    
      <div
        style={{ backgroundColor: "white", border: "3px solid #A3A0A0",borderRadius:"6px" }}
        className="col-sm-6 col-md-3 mx-5 my-2"
      >
        <div className="p-2 d-flex">
          <div className="">
            <Typography component="div" className="p-1">
              <Grid component="label" container alignItems="center" spacing={1}>
                <Grid item>
                  <AntSwitch
                    checked={state.checkedC}
                    onChange={handleChange}
                    name="checkedC"
                  />
                </Grid>
              </Grid>
            </Typography>
          </div>
          <div className=" col-9 text-center">大迎新</div>
          <div className="">
            <div className="mr-2" style={{ float: "right" }}>
              <img
              variant="primary"
              onClick={() => setEventDel(true)}
                src={require("../../../Image/cancel.jpg").default}
                alt="cancel"
                style={{ width: "10px", height: "10px" }}
              />
            </div>
          </div>
        </div>
        <EventDel show={DelShow} onHide={() => setEventDel(false)} />

      </div>
  );
}
export default AddEvent;
