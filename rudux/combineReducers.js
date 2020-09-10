import {combineReducers} from 'redux'
import home from '../view/Home/redux/reducer'
import detail from '../view/Detail/redux/reducer'
import user from '../view/User/redux/reducer'
//聚合reducer
export default combineReducers({
    home,detail,user
})
