import {ADD_FEED_DATA, ALTER_FEED_LIKE, ADD_FEED_COMMENT} from "../actionType"

export const addFeedData = (data) => {
    return {
        type : ADD_FEED_DATA,
        payload : data
    }
}

export const addFeedComment = (feedId, data) => {
    return {
        type : ADD_FEED_COMMENT,
        payload : {
            feedId,
            data
        }
    }
}

export const alterFeedLike = (feedId, flag) => {
    return {
        type : ALTER_FEED_LIKE,
        payload : {
            feedId,
            flag
        }
    }
}