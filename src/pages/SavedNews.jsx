import styles from "./CommonPageLayout.module.css";
import { useSelector, useDispatch } from "react-redux";
import { Navbar, NewsCard } from "../components";
import { NEWS_REDUCER_CASES } from "../store/reducers";

function SavedNewsPage() {
  const newsReducer = useSelector(function (state) {
    return state;
  });
  const dispatch = useDispatch();

  return (
    <main>
      <Navbar />
      <section className={styles.pageContainer}>
        <section>
          <h1>Saved News</h1>
        </section>
        <section className={styles.newsContainer}>
          {newsReducer.savedNews.map((n, i) => {
            const { headline, abstract, source, byline, web_url} = n;
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
                showUnsave={true}
                onUnsave={() => {
                  dispatch({
                    type: NEWS_REDUCER_CASES.UNSAVE_NEWS,
                    newsId: n._id,
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

export default SavedNewsPage;
