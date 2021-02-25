import { Grid } from "@material-ui/core";
import React, { FC } from "react";
import styled from "styled-components";
import Post from "../../common/components/post/Post";
import { usePosts } from "../../common/hooks";

interface Props {
  className?: string | undefined;
}

const PostSection: FC<Props> = ({ className }) => {
  const [posts] = usePosts();
  return (
    <Grid container direction="column" className={className}>
      {posts && posts.map((post) => <Post key={post._id} {...post} />)}
    </Grid>
  );
};

export default styled(PostSection)`
  row-gap: 16px;
`;
