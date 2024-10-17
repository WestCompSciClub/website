export function calculateStats(rewards) {
    var points = 0;
    var wins = 0;
    for (const reward of rewards) {
        points += reward.points;
        if (reward.type == "hackathon-win") wins++;
    }
    return {
        points,
        wins,
    };
}

export async function fetchMembers(mapFunc) {
    try {
        const response = await fetch("https://whscompsciclub.vercel.app/api/leaderboard");
        const json = await response.json();

        const refined = json.map(u => ({...u, ...calculateStats(u.rewards)})).sort((a, b) => {
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
        console.error("couldn't fetch members:", e);
        return false;
    }
}

export async function postMember(memberData) {
    return new Promise((res, _rej) => {
        try {
            fetch("https://whscompsciclub.vercel.app/api/member", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(memberData),
            }).then((response) => {
                console.log("update member post request sent, returned response:", response);
                res(response.status);
            });
        } catch (e) {
            console.error("couldn't send post request to update member:", memberData, e);
            res(false);
            return false;
        }
    });
}

export async function createMember(name, auth) {
    return new Promise((res, _rej) => {
        try {
            // fetch("https://whscompsciclub.vercel.app/api/createmember", {
            fetch("http://localhost:8000/api/createmember", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ auth, name }),
            }).then(async (response) => {
                console.log("create member post request sent, returned response:", response);
                let data = response.status == 200 ? await response.json() : {};
                res({ status: response.status, data });
            });
        } catch (e) {
            console.error("couldn't send post request to create member:", name, e);
            res(false);
            return false;
        }
    })
}