import { Button, Slider, Typography } from "@mui/material";

const Settings = () => {
  return (
    <>
      <div className="settings-headers">
        <Typography variant="h5"> Restaurant Settings</Typography>
        <Typography variant="subtitle1">
          Manage your restaurants settings and preferences.
        </Typography>
      </div>
      <div className="settings-cards-wrapper">
        <div className="settings-cards">
          <div className="card-headers">
          <Typography variant="h5">Age Requirement</Typography>
          <Typography variant="subtitle1">
            Configure the minimum age requirement for customers.
          </Typography>
          </div>
          <div className="cards-content">
          <Typography variant="body1">
          Minimum Age Requirement
          </Typography>
          <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto"  color="secondary" />
          <Typography variant="body1">
          Set the minimum age requirement for customers to enter your restaurant.
          </Typography>
          <Button  color="primary" variant="outlined">Save</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
