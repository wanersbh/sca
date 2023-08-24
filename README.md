# SISTEMA  DE CONTROLE AMBIENTAL - SCA

Trabalho de Conclusão de Curso de Especialização em Arquitetura de Software Distribuído como requisito parcial à obtenção do título de especialista.

**Orientador(a):** Prof. Dr. Pedro Alves de Oliveira
<p><b>Aluno:</b> Waner </p>

[Apresentação da POC no Youtube.](https://youtu.be/V8-YCnx_CuM)

## Protótipo Arquitetural

Foi proposto para o TCC a criação de uma Prova de Conceito para validar o protótipo arquitetural de um Sistema de Controle Ambiental. De acordo com os requisitos exigidos na documentação, o sistema ficou estruturado da seguinte forma:

![Imagem estrutura do sistema](https://github.com/wanersbh/sca/blob/master/estrutura-sistema.png)

No **back-end** foi utilizado o padrão de arquitetura de microsserviço ***API Gateway***, juntamente com o ***Registry/Discovery*** fazendo o papel de proxy das APIs. E para contemplar os dois padrões de arquitetura foram utilizadas as tecnologias **Zuul** e **Eureka** da empresa **Netflix**. Com o **Zuul** juntamente com **Eureka**, é possível realizar o roteamento, balanceamento, auditoria, segurança e tradução de protocolos da aplicação. O serviço **Eureka** permite que o **Netflix Zuul** encontre o nome da aplicação e acesse os serviço sem saber previamente a url e a porta de cada microsserviço. Essa abstração de urls e portas torna o acesso transparente para realizar o *proxy* das API’s disponíveis. Essas tecnologias da Netflix já estão integrados no framework **Spring  Cloud**.
	
Cada módulo do projeto foi criado um microsserviço utilizando o framework **Spring Boot**, que estão expostos como uma API. As bases de dados são independentes para cada microsserviço e para tornar aplicação mais portável e sem complicações no momento de migrar, foi utilizado o ***Flyway***, que é um controlador de versões para banco de dados.  
	
E para integração entre os microsserviços existe uma camada que é uma API de integração, que realiza abstração da comunicação com os serviços externos. E os microsserviços consomem de forma assíncronas as informações externas e internas necessárias através do **RabbitMQ**.

- No contexto do projeto, os serviços externos é representado:
  - O Sistema de Normas Ambientais;
  - Consultorias e Assessorias;
  - Sistema de Defesa Civil Municipais e Estaduais;
  - Amazon QuickSight.
  
 ## Passos para subir o sistema localmente
 
 ### 1. RabbitMQ
 
 A comunicação entre os microsserviços e os serviços externos é realizada através das filas de mensageria do RabbitMQ. A premissa é que já tenha o docker instalado na máquina para baixar a imagem e subir o container.
 
`docker run -d — hostname my-rabbit — name rabbit13 -p 15672:15672 -p 5672:5672 -p 25676:25676 rabbitmq:3-management`

Depois de baixar e executar a imagem é só acessar o RabbitMQ criar duas filas. 

**Link:** http://localhost:15672

**Usuário/Senha:** guest / guest

**Filas:** `ScaAtivoQueue, SCBarragemQueue`

Para adicionar as filas você deve clicar na aba Queues e clicar no link **Add a new queue** preencher o nome da fila e clicar no botão **Add queue**.

### 2. Mysql

Para subir a aplicação é necessário possuir o Mysql instalado ou possuir um imagem do docker.

`$ docker run --name sca-mysql -e MYSQL_ROOT_PASSWORD=P4c@M1n@s -d mysql:5.7`

No projeto foi utilizado o ***Flyway*** que é um controlador de versões do banco de dados. Todos os scripts para criar tabelas e inserir dados de testes estão no projeto. Quando subir os microsserviços o  banco juntamento com as tabelas e o dados serão criados.

### 3. Visual Studio Code

Para executar o projeto do front-end será necessário utilizar o Visual Studio Code. A premissa para essa etapa é que já tenha o node instalado no computador.

**Link para download:** https://code.visualstudio.com/

**Link node:** https://nodejs.org/en/download/

Depois de instalar a ferramenta é só abrir o diretório `sca-ui`.

A primeira vez será necessário executar o seguinte comando no terminal:

`~/../sca-ui $ npm install`

Essa comando irá baixar todas as dependência do projeto.

E para subir o front-end é só executar o seguinte comando:

`~/../sca-ui $ ng serve`

O caminho padrão para acessar o front da aplicação será:

http://localhost:4200

### 4. Spring Tool Suite - STS

Para executar os microsserviços e os serviços localmente será necessário utilizar o STS. A premissa nessa etapa é já possuir o maven instalado.

**Link para download:** https://spring.io/tools

**Link download maven:** https://maven.apache.org/download.cgi

Depois de baixar o STS, importe os seguintes projetos:

1. eureka-service;
2. sca-ativos;
3. sca-barragens;
4. sca-seguranca-comunicao;
5. zuul-gateway.

Depois é só executá-los na ordem que foram importados. 

Todos os serviços expostos pelos microsserviços estarão disponíveis na url base http://localhost:8080. Isso foi possível por causa do ***API Gateway***, Netflix Zuul.

Para verificar as instâncias disponíveis de cada microsserviço é possível através do serviço **Eureka**:
http://localhost:8761/

A documentação dos serviços expostos como API foi feita utilizando o **Swagger**.

**Módulo de Ativos:** http://localhost:8180/sca-ativos/swagger-ui.html

**Módulo de Monitoramento de barragens:** http://localhost:8280/sca-barragens/swagger-ui.html

### 5. Usuários para testar o Sistema

Segue abaixo os usuários que foram cadastrados para realizar a apresentação da prova de conceito do protótipo arquitetural do Sistema de Controle Ambiental.

PERFIL | USUARIO | SENHA
------ | ------- | -----
ADMINISTRADOR | 80425426386644 | admin
ENGENHEIRO | 63817449445 | tcc@puc
MANUTENCAO | 48041809316 | tcc@puc
OPERADOR | 28368434033 | tcc@puc
CONSULTOR | 96765842586 | tcc@puc

