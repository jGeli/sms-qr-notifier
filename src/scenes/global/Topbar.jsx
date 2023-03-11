import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { Link } from "react-router-dom";


const Topbar = ({setIsCollapsed}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* SEARCH BAR */}
   
        {/* <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton> */}
              <Box
              display="flex"
              backgroundColor={colors.primary[400]}
              borderRadius="3px"
                // ml="15px"
              >
                {/* <Typography variant="h3" color={colors.grey[100]}>
                  ADMINS
                </Typography> */}
                <IconButton onClick={setIsCollapsed}
            
                >
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>

      {/* ICONS */}
      <Box display="flex">
        {/* <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton> */}
        <IconButton
            component={Link}
            to="/qr-scanner"
        >
        <QrCodeScannerIcon/>
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
