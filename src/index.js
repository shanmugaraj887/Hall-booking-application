import express from 'express';
import * as dotenv from 'dotenv'
dotenv.config()
const app = express();
const PORT = process.env.PORT;
const room =
    [
        {
            "room": "room1",
            "seats": 5,
            "price_per_hour": 120
        },
        {
            "room": "room2",
            "seats": 5,
            "price_per_hour": 320
        },
        {
            "room": "room3",
            "seats": 4,
            "price_per_hour": 120
        }
    ]


const bookroom1 = [

    {
        "customer_name": "rick",
        "date": "6-7-2020",
        "start-time": "12:30hrs",
        "end-time": "6:00hrs",
        "room_name": "room1"
    }
]
const bookroom2 = [

    {
        "customer_name": "pick",
        "date": "6-7-2020",
        "start-time": "12:30hrs",
        "end-time": "6:00hrs",
        "room_name": "room2"
    }
]


//  http://localhost:4000/
app.get("/", function (request, response) {
    response.send(room);
});


//  http://localhost:4000/createroom
app.post("/createroom", express.json(), function (request, response) {
    room.push((request.body))
    response.send(room);
    console.log("room created pls check in the postman ✨✨`")
});


//  http://localhost:4000/bookroom1
app.post("/bookroom1", express.json(), function (request, response) {
    if (bookroom1.length < 5) {
        bookroom1.push((request.body))
        response.send(bookroom1);
        console.log("room created pls check in the postman ✨✨`")
    } else {
        response.send({ message: "room is full" })
    }

});


//  http://localhost:4000/bookroom2
app.post("/bookroom2", express.json(), function (request, response) {
    if (bookroom2.length < 5) {
        bookroom2.push((request.body))
        response.send(bookroom2);
        console.log("room created pls check in the postman ✨✨`")
    } else {
        response.send({ message: "room is full" })
    }

});

//  http://localhost:4000/bookeddata
app.get("/bookeddata", function (request, response) {
    response.send([(bookroom1), (bookroom2)]);
});



//  http://localhost:4000/bookedcustomers
app.get("/bookedcustomers", function (request, response) {
    response.send([(bookroom1), (bookroom2)]);
});



app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));