import React, { useEffect, useState } from "react";
import NewsItems from "./NewsItems";
import Spinner from "./spinner";
import PropTypes from "prop-types";

const News = (props) => {
  const [robots, setRobots] = useState([]);
  const [loading, setLoading] = useState(false);

  News.defaultProps = {
    country: "in",
    category: "sports",
  };

  News.propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
  };

  const updateNews = async () => {
    console.log("cdm");
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=4890483580d94617a7f534f52f02b89c`;
    try {
      setLoading(true);
      let data = await fetch(url);
      let parsedata = await data.json();
      console.log(parsedata);
      setRobots(parsedata.articles);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };
  useEffect(() => {
    updateNews();
  }, []);

  return (
    <>
      <div className="container my-4">
        <h1 className="text-center" style={{ margin: "70px 0px 10px 0px" }}>
          TOP HEADLINES
        </h1>
        {loading && <Spinner Loading={"https://i.gifer.com/74H8.gif"} />}
        <div className=" col-md-12">
          {!loading &&
            robots.map((robot) => (
              <div
                className="col-md-4 "
                key={robot.title}
                style={{ margin: "10px px 10px 0px" }}
              >
                <NewsItems
                  title={robot.title ? robot.title.slice(0, 25) : ""}
                  content={robot.content ? robot.content.slice(0, 25) : ""}
                  urlToImage={robot.urlToImage}
                  author={robot.author ? robot.author.slice(0, 20) : "..."}
                  url={robot.url}
                />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};
export default News;
