import React from "react";
import Link from "next/link";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import PropertyDetails from "../components/PropertyDetails";
import ChainofCustody from "../components/ChainofCustody";
import DisposalofProperty from "../components/DisposalofProperty";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";


export default function Addproperty() {
  const [value, setValue] = React.useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { data: session, status } = useSession()
  const router = useRouter();
  if (status === "loading") {
    return <p>Loading...</p>;
  }
  if (!session || session === null || session === undefined) {
    router.push("/login");
  }
  return (
    <div>
      <div className="ml-5">
      <button type="button" class="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-lg rounded-xl text-lg px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"><Link href="/">Back</Link></button>
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
                <div>
                  <PropertyDetails/>
                </div>
              </TabPanel>

              <TabPanel value="2">
                <div className="w-15/16">
                  <ChainofCustody/>
                </div>
              </TabPanel>
              <TabPanel value="3">
                <div>
                  <DisposalofProperty/>
                </div>
                </TabPanel>
            </div>
          </TabContext>
        </Box>
      </div>
    </div>
  );
}
