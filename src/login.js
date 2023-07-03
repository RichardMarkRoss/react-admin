import { Box, Button, useTheme, Typography} from "@mui/material";
import React from "react";
import InputBase from "@mui/material/InputBase";
import { tokens } from "./theme";

const Login = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <Box
          gridColumn="span 5"
          backgroundColor={colors.primary[600]}
          display="flex"
          alignItems="center"
          height="60%"
          width="30%"
          justifyContent="center"
        >
        <form>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Box
              display="flex"
              backgroundColor={colors.primary[400]}
              borderRadius="3px"
              mb={2}
            >
              <InputBase sx={{ ml: 2, flex: 1, color:colors.primary[100]}} placeholder="Email*" />
            </Box>
            <Box
              display="flex"
              backgroundColor={colors.primary[400]}
              borderRadius="3px"
              mb={2}
            >
              <InputBase sx={{ ml: 2, flex: 1, color:colors.primary[100]}} placeholder="Password*" />
            </Box>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Box>
        </form>
        </Box>
      </Box>      
    );
}

export default Login;