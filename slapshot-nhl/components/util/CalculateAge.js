function calculateAge(birthdate) {
    const birthDate = new Date(birthdate);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();

    return age;
}

function formatBirthDate(birthDateString){

    const birthDate = new Date(birthDateString);

    const options = { 
        month: "long", 
        day: "numeric", 
        year: "numeric" 
    };

    try {
        const formattedBirthdate = new Intl.DateTimeFormat("en-US", options).format(birthDate);
        return formattedBirthdate;
    } catch (error) {
        console.error("Error formatting birthDate:", error);
        return "Invalid Date";
    }
}

export { calculateAge, formatBirthDate };