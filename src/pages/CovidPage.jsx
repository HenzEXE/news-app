import styles from "./CommonPageLayout.module.css";
import { useSelector, useDispatch } from "react-redux";
import { Navbar, NewsCard } from "../components";
import { useEffect } from "react";
import { NEWS_REDUCER_CASES } from "../store/reducers";
import { fetchMovies } from "../store/actions";

function CovidPage() {
    const newsReducer = useSelector(function (state) {
        return state;
      });
      const dispatch = useDispatch();
    
      useEffect(() => {
        console.log("#1 useEffect()");
        const query = {
          q: "Covid",
          fq: `glocations:("Indonesia")`,
        };
        dispatch(fetchMovies(query));
      }, []);
    
      return (
        <main>
          <Navbar />
          <section className={styles.pageContainer}>
            <section>
              <h1>Covid Page</h1>
            </section>
            <section className={styles.newsContainer}>
              {newsReducer.news.map((n, i) => {
                const { headline, abstract, source, byline, web_url } = n;
                return (
                  <NewsCard
                    key={n._id}
                    headline={headline.main}
                    abstract={abstract}
                    source={source}
                    author={byline.original}
                    onViewNewDetail={() => {
                      console.log(web_url)
                      window.open(web_url, "_blank", "noopener,noreferrer")
                    }}
                    onSave={() => {
                      dispatch({
                        type: NEWS_REDUCER_CASES.SAVE_NEWS,
                        news: n,
                      });
                    }}
                  />
                );
              })}
            </section>
          </section>
        </main>
      );
    }
    

export default CovidPage;