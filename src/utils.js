export async function fetchMembers(mapFunc) {
    try {
        const response = await fetch("https://whscompsciclub.vercel.app/api/leaderboard");
        const json = await response.json();

        function calculatePoints(person) {
            var points = 0;
            for (const reward of person.rewards) {
                points += reward.points;
            }
            return points;
        }

        const refined = json.map(u => ({...u, points: calculatePoints(u)})).sort((a, b) => {
            if (a.points > b.points) return -1;
            else if (a.points < b.points) return 1;
            else return 0;
        });

        var entries = [];
        for (let i = 0; i < refined.length; i++) {
            entries.push(mapFunc(refined[i], i + 1));
        }
        return entries;
    } catch (e) {
        console.error(e);
        return false;
    }
}