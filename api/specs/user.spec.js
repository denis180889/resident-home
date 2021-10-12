import axios from "axios";

describe("User tests", () => {
    const host = "https://reqres.in";

    test("Create user test", async () => {
        const user = {
            name: "Ivan Ivanov",
            job: "QA"
        }

        const response = await axios.post(`${host}/api/users`, user);
        expect(response.status, 'Response status should be 201').toEqual(201);

        expect(response.data.name).toEqual(user.name);
        expect(response.data.job).toEqual(user.job);
        expect(Number.parseInt(response.data.id)).toBeNumber();
        expect(new Date(response.data.createdAt)).toBeDate();
    });

    test("Get single user by id", async () => {
        const response = await axios.get(`${host}/api/users/${12}`);
        expect(response.status, 'Response status should be 200').toEqual(200);

        expect(Number.parseInt(response.data.data.id)).toBeNumber();
        expect(response.data.data.email).toEqual('rachel.howell@reqres.in');
        expect(response.data.data.first_name).toEqual('Rachel');
        expect(response.data.data.last_name).toEqual('Howell');
        expect(response.data.data.avatar).toEqual('https://reqres.in/img/faces/12-image.jpg');
        expect(response.data.support.url).toEqual('https://reqres.in/#support-heading');
        expect(response.data.support.text).toEqual('To keep ReqRes free, contributions towards server costs are appreciated!');
    });

    test("Update user by Put methods", async () => {
        const user = {
            name: "Ivan Ivanov",
            job: "QA"
        }

        const userUpdated = {
            name: "Petr Petrov",
            job: "DevOps"
        }

        const responsePost = await axios.post(`${host}/api/users`, user);
        expect(responsePost.status, 'Response status should be 201').toEqual(201);

        const responsePut = await axios.put(`${host}/api/users/${responsePost.data.id}`, userUpdated);
        expect(responsePut.status, 'Response status should be 200').toEqual(200);

        expect(responsePut.data.name).toEqual(userUpdated.name);
        expect(responsePut.data.job).toEqual(userUpdated.job);
        expect(new Date(responsePut.data.updatedAt)).toBeDate();
    });

    test("Update user by Patch methods", async () => {
        const user = {
            name: "Ivan Ivanov",
            job: "QA"
        }

        const postResponse = await axios.post(`${host}/api/users`, user);
        expect(postResponse.status, 'Response status should be 201').toEqual(201);

        user.name = "John Johns";
        const patchResponse = await axios.patch(`${host}/api/users/${postResponse.data.id}`, user);
        expect(patchResponse.status, 'Response status should be 200').toEqual(200);

        expect(patchResponse.data.name).toEqual(user.name);
        expect(patchResponse.data.job).toEqual(user.job);
        expect(new Date(patchResponse.data.updatedAt)).toBeDate();
    });

    test("Delete user by id test", async () => {
        const user = {
            name: "Ivan Ivanov",
            job: "QA"
        }

        const postResponse = await axios.post(`${host}/api/users`, user);
        expect(postResponse.status, 'Response status should be 201').toEqual(201);

        const deleteResponse = await axios.delete(`${host}/api/users/${postResponse.data.id}`);
        expect(deleteResponse.status, 'Response status should be 204').toEqual(204);
    });

})