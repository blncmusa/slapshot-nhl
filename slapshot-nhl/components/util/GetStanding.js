
const getStanding = async () => {

    const request = "https://api-web.nhle.com/v1/standings/now"

    try {
        const response = await fetch(request)
        const standings = await response.json()

        const divisions = {};
        standings.standings.forEach(team => {
            const division = team.divisionName;
            if (!divisions[division]) {
                divisions[division] = [];
            }
            divisions[division].push(team);
        })

        return divisions
    } catch(error) {
        console.error(error)
        throw error
    }

}

export default getStanding