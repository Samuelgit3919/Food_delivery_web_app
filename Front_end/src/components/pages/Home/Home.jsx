import React, { useState } from 'react'
import './home.css'
import Header from '../../Header/Header'
import ExploreMenu from '../../ExploreMenu/ExploreMenu'
import FoodDisplays from '../../FoodDisplays/FoodDisplays'
import AppDownload from '../../AppDownload/AppDownload'

const Home = () => {
    const [category, setCategory] = useState('All')
    return (
        <div>
            <Header />
            <ExploreMenu category={category} setCategory={setCategory} />
            <FoodDisplays category={category} />
            <AppDownload />
        </div>
    )
}

export default Home
