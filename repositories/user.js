//https://randomuser.me/api/
import axios from "axios";

const getUserDetail = async () => {
   try {
    // alert('getUserDetail')
    let response = await axios.get('https://randomuser.me/api')
    if(response.status != 200) {
        throw 'Failed request'
    }
    if(response.data.result.length > 0) {
        let responseUser = response.data.result[0]
        let user = {}
        user.dateOfBirth = new Date(responseUser.dob.date)
        user.email = responseUser.email ?? ''
        user.gender = responseUser.gender ?? 'male' //default value
        user.userId = `${responseUser.id.name}${responseUser.id.value}`
        user.address = `${responseUser.location.state}, ${responseUser.location.street.name}`
        user.username = responseUser.login.username ?? ''
        user.url = responseUser.picture.large ?? ''
        user.phone = responseUser.phone ?? ''
        user.registerDate = new Date(responseUser.registered.date)

        return user
    }
    throw 'User not found'
   } catch(error) {
       throw error
   }
}
const login = (email, password) => {

}

export default {
    getUserDetail,
    login,
}