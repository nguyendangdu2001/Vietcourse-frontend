import { Button, Grid } from "@material-ui/core";
import React, { FC } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { AppStateType } from "../../../Redux/reducer";
import { User } from "../../../types/user";
import { useComments } from "../../hooks/useComments";
import CommentForm from "./CommentForm";
import ListComment from "./ListComment";

interface Props {
  className?: string | undefined;
  postId: string;
}

const CommentSection: FC<Props> = ({ className, postId }) => {
  const userStatus = useSelector<AppStateType, User>(({ userStatus }) => userStatus);
  const [listComments, { fetchNextPage, isFetchingNextPage, hasNextPage }] = useComments(postId);
  return (
    <Grid container direction="column" className={className}>
      {hasNextPage && (
        <Button onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
          Xem thêm bình luận
        </Button>
      )}
      {listComments && listComments?.length > 0 && <ListComment comments={listComments} />}
      {userStatus.auth && <CommentForm postId={postId} user={userStatus.userInfo} />}
    </Grid>
  );
};

export default styled(CommentSection)`
  row-gap: 16px;
`;
