import { ROLES, User } from "../01-new-types/02-enums";


const currentUser: User = {
  username: "karla",
  roles: ROLES.SELLER
}

const checkAdminRoles = () => {
  if (currentUser.roles === ROLES.ADMIN) {
    return true
  }
  return false
}

const respuesta = checkAdminRoles()
//console.log("checkAdminRoles:", respuesta)


const checkRole = (role1: string, role2: string) => {
  if (currentUser.roles === role1) {
    return true
  }
  if (currentUser.roles === role2) {
    return true
  }
  return false
}

const respuesta2 = checkRole(ROLES.ADMIN, ROLES.SELLER)
//console.log("checkRole:", respuesta2)


const checkRoleMul = (role: string[]) => {
  if (role.includes(currentUser.roles)) {
    return true
  }
  return false
}

const respuesta3 = checkRoleMul([ROLES.ADMIN, ROLES.CUSTOMER, ROLES.SELLER])
//console.log("checkRoleMul:", respuesta3)


//Parametros Rest

const checkRoleMul2 = (...role: string[]) => {
  if (role.includes(currentUser.roles)) {
    return true
  }
  return false
}

const respuesta4 = checkRoleMul2(ROLES.ADMIN, ROLES.CUSTOMER, ROLES.SELLER)
console.log("checkRoleMul:", respuesta4)
