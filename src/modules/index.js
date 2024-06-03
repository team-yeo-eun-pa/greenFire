import {combineReducers} from "redux";
import inquiryReducer from "./InquiryModules";
import memberReducer from "./MemberModules";
import noticeReducer from "./NoticeModules";
import AdminMemberReducer from "./AdminMemberModules";
import productReducer from "./ProductModules";

const rootReducer = combineReducers({
    inquiryReducer, memberReducer, noticeReducer, AdminMemberReducer, productReducer
});

export default rootReducer;