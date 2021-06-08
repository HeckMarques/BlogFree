# BlogFree
Blog com cadastro de artigos e categorias (Node.js, Express, EJS, MySql, TinyMCE)

# Demo
Acesse: http://blogfree-com-br.umbler.net/ <br>
Administrativo: http://blogfree-com-br.umbler.net/login <br>
    * email: teste2@teste.com
    * senha: 123

### Rodar projeto
Certifique-se de ter instalado na máquina o Node.js e o mysql <br>

1.  Crie um banco de dados no MYSQL
2.  Dica mysql: execute o seguinte comando SQL para utilizar o formato nativo de senhas do banco de dados:
   ```sh
    ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'sua_senha_mysql'
   ```
3. Clone o projeto:
   ```sh
   git clone https://github.com/HeckMarques/BlogFree.git
   ```
4. Configure a conexão com o banco de dados mysql em /database/database.js
5. Instale as dependencias do projeto:
   ```sh
   npm install
   ```
6. Rode o projeto:
   ```sh
   npm start
   ```
 

