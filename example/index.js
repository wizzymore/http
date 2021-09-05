const {get, post} = require("../.")

const example = async () => {
    const getResponse = await get("https://jsonplaceholder.typicode.com/posts")

    const postResponse = await post(
        "https://jsonplaceholder.typicode.com/posts",
        {
            body: {
                userId: 1,
                title: "Test",
                body: "Test Body",
            },
        },
    )

    console.log("--- GET RESPONSE ---")
    console.log(getResponse.slice(0, 1))

    console.log("--- POST RESPONSE ---")
    console.log(postResponse)
}

example()
