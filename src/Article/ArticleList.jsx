import React from "react";
import ArticleListItem from "../ArticleListItem/ArticleListItem.jsx";

const ArticleList = (props)=>{

    let displayPanel;
    if(props.articleList.length) {
      displayPanel = props.articleList.map((oneArticle)=>(
        <li key={oneArticle.slug}><ArticleListItem article ={oneArticle} /></li>
      ));
    } else {
      displayPanel = <div>here is no data </div>
    }

    return props.articleList.length ? (
      <div>
        <ul>{displayPanel}</ul>
      </div>
    ) : null;
};

export default ArticleList;
