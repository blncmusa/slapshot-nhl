import { NEWS_API_KEY } from "@env"

const getNews = async (nextPage = null) => {
  const apiKey = process.env.NEWS_API_KEY;

  const baseUrl = `https://newsdata.io/api/1/news?apikey=${NEWS_API_KEY}&q=(maple-leafs OR nhl OR stanley-cup) NOT basketball NOT irish NOT nfl NOT football NOT ufc NOT casino NOT baseball&image=1&category=sports&language=en&prioritydomain=top&full_content=1`;

  const request = nextPage ? `${baseUrl}&page=${nextPage}` : baseUrl;

  try {
    const response = await fetch(request);
    const news = await response.json();

    const next = news.nextPage !== undefined ? news.nextPage : null;

    return {
      results: news.results,
      nextPage: next,
    };
  } catch (error) {
    console.error("Error fetching news:", error);
    return {
      results: [],
      nextPage: null,
    };
  }
};

export default getNews;
