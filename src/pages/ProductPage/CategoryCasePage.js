import React from 'react'
import { useLocation } from 'react-router-dom'
import Filter from './Filter'
const CategoryCasePage = () => {
    const location = useLocation();
    console.log(location.pathname);
  
    return (
        <div>
        <Filter></Filter>
        </div>
    )
}

export default CategoryCasePage
