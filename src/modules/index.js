import {combineReducers} from "redux";
import inquiryReducer from "./InquiryModules";
import memberReducer from "./MemberModules";
import noticeReducer from "./NoticeModules";
import AdminMemberReducer from "./AdminMemberModules";
import AdminCategoryReducer from "./AdminCategoryModules";
import AdminReportReducer from "./AdminReportModules";
import ReportReducer from "./ReportModules";
import productReducer from "./ProductModules";
import optionReducer from "./ProductOptionModules";
import sellerReducer from "./SellerModules";

const rootReducer = combineReducers({
    inquiryReducer,
    memberReducer,
    sellerReducer,
    productReducer,
    optionReducer,
    noticeReducer,
    AdminMemberReducer,
    category: AdminCategoryReducer,
    orderReducer,
    AdminReportReducer,
    ReportReducer,
    applyReducer

});

export default rootReducer;