const getAssistStatLeaders = async () => {

    const year = new Date().getFullYear();
    const nextYear = year + 1;


    const response = await fetch(`https://api-web.nhle.com/v1/skater-stats-leaders/${year}${nextYear}/2?categories=assists&limit=10`);
    try {
        const assistLeaders = await response.json();
        return assistLeaders;
    } catch(error) {
        console.error(error);
        throw error;
    }
}

const getGoalStatLeaders = async () => {
    
        const year = new Date().getFullYear();
        const nextYear = year + 1;

        const response = await fetch(`https://api-web.nhle.com/v1/skater-stats-leaders/${year}${nextYear}/2?categories=goals&limit=10`);
        try {
            const goalLeaders = await response.json();
            return goalLeaders;
        } catch(error) {
            console.error(error);
            throw error;
        }
}

const getPointStatLeaders = async () => {
    
            const year = new Date().getFullYear();
            const nextYear = year + 1;
    
            const response = await fetch(`https://api-web.nhle.com/v1/skater-stats-leaders/${year}${nextYear}/2?categories=points&limit=10`);
            try {
                const pointLeaders = await response.json();
                return pointLeaders;
            } catch(error) {
                console.error(error);
                throw error;
            }
}

const fuckYou = (name) => {
    return `Go FUCK yourself, ${name}`
}

export default {getPointStatLeaders, fuckYou}