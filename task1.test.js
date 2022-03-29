const request = require("supertest");
import { server } from "./server";

const data = {
    "organization": "Girls who code",
    "createdAt": "2020-08-12T19:04:55.455Z",
    "updatedAt": "2020-08-12T19:04:55.455Z",
    "products": [
        "HTML",
        "CSS",
        "FOOD",
        "HOME SERVICE"
    ],
    "marketValue": "120%",
    "address": "Benin",
    "ceo": "Putu",
    "country": "Nigeria",
    "id": 23,
    "noOfEmployees": 1,
    "employees": [
        "Daco Benin"
    ]
};

describe("server", () => {
    describe("GET /", () => {
        it("respond with 200", function (done) {
            request(server).get("/companies").expect(200, done)
        })
    });
    
    describe("POST /", () => {
        it("respond with 201", function (done) {
            request(server).post("/companies")
            .send(data)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(201)
            .end(function(err, res) {
                if (err) return done(err);
                return done();
            });
        })
    });
});
