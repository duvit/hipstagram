import { useState } from "react";

import UserBadge from "../UserBadge";
import Comment from "../Comment"

import "./style.css"

const DetailedCard = ({
    userName,
    avatarUrl,
    userId,
    imgUrl,
    likes,
    isLikedByYou,
    comments
}) => {
    const [isCommentsShown, setIsCommentsShown] = useState(false);

    const renderComments = () => {
        if (comments.length > 2 && !isCommentsShown) {
            const commentsCopy = [...comments];
            const commentsForRender = commentsCopy.splice(comments.lenght - 2, 2)

            return (
                <>
                    <span className="detailedCardCommetTitle" onClick={() => setIsCommentsShown(true)}>{`View more ${comments.length - commentsForRender.length} comments`}</span>
                    {commentsForRender.map((comment) => <Comment {...comment} />)}
                </>
            )
        }

        return comments.map((comment) => <Comment {...comment} />)
    };

    return (
        <div className="detailedCardRoot">
            <div className="detailedCardHeader">
                <UserBadge nickName={userName} avatarUrl={avatarUrl} id={userId} />
            </div>
            <div>
                <img src={imgUrl} alt="" className="detailedCardImg" />
            </div>
            <div className="detailedCardBtns">
                <i className={`${isLikedByYou ? "fas" : "far"} fa-heart detailedCardLikeIcon`} />
                <i className={`${comments ? "fas" : "far"} fa-comment detailedCardCommentIcon`} />
            </div>
            <div className="detailedCardLikes">
                {`Liked by ${likes} people`}
            </div>
            <div className="detailedCardComments">
                {renderComments()}
            </div>
            <textarea className="detailedCardTextArea"></textarea>
        </div>
    )
}

export default DetailedCard;