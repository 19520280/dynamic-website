import React from 'react'
import { useLocation } from 'react-router-dom'
import Breadcrumnbs from '../../components/Breadcrumbs/Breadcrumbs'

const CategoryCasePage = () => {
    const location = useLocation();
    console.log(location.pathname);
  
    return (
        <div>
        </div>
    )
}

export default CategoryCasePage
