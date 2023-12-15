
const getRoster = async (team) => {

    const request = `https://api-web.nhle.com/v1/roster/${team}/current`

    try {
        const response = await fetch(request)
        const roster = await response.json()

        return roster
    } catch(error) {
        console.error(error)
        throw error
    }

}

export default getRoster