import { NEWS_API_KEY } from "@env"

const getNews = async () => {
    const apiKey = process.env.NEWS_API_KEY;
    const request = `https://newsdata.io/api/1/news?apikey=${NEWS_API_KEY}&q=(maple-leafs OR nhl OR stanley-cup) NOT basketball NOT nfl NOT football NOT casino&image=1&category=sports&language=en&prioritydomain=top&full_content=1`
    try {
      const response = await fetch(request);
      const news = await response.json();
      return news.results;
    } catch (error) {
      console.error("Error fetching news:", error);
      return [];
    }
  };
  
  export default getNews;
  