import React from 'react'
import { Item } from '../../store/services/repo/repo.service.types'

const Card: React.FC<Item> = ({ item }) => {
    return (
        <div className="border-gray-500 border-solid border-b-2">
            {item.name}
        </div>
    )
}

export default Card
