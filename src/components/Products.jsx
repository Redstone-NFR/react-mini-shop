import { useState } from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActions,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import InfoIcon from "@mui/icons-material/Info";
import { useNavigate } from "react-router-dom";

const initialProducts = [
  {
    id: 1,
    name: "Smartphone",
    price: 599.99,
    description: "Latest model with advanced features",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 2,
    name: "Laptop",
    price: 999.99,
    description: "Powerful performance for work and gaming",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 3,
    name: "Headphones",
    price: 149.99,
    description: "High-quality wireless audio",
    image: "https://via.placeholder.com/300x200",
  },
];

export default function Products() {
  const [products] = useState(initialProducts);
  const navigate = useNavigate();

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Our Products
      </Typography>
      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <Card
              sx={{ height: "100%", display: "flex", flexDirection: "column" }}
            >
              <CardMedia
                component="img"
                height="200"
                image={product.image}
                alt={product.name}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography>
                <Typography variant="h6" color="primary" sx={{ mt: 2 }}>
                  ${product.price}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" startIcon={<ShoppingCartIcon />}>
                  Add to Cart
                </Button>
                <Button
                  size="small"
                  startIcon={<InfoIcon />}
                  onClick={() => navigate(`/details/${product.id}`)}
                >
                  Details
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
