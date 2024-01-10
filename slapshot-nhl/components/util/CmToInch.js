function convertCmToFeetAndInches(heightInCm){
    // 1: Convert cm to inches
    const heightInInches  = heightInCm / 2.54;

    // 2: Calculate feet and remaining inches
    const feet = Math.floor(heightInInches / 12);
    const inches = Math.round(heightInInches % 12);

    // 3: Return as string
    return `${feet}'${inches.toFixed(0)}"`;
}

export default convertCmToFeetAndInches;