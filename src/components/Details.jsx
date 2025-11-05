import { useParams } from "react-router-dom";
import { Container, Paper, Typography, Box, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

export default function Details() {
  const { id } = useParams();
  const navigate = useNavigate();

  // This would typically fetch product details from an API
  const product = {
    id: parseInt(id),
    name: "Product Name",
    price: 599.99,
    description:
      "Detailed product description would go here. This would typically be fetched from an API based on the product ID.",
    features: [
      "Feature 1: High quality materials",
      "Feature 2: Long lasting battery",
      "Feature 3: Premium design",
      "Feature 4: 1 year warranty",
    ],
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Button
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate("/products")}
        sx={{ mb: 4 }}
      >
        Back to Products
      </Button>

      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          {product.name}
        </Typography>

        <Typography variant="h5" color="primary" gutterBottom>
          ${product.price}
        </Typography>

        <Typography variant="body1" paragraph>
          {product.description}
        </Typography>

        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" gutterBottom>
            Features:
          </Typography>
          {product.features.map((feature, index) => (
            <Typography key={index} variant="body1" sx={{ mb: 1 }}>
              • {feature}
            </Typography>
          ))}
        </Box>
      </Paper>
    </Container>
  );
}
