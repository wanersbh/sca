# SISTEMA  DE CONTROLE AMBIENTAL - SCA

Trabalho de Conclusão de Curso de Especialização em Arquitetura de Software Distribuído como requisito parcial à obtenção do título de especialista.

**Orientador(a):** Prof. Dr. Pedro Alves de Oliveira
<p><b>Aluno:</b> Waner Andrade Silva</p>

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
