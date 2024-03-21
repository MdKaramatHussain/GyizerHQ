function findSpareChairs(meetingRooms, need) {
    let chairsTaken = [];

    if (need === 0) {
        return 1; // No chairs needed
    } else {
        for (let room of meetingRooms) {
            let occupants = room[0].split('X').length - 1;
            let availableChairs = room[1] - occupants;
            if (availableChairs >= need) {
                chairsTaken.push(need);
                return chairsTaken;
            } else if (availableChairs > 0) {
                chairsTaken.push(availableChairs);
                need -= availableChairs;
            } else if (availableChairs === 0) {
                chairsTaken.push(0);
            } else {
                return 0; // There aren't enough spare chairs available
            }
        }
        return chairsTaken
    }
}

// Test case
const meetingRooms = [['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9], ['XXX', 2]];
// const need = 0; output: 1 No chair need
// const need = 5; output: 0 There aren't enough spare chairs available
const need = 4; 
console.log(findSpareChairs(meetingRooms, need)); // Output: [0, 1, 3]
