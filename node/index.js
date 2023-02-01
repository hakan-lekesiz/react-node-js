// var http = require("http"); //http server ooluşturma
// var fs = require("fs"); //dosya okuma silme 

// var server = http.createServer((req, res) => {

//     if (req.url == "/") {
//         fs.readFile("index.html", (err, html) => {
//             res.write(html);
//             res.end();
//         });

//     }

// });

// server.listen(3000, () => {
//     console.log("server at port 3000")
// });


//2. adım express üzerinden projeyi ayağa kaldırıyoruz

const express = require("express");
const app = express();
app.use(express.json());//gelen isteklerin json formatına dönüştürüyor
app.set("view engine", "ejs"); //file gibi okumalarada kullanılıyor ejs fomratında html leri okuyacak
app.use(express.static("public")); //dosyayı dışarıya açma
const data = require("./data");

//endpoints restfull api

app.get("/getProducts", (req, res) => {
    res.status(200).json(data);
});

app.get("/getProduct/:id", (req, res) => {
    // res.send("product details" + req.params.id); // string bilgi gönderme

    var product = data.find(x => x.id == req.params.id);
    if (product) {
        res.status(200).json(product);
    }
    else {
        res.status(404).send("ürün bulunamadı");
    }
});

app.get("/getProductWithQueryString", (req, res) => {
    // res.send("product details" + req.params.id); // string bilgi gönderme

    console.log(req.query)
    var product = data.find(x => x.id == req.query.id);
    if (product) {
        res.status(200).json(product);
    }
    else {
        res.status(404).send("ürün bulunamadı");
    }
});

//postman kurulması gerekiyor
app.post("/addProduct", (req, res) => {
    // res.send("product details" + req.params.id); // string bilgi gönderme

    console.log(req.body);
    res.status(200).json(req.body);

});

//routes
app.use("/products/:id", (req, res) => {
    // res.send("product details" + req.params.id); // string bilgi gönderme

    var product = data.find(x => x.id == req.params.id);
    if (product) {
        res.render("product-details", product);//  index.ejs çalıştıracak
    }
    else {
        res.redirect("/index");
    }
});

app.use("/products", (req, res) => {
    // res.send("products");// string bilgi gönderme

    //sayfaya data gönderme
    res.render("products", { urunler: data });//  index.ejs çalıştıracak
});

app.use("/", (req, res) => {
    // res.send("anasayfa");// string bilgi gönderme
    res.render("index");//  index.ejs çalıştıracak
});

app.listen(3000, () => {
    console.log("server at port 3000")
});


//Adımlar
//1- npm init --yes
//2- npm i express@4.18.1

//3- her seferinde node index.js dememek için uygulamayı dururup yeniden yüklemek için
//yayına aldığımızda buna ihtiyacımız olmayacak sadece bu bilgisayrda kursun istiyorsak
//npm i nodemon -global

//4- npm list -g dersek bilgisayr içinde kurulmuş paketleri görebiliriz

//5- projeyi ayağa kaldırmak için nodemon index.js

//6-npm i ejs@3.1.8
//7- ejs language support extensşiondan kuralım ejs