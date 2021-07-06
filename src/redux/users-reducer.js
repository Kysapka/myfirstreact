const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState =  {
     users: [
             // {id: 1, photoUrl: "https://едем.рф/upload/thumbs/2020/10/05/2e0ff17ee6e225f4ca1c7829fb4dbd3e-256x256-crop.jpg", followed: false, fullName: "Dmitry", status: "I am s boss", location: {city: "Minsk", country: "Belarus"} },
             // {id: 2, photoUrl: "https://едем.рф/upload/thumbs/2020/10/05/2e0ff17ee6e225f4ca1c7829fb4dbd3e-256x256-crop.jpg", followed: true,  fullName: "Sasha", status: "I am s boss too", location: {city: "Moscow", country: "Russia"} },
             // {id: 3, photoUrl: "https://едем.рф/upload/thumbs/2020/10/05/2e0ff17ee6e225f4ca1c7829fb4dbd3e-256x256-crop.jpg", followed: false,  fullName: "Andrew", status: "I am s boss too", location: {city: "Kiev", country: "Ukraine"} },
             ]
};

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW:
            return  {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                } )
            }
        case UNFOLLOW:
            return  {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                } )
            }
        case SET_USERS: {
            return { ...state, users: [...state.users, ...action.users]}
        }
        default:
            return state;
    }
}

export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersAC = (users) => ({ type: SET_USERS, users })

export default usersReducer;