import { Box } from "@mui/material";

import Sidebar from "../sidebar/Sidebar";
import Toolbar from "../toolbar/Toolbar";
import Canvas from "../canvas/Canvas";
import PropertyPanel from "../property-panel/PropertyPanel";

export default function AppLayout() {

    return (

        <Box
            sx={{
                height: "100vh",
                display: "flex",
                flexDirection: "column"
            }}
        >

            <Toolbar />

            <Box
                sx={{
                    flex: 1,
                    display: "flex"
                }}
            >

                <Sidebar />

                <Canvas />

                <PropertyPanel />

            </Box>

        </Box>

    );

}