export class House {
  constructor(data) {
    this.id = data.id
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.levels = data.levels
    this.imgUrl = data.imgUrl
    this.year = data.year
    this.price = data.price
    this.description = data.description
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
  "_id": "6525d55f32075d75427717d1",
  "bedrooms": 3,
  "bathrooms": 2,
  "levels": 2,
  "imgUrl": "https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
  "year": 2002,
  "price": 400000,
  "description": "House",
  "creatorId": "6525cb6166d31b62bd6021bc",
  "createdAt": "2023-10-10T22:51:11.127Z",
  "updatedAt": "2023-10-10T22:51:11.127Z",
  "__v": 0,
  "creator": {
    "_id": "6525cb6166d31b62bd6021bc",
    "name": "Roald",
    "picture": "https://acnhcdn.com/latest/NpcBromide/NpcNmlPgn01.png",
    "id": "6525cb6166d31b62bd6021bc"
  },
  "id": "6525d55f32075d75427717d1"
}