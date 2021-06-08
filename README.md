# BlogFree
Blog com cadastro de artigos e Categories (Node.js, Express, EJS, MySql, TinyMCE)

# Demo
 Acesse: http://blogfree-com-br.umbler.net/
 Teste a parte administrativa: http://blogfree-com-br.umbler.net/login
    * email: teste2@teste.com
    * senha: 123

# Rodar projeto
	Certifique-se de ter instalado na máquina o Node.js e o mysql
    * Crie um banco de dados no MYSQL
    
    * Dica mysql: execute o seguinte comando SQL para utilizar o formato nativo de senhas do banco de dados:
        ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'sua_senha_mysql'
        
    * Clone o projeto: git clone https://github.com/HeckMarques/BlogFree.git
    * Configure a conexão com o banco de dados mysql em /database/database.js
		* Instale as dependencias do projeto: npm install
		* Rode o projeto: npm start
 

