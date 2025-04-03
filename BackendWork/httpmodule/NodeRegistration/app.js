const http = require("http");
const fs = require("fs").promises;
const PORT = 3001;

const server = http.createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*"); // Allow all origins
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type"); // Allow Content-Type header

    if (req.method === "OPTIONS") {
        res.writeHead(204);
        res.end();
        return;
    }

    if (req.url == "/register" && req.method == "POST") {
        let body = "";
        let arr = [];
        req.on("data", (chunk) => {
            body += chunk;
        });
        req.on("end", async () => {
            
            
            const { name, email, password } = JSON.parse(body);
            console.log(name);
            const fdata = await fs.readFile("student.json", { encoding: "utf-8" });
            arr = JSON.parse(fdata);
            console.log(arr);
            const result = arr.find((ele) => ele.email == email);
            if (result) {
                res.setHeader("Content-Type", "application/json");
                return res.end(JSON.stringify({ message: "This email is already registered" }));
            }
            arr.push({ name, email, password });
            await fs.writeFile("student.json", JSON.stringify(arr, null, 2));
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify({ message: "Registration successful!" }));
        });
    } else if (req.url == "/login" && req.method == "POST") {
        let body = "";
        let arr = [];
        req.on("data", (chunk) => {
            body += chunk;
        });
        req.on("end", async () => {
            const { email, password } = JSON.parse(body);
            const fdata = await fs.readFile("student.json", { encoding: "utf-8" });
            arr = JSON.parse(fdata);
            console.log(arr);
            const result = arr.find((ele) => ele.email == email && ele.password == password);
            res.setHeader("Content-Type", "application/json");
            if (result) {
                return res.end(JSON.stringify({ message: "Login Success" }));
            } else {
                return res.end(JSON.stringify({ message: "Invalid email or password" }));
            }
        });
    }
});

server.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
});
