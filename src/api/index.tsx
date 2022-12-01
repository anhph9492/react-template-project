export const API_PARAM = {
    USER_ID : `$$USER_ID$$`
}

const API = {
    // auth
    LOGIN : '/api/auth/local',

    // user
    GET_USER : `/api/users/${API_PARAM.USER_ID}?populate=*`,
    
    // student
    GET_STUDENTS : `/api/students?populate=*`
    
}

export default API