import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Markdown from "./Markdown";
import Axios from "axios";
const useStyles = makeStyles((theme) => ({
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
}));

export default function Main(props) {
  const classes = useStyles();
  const { posts, title } = props;
  const [ hasFetched, setFetched ] = useState(false);
  const [userPosts, setUserPosts] = useState([]);
  useEffect(() => {
    let active = true;
    if(active && !hasFetched) {
      setFetched(true);
      Axios.all(posts.map(post => {
        return Axios.get(post);
      })).then((response) => {
        setUserPosts(response.map(content => content.data));
      });
    }
    return () => {
      active = false;
      Axios.Cancel();
    }
  }, [posts, hasFetched, setFetched, userPosts, setUserPosts])
  return (
    <Grid item xs={12} md={8}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Divider />
      {userPosts.map((post) => (
        <Markdown className={classes.markdown} key={post.substring(0, 40)}>
          {post}
        </Markdown>
      ))}
    </Grid>
  );
}

Main.propTypes = {
  posts: PropTypes.array,
  title: PropTypes.string,
};
