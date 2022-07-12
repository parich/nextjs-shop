import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from '@mui/material';

import Image from 'next/image';
import Layout from '../components/Layout';
import data from '../utils/data';

export default function Home() {
  return (
    <Layout>
      <div>
        <h1>Products</h1>

        <Grid container spacing={3}>
          {data.products.map((product) => (
            <Grid item md={4} key={product.name}>
              <Card>
                <CardActionArea>
                  <Image
                    src={product.image}
                    alt={product.name}
                    title={product.name}
                    width={500}
                    height={500}
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      {product.name}
                    </Typography>
                  </CardContent>
                </CardActionArea>

                <CardActions>
                  <Typography>{product.price}</Typography>
                  <Button size="small">Add to cart</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </Layout>
  );
}
