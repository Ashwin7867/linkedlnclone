import {ADD_FEED_DATA, ALTER_FEED_LIKE, ADD_FEED_COMMENT} from "../actionType";
import uuid from "react-native-uuid";

const initialState = {
    feedList : [
        {
            id : uuid.v4(),
            name : "Captain America",
            title : "Avengers",
            description : "creas/her feed User should be able to view his/her profile page with all the details and tweets.",
            images : [],
            liked : false,
            comments : ["Comment"]
        }
    ]
}

export const feedReducer = (state =initialState, action) => {
    switch(action.type){
        case ADD_FEED_DATA :{
            return {
                ...state,
                feedList : [
                    action.payload,
                    ...state.feedList,
                ]
            }
        }
        case ALTER_FEED_LIKE : {
            return {
                ...state,
                feedList : state.feedList.map((item) => {
                    if(action.payload.feedId===item.id){
                        return {
                            ...item,
                            liked : action.payload.flag
                        }
                    }else{
                        return item
                    }
                })
            }
        }
        case ADD_FEED_COMMENT : {
            return {
                ...state,
                feedList : state.feedList.map((item) => {
                    if(action.payload.feedId===item.id){
                        return {
                            ...item,
                            comments : [
                                action.payload.data,
                                ...item.comments, 
                            ]
                        }
                    }else{
                        return item
                    }
                })
            }
        }
        default : {
            return state
        }
    }
}