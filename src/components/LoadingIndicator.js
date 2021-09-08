import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";

export default function LoadingIndicator() {
  return (
    <Grid
      style={{ height: "100vh" }}
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <CircularProgress size={60} />
      <br />
      Loading...
    </Grid>
  );
}
