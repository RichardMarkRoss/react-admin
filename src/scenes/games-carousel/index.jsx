import Carousel from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";



const gameCarousel = () => {
    
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return(
  <Carousel>
    {/* ROW 1 */}
    <div>
      <Box
        gridColumn="span 3"
        backgroundColor={colors.primary[400]}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        {/* StatBox 1 */}
      </Box>
    </div>
    
    <div>
      <Box
        gridColumn="span 3"
        backgroundColor={colors.primary[400]}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        {/* StatBox 2 */}
      </Box>
    </div>
    
    <div>
      <Box
        gridColumn="span 3"
        backgroundColor={colors.primary[400]}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        {/* StatBox 3 */}
      </Box>
    </div>
    
    <div>
      <Box
        gridColumn="span 3"
        backgroundColor={colors.primary[400]}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        {/* StatBox 4 */}
      </Box>
    </div>
    
    <div>
      <Box
        gridColumn="span 3"
        backgroundColor={colors.primary[400]}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        {/* StatBox 5 */}
      </Box>
    </div>
    
    <div>
      <Box
        gridColumn="span 3"
        backgroundColor={colors.primary[400]}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        {/* StatBox 6 */}
      </Box>
    </div>
  </Carousel>
  );
};

export default gameCarousel;
