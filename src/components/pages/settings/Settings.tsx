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
              <div className="cards-content">
                <div className="add-member-points">
                  <ul>
                    <li>
                      <p>
                        Easily set and update your restaurants operating hours.
                      </p>
                    </li>
                    <li>
                      <p>Customize hours for special events and holidays.</p>
                    </li>
                    <li>
                      <p>
                        Sync operating hours across all locations seamlessly.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
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
                Enhance customer engagement by keeping them informed with
                personalized emails about special promotions, new menu items,
                and upcoming events.
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
          {/* replace this with arrays */}
          <div className="settings-cards">
            <div className="card-headers">
              <Typography variant="h5">Staff Members</Typography>
              <Typography variant="subtitle1">
                Manage your restaurants staff members, including their roles and
                contact information.
              </Typography>
            </div>
            <div className="cards-content">
              <div className="add-member-points">
                <ul>
                  <li>
                    <p>
                      {" "}
                      Quickly add new staff profiles with essential details.
                    </p>
                  </li>
                  <li>
                    <p>Assign roles and permissions effortlessly.</p>
                  </li>
                  <li>
                    <p>
                      Streamline onboarding with automated training modules.
                    </p>
                  </li>
                </ul>
              </div>
              <Button color="primary" variant="outlined">
                Add member
              </Button>
            </div>
          </div>
        </div>
      </Stack>
    </>
  );
};

export default Settings;
