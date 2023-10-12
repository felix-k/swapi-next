import { Box, LinearProgress, Skeleton } from "@mui/material";

const Placeholder = () => {
  return (
    <>
      <Box sx={{ position: "relative" }}>
        <LinearProgress sx={{ position: "absolute", width: 1 }} />
      </Box>
      <Box sx={{ p: 2 }}>
        <Skeleton sx={{ my: 2 }} animation={false} />
        <Skeleton sx={{ my: 2 }} animation={false} />
        <Skeleton sx={{ my: 2 }} animation={false} />
      </Box>
    </>
  );
};

export default Placeholder;
