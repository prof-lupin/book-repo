import React from 'react';
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton, Avatar, Tooltip} from '@material-ui/core';
import {AddShoppingCart} from '@material-ui/icons';
import Rating from '@material-ui/lab/Rating';
import useStyles from './styles';

const Product = ({product}) => {
    const classes = useStyles();
    const authors = product.authors.split('-');
    const nameStr = authors.map((name) => (
        "| " + name + " | "
    ));
    return (
        <Card className={classes.root}>
            <div className={classes.content}>
                <Typography variant='h5' gutterBottom>
                    {product.title}
                </Typography>   
                <div className={classes.grow} />
                <Typography variant='body1'>
                    INR {product.price}
                </Typography>
            </div>
            <div className={classes.content}>
                <Typography variant="body2">
                    {nameStr}
                </Typography>
                <div className={classes.grow} />
                <Rating value={product.average_rating} readOnly max={5} precision={0.2} />
                <Typography variant="body2">
                    ({product.ratings_count})
                </Typography>
            </div>
            <CardActions disableSpacing className={classes.cardActions}>
                <Tooltip title="Add to cart" arrow>
                    <IconButton aria-label="Add to Cart">
                        <AddShoppingCart />
                    </IconButton>
                </Tooltip>
            </CardActions>
        </Card>
    );
}

export default Product;