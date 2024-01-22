const getScores = async () => {

    // get date in this forma YYYY-MM-DD
    const todayDate = new Date().toISOString().slice(0, 10);
    const yesterdayDate = new Date(new Date().setDate(new Date().getDate() - 1)).toISOString().slice(0, 10);

    const baseURl = `https://api-web.nhle.com/v1/score/${yesterdayDate}`

    try {
        const response = await fetch(baseURl);
        const scores = await response.json();
        return scores;
    } catch(error){
        console.error("Error fetching scores:", error);
        return {
            results: []
        };
    }
}

export default getScores;