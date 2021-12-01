import React, { Fragment } from 'react'
import CardBlog from './Cards/CardBlog'
import CardProductos from './Cards/CardProductos'
import CarouselTienda from './Carousel/CarouselTienda'
import FooterTienda from './Footer/FooterTienda'

const Home = () => {
    return (
        <Fragment>
            <CarouselTienda />
            <CardProductos />
            <CardBlog />
            <FooterTienda />
        </Fragment>
    )
}

export default Home
