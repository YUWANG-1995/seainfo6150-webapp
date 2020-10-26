import React, {useState} from "react";
import ArticleTextToggleButton from "../ArticleTextToggleButton/ArticleTextToggleButton";
import PropTypes from "prop-types";
import "./ArticleListItem.module.css";

const ArticleListItem = (props) => {

  const [show, setShow] = useState(false);
  const onClick = () => {
    setShow(!show);
  }

  return (
    <div className="display-panel">
      <h2>{props.article.title} </h2>
      {show ? (
          <div>
            <p>{props.article.shortText}</p>
            <time datetime={props.article.timeStamp}>{props.article.displayDate} </time>
          </div>
      ) : (
        <div></div>
      )
    }
    <ArticleTextToggleButton buttonText = {show ? "show less" : "show more"} onClick = {onClick} />
  </div>

);
};

ArticleListItem.propTypes = {
  article: PropTypes.object.isRequired,
};
export default ArticleListItem;
