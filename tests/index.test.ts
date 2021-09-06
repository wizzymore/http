import {get, post} from "../src"

const url = "https://jsonplaceholder.typicode.com/posts"

const mock = [
    {
        userId: 1,
        id: 1,
        title:
            "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body:
            "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    },
    {
        userId: 1,
        id: 2,
        title: "qui est esse",
        body:
            "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
    },
    {
        userId: 1,
        id: 3,
        title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        body:
            "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
    },
]

describe("http | get()", () => {
    test("get all", async () => {
        const response = await get(url)
        expect(response.slice(0, 3)).toEqual(mock)
    })

    test("get one", async () => {
        const response = await get(url + "/1")
        expect(response).toEqual(mock[0])
    })

    test("get one with params", async () => {
        const response = await get(url, {
            params: {
                id: 2,
            },
        })
        expect(response).toEqual([mock[1]])
    })

    test("get error handling", async done => {
        try {
            await get("invalid.url")
        } catch(error) {
            done(error)
        }
    })
})

describe("http | post()", () => {
    test("post", async () => {
        const mockData = {
            userID: 1,
            title: "test",
            body: "test",
            id: 101,
        }

        const response = await post(url, {
            body: mockData,
        })
        expect(response).toEqual(mockData)
    })

    test("post error handling", async done => {
        try{
            await post("invalid.url")
        } catch(error) {
            done(error)
        }
    })
})

describe("http | post(PUT)", () => {
    const method = "PUT"

    test("put on an existing post", async () => {
        const mockData = {
            ...mock[0],
            title: "Test",
        }

        const response = await post(url + "/" + mockData.id, {
            method,
            body: mockData,
        })
        expect(response).toEqual(mockData)
    })

    test("put the same values", async () => {
        const response = await post(url + "/" + mock[2].id, {
            method,
            body: mock[2],
        })
        expect(response).toEqual(mock[2])
    })
})

describe("http | post(PATCH)", () => {
    const method = "PATCH"

    test("patch one post", async () => {
        const mockData = {
            title: "Test",
        }

        const mockResponse = {
            ...mock[0],
            title: mockData.title,
        }

        const response = await post(url + "/" + mock[0].id, {
            method,
            body: mockData,
        })
        expect(response).toEqual(mockResponse)
    })
})

describe("http | post(DELETE)", () => {
    const method = "DELETE"

    test("delete an element", async () => {
        const response = await post(url + "/" + mock[0].id, {
            method,
        })
        expect(response).toEqual({})
    })
})
