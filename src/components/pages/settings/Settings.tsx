import {
  Button,
  FormControl,
  Select,
  Slider,
  Stack,
  Typography,
  MenuItem,
} from "@mui/material";

const Settings = () => {
  return (
    <>
      <Stack direction="column" width="100%">
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
              <Typography variant="body1">Minimum Age Requirement</Typography>
              <Slider
                defaultValue={50}
                aria-label="Default"
                valueLabelDisplay="auto"
                color="secondary"
              />
              <Typography variant="body1">
                Set the minimum age requirement for customers to enter your
                restaurant.
              </Typography>
              <Button color="primary" variant="outlined">
                Save
              </Button>
            </div>
          </div>
          {/* replace this with arrays */}
          <div className="settings-cards">
            <div className="card-headers">
              <Typography variant="h5">Operating Hours</Typography>
              <Typography variant="subtitle1">
                Set the hours your restaurant is open for business.
              </Typography>
            </div>
            <div className="cards-content">
              <Typography variant="body1">Open Time</Typography>
              <Typography variant="body2">
                Set the time your restaurant opens for the day.
              </Typography>
              <Typography variant="body1">Close Time</Typography>
              <Typography variant="body2">
                Set the time your restaurant closes for the day.
              </Typography>
              <Button color="primary" variant="outlined">
                Save
              </Button>
            </div>
          </div>
          {/* replace this with arrays */}
          <div className="settings-cards">
            <div className="card-headers">
              <Typography variant="h5">Customer Engagement</Typography>
              <Typography variant="subtitle1">
                Send email to notify customers.
              </Typography>
            </div>
            <div className="cards-content">
              <Typography
                variant="body1"
                sx={{ marginTop: "1em", marginBottom: "0.2em" }}
              >
                Select Type
              </Typography>
              <FormControl fullWidth sx={{ marginBottom: "1em" }}>
                <Select sx={{ height: "3em" }}>
                  <MenuItem value={10}>Discounted Offers</MenuItem>
                  <MenuItem value={20}>Price Updates</MenuItem>
                  <MenuItem value={30}>Menue Updates</MenuItem>
                </Select>
              </FormControl>
              <Typography variant="body2">
              Choose what type of notifications to send customers.
              </Typography>
              <Button color="primary" variant="outlined">
                Send Email
              </Button>
            </div>
          </div>
        </div>
      </Stack>
    </>
  );
};

export default Settings;
