// const url = "https://secerp.votivereact.in/api/work-orders/list"; 
const url = "https://votiveone.com/api/dashboard/developer-activity";

async function test() {
    const requests = [];

    console.time("100 Requests");

    for (let i = 0; i < 100; i++) {
        requests.push(
            fetch(url, {
                headers: {
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjMsInJvbGUiOiJJVCIsInJvbGVfaWQiOjQsImNsaWVudF9pZCI6bnVsbCwidG9rZW5fdmVyc2lvbiI6MCwiaWF0IjoxNzg0NzgyNjU5LCJleHAiOjE3ODQ4MTg2NTl9.buS37NBimpWmu_XOztMQ26X8n3pByQt5OMJ7LN0NAOA",
                    Accept: "application/json",
                },
            })
        );
    }

    const responses = await Promise.all(requests);

    console.timeEnd("100 Requests");

    console.log(`Success: ${responses.filter(r => r.ok).length}`);
    console.log(`Failed : ${responses.filter(r => !r.ok).length}`);
}

test();