const getSpecificPlayerInfo = async (playerId) => {
    
        const request = `https://api-web.nhle.com/v1/player/${playerId}/landing`
    
        try {
            const response = await fetch(request)
            const player = await response.json()
    
            return player
        } catch(error) {
            console.error(error)
            throw error
        }
    
    }

export default getSpecificPlayerInfo


