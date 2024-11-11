type color = 'green' | 'blue'

export enum ROLES {
  ADMIN = "admin",
  SELLER = "seller",
  CUSTOMER = "customer"
}

export type User = {
  username: string,
  roles: ROLES
}


const karlaUser: User = {
  username: 'Karla',
  roles: ROLES.CUSTOMER
}