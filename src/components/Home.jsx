import { Container, Typography, Paper, Box } from "@mui/material";
import StorefrontIcon from "@mui/icons-material/Storefront";

export default function Home() {
  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ p: 4, mt: 4, textAlign: "center" }}>
        <Box sx={{ mb: 4 }}>
          <StorefrontIcon sx={{ fontSize: 60, color: "primary.main" }} />
        </Box>
        <Typography variant="h3" component="h1" gutterBottom>
          Welcome to Mini Shop
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          Your One-Stop Shop for Amazing Products
        </Typography>
        <Typography variant="body1" paragraph>
          Browse through our collection of carefully selected items. Each
          product comes with detailed information and high-quality images.
        </Typography>
      </Paper>
    </Container>
  );
}
