import styles from "./CommonPageLayout.module.css";
import { useSelector, useDispatch } from "react-redux";
import { Navbar, NewsCard } from "../components";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { NEWS_REDUCER_CASES } from "../store/reducers";
import { fetchMovies } from "../store/actions";

function SearchResultPage() {
  const newsReducer = useSelector((state) => state);
  const dispatch = useDispatch();
  const { keyword } = useParams();

  useEffect(() => {
    const query = {
      q: keyword,
    };
    dispatch(fetchMovies(query));
  }, [keyword, dispatch]);

  return (
    <main>
      <Navbar />
      <section className={styles.pageContainer}>
        <section>
          <h1>Search Results for "{keyword}"</h1>
        </section>
        <section className={styles.newsContainer}>
          {newsReducer.news.length > 0 ? (
            newsReducer.news.map((n, i) => {
              const { headline, abstract, source, byline, web_url } = n;
              return (
                <NewsCard
                  key={n._id}
                  headline={headline.main}
                  abstract={abstract}
                  source={source}
                  author={byline?.original || "Unknown Author"}
                  onViewNewDetail={() => {
                    window.open(web_url, "_blank", "noopener,noreferrer");
                  }}
                  onSave={() => {
                    dispatch({
                      type: NEWS_REDUCER_CASES.SAVE_NEWS,
                      news: n,
                    });
                  }}
                />
              );
            })
          ) : (
            <p>No results found for "{keyword}".</p>
          )}
        </section>
      </section>
    </main>
  );
}

export default SearchResultPage;
