import React from "react";
import Comment from "./Comment"

function CommentList(props) {
    return (
        <div>
            <Comment name={"임해준"} comment={"안녕하세요. 임해준입니다."} />
            <Comment name={"임해준2"} comment={"안녕하세요. 임해준2입니다."} />
            <Comment name={"임해준3"} comment={"안녕하세요. 임해준3입니다."} />
        </div>
    )
}


export default CommentList;