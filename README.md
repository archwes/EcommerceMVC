# EcommerceMVC 🛒

Este repositório contém uma aplicação de e-commerce construída com uma arquitetura de **microserviços**, utilizando o padrão Model-View-Controller (MVC) para a interface do usuário e APIs para a comunicação entre os serviços. O projeto é conteinerizado usando Docker, facilitando o desenvolvimento e a implantação. 🐳

## Descrição do Projeto

O **EcommerceMVC** é uma plataforma de comércio eletrônico modularizada, projetada para demonstrar uma abordagem baseada em microserviços. Ele é composto por serviços independentes que se comunicam através de uma **API Gateway**. Isso permite que cada parte do sistema (carrinho, produtos, pedidos, etc.) seja desenvolvida, implantada e escalada de forma independente.

## Características (Potenciais) ✨

* **Gerenciamento de Produtos** 📦
* **Carrinho de Compras** 🛍️
* **Gerenciamento de Pedidos** 📝
* **Arquitetura de Microserviços**
* **API Gateway**

## Tecnologias Utilizadas 🛠️

O projeto utiliza as seguintes tecnologias principais:

* **EJS (Embedded JavaScript):** Para a renderização de templates no lado do servidor (Views).
* **JavaScript:** Linguagem de programação principal para a lógica de negócios e APIs.
* **Dockerfile:** Para a conteinerização de cada serviço.
* **Docker Compose:** Para orquestrar e gerenciar múltiplos contêineres Docker.

### Estrutura dos Microserviços

* **`api-gateway`**: Responsável por rotear as requisições para os serviços apropriados e talvez lidar com outras preocupações transversais. 🚪
* **`cart-service`**: Gerencia a lógica relacionada ao carrinho de compras. 🛒
* **`order-service`**: Lida com o processamento e o ciclo de vida dos pedidos. 🚚
* **`product-service`**: Gerencia as informações e operações relacionadas aos produtos. 🎁

## Configuração e Instalação 🚀

Para configurar e executar o projeto localmente, você precisará ter o **Docker** e o **Docker Compose** instalados em sua máquina.

1. **Baixe e Instale o Docker:**
   ```bash
   https://www.docker.com/products/docker-desktop/
   ```

2.  **Clone o Repositório:**
    ```bash
    git clone https://github.com/archwes/EcommerceMVC.git
    cd EcommerceMVC
    ```

3.  **Construa e Inicie os Contêineres:**
    A partir do diretório raiz do projeto, execute o seguinte comando para construir as imagens Docker e iniciar todos os serviços:
    ```bash
    docker-compose up --build
    ```
    Este comando construirá as imagens para cada serviço (se ainda não existirem) e iniciará os contêineres em segundo plano.

4.  **Verifique os Serviços:**
    Após a execução do comando, os serviços devem estar rodando. Você pode verificar o status dos contêineres com:
    ```bash
    docker-compose ps
    ```

## Uso 💻

Uma vez que todos os serviços estejam em execução:

* Acesse a aplicação principal através do `api-gateway` (o endereço exato dependerá da configuração no `docker-compose.yml`, mas geralmente será `http://localhost:3000`).
* Interaja com a interface do usuário para navegar por produtos, adicionar itens ao carrinho e realizar pedidos.

## Licença 📄

Este projeto está licenciado sob a licença [MIT License] - veja o arquivo [LICENSE](LICENSE) para detalhes.
