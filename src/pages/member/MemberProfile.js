import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {callProfileAPI} from "../../apis/MemberAPICalls";
import MemberProfileItem from "../../components/items/MemberProfileItem";

function MemberProfile() {

    const dispatch = useDispatch();
    const {profileInfo} = useSelector(state => state.memberReducer);

    useEffect(() => {
        dispatch(callProfileAPI());
    }, []);

    return(
        <>
            {
                profileInfo && <MemberProfileItem profileInfo={profileInfo}/>
            }
        </>
    );
}

export default MemberProfile;