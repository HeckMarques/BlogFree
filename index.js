const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database")
const session = require("express-session");

const categoriesController = require("./categories/categoriesController")
const articlesController = require("./articles/articlesController")
const usersController = require("./users/UsersController")

const Article = require('./articles/Article')
const Category = require('./categories/Category')
const User = require('./categories/Category')

// View engine
app.set('view engine', 'ejs');


// Sessions
app.use(session({ 
    secret: "qCJSbq6mIMzN5aJWNdl6EEe9I2DSl4", // Bem aleatorio usado para decriptar, tipo o salt do bcrypt
    cookie: { maxAge: 30000000 } // ta em ms +- 8 horas até expirar
  }))

//static
app.use(express.static('public'));

//Body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())

// database
connection.authenticate().then(() => {
  console.log('Conexao feita com sucesso!')
}).catch((err) =>{
  console.log(err)
})

// ROTAS EM ARQUIVOS SEPARADOS
app.use("/", articlesController);
app.use("/", categoriesController);
app.use("/", usersController);

app.get("/session", (req, res) => {
  req.session.treinamento = "Formação node.js"
  req.session.ano = 2021
  req.session.user = {
    username: 'mauricio',
    id: 10
  }

  res.send("sessao gerada")

});

app.get("/leitura", (req, res) =>{

  res.json({treinamento: req.session.treinamento, ano: req.session.ano, user: req.session.user})

});

app.get("/", (req,res) => {
  Article.findAll({
    order: [
    ['id', 'DESC']
    ],
    limit:4
  }).then((articles) => {
    Category.findAll().then((categories) => {
      res.render("index", {articles: articles, categories: categories});
    })
    
  })
})

app.get("/:slug", (req, res) =>{
  var slug = req.params.slug;
  Article.findOne({
    where: {
      slug: slug
    }
  }).then((article) =>{
    if(article != undefined) {
      Category.findAll().then((categories) => {
        res.render("article", {article: article, categories: categories});
      })
    }else{
      res.redirect("/")
    }

  }).catch(() =>{
   res.redirect("/")
 })
})

app.get("/category/:slug", (req, res) =>{
  var slug = req.params.slug;
  Category.findOne({
    where: {
      slug: slug
    },
    include: [{model: Article}]
  }).then(( category ) => {
    if(category != undefined){

      Category.findAll().then((categories) =>{
        res.render("index", {articles: category.articles, categories: categories})
      })

    }else{  
      res.redirect("/")
    }

  }).catch(() =>{
    res.redirect("/")
  })
})


app.listen(3000, () => {
  console.log('SERVER ON');
})