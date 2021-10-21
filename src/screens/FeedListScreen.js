import React , {useState} from "react";
import { ScrollView, StyleSheet } from "react-native";
import {connect} from "react-redux"
import FeedCard from "../components/FeedCard";

const FeedListScreen = (props) =>  {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            {props?.feedList?.map((item,index) => {
                return (
                    <FeedCard data={item} 
                        key={index} />
                )
            })}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container : {
        // flex :1,
    }
})
const mapDispatchToProps = {}

const mapStateToProps = (state) => {
    const {feedList} = state.feedReducer;
    return {
        feedList
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FeedListScreen)