export class Car {
  constructor(data) {
    this.id = data.id
    this.make = data.make
    this.model = data.model
    this.imgUrl = data.imgUrl
    this.year = data.year
    this.price = data.price
    this.color = data.color || '#7ed957'
    this.engineType = data.engineType
    this.createdAt = new Date(data.createdAt)
    this.updatedAt = new Date(data.updatedAt)
    this.creatorId = data.creatorId
    this.creatorName = data.creator.name
    this.creatorPicture = data.creator.picture
  }

  get priceAsCurrency() {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(this.price)
  }
}

const data = {
  "_id": "65de4eba5f4a3c3a82a443e0",
  "make": "Mazda",
  "model": "Miata",
  "imgUrl": "https://images.unsplash.com/photo-1610884461690-e802d880e527?q=80&w=2225&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "year": 2006,
  "price": 6000,
  "color": "#bb2525",
  "engineType": "4 cylinder",
  "creatorId": "65cbb95116a7a090592a9bf3",
  "createdAt": "2024-02-27T21:06:02.035Z",
  "updatedAt": "2024-02-27T21:06:02.035Z",
  "__v": 0,
  "creator": {
    "_id": "65cbb95116a7a090592a9bf3",
    "name": "Sam's Mom's cupacakes",
    "picture": "https://images.unsplash.com/photo-1595257841889-eca2678454e2?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "id": "65cbb95116a7a090592a9bf3"
  },
  "id": "65de4eba5f4a3c3a82a443e0"
}