function qtest_handler(){
    console.log("Inside js file")
    const config = {
        headers: {
            "content-type": "application/json",
            Authorization: "bearer 4d3fd652-b13e-4152-bc60-7798dde69e75",
        },
    };

    const qtestURL_SearchForTestCases = `https://qtest.appl.kp.org/api/v3/projects/33/search/?pageSize=1000`;

    let query = "";
        let reqBody = {
            object_type: "test-cases",
            fields: ["*"],
            query: query,
        };

        query = `Module in 51474`;
        reqBody.query = query;

        let test_cases_res = await axios.post(
            qtestURL_SearchForTestCases,
            reqBody,
            config
        );

        console.log(test_cases_res.data.items);

}

qtest_handler();