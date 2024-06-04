import {combineReducers} from "redux";
import inquiryReducer from "./InquiryModules";
import memberReducer from "./MemberModules";
import noticeReducer from "./NoticeModules";
import AdminMemberReducer from "./AdminMemberModules";
import sellerReducer from "./SellerModules";
import AdminCategoryReducer from "./AdminCategoryModules";

const rootReducer = combineReducers({
    inquiryReducer, memberReducer, sellerReducer, noticeReducer, AdminMemberReducer, category :AdminCategoryReducer
});

export default rootReducer;