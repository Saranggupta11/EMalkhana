import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

export default function Addproperty() {
  const [value, setValue] = React.useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <div className="ml-5">
        <Stack spacing={2} direction="row">
          <Button variant="contained">Back</Button>
        </Stack>
      </div>

      <div className="mt-8 flex">
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <div className="flex justify-center ">
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                >
                  <Tab label="Property Details" value="1" />
                  <Tab label="Chain of Custody" value="2" />
                  <Tab label="Disposal of Property" value="3" />
                </TabList>
              </div>
            </Box>
            <div className="flex justify-center">
              <TabPanel value="1">
                <div></div>
              </TabPanel>

              <TabPanel value="2">Item Two</TabPanel>
              <TabPanel value="3">Item Three</TabPanel>
            </div>
          </TabContext>
        </Box>
      </div>
    </div>
  );
}
