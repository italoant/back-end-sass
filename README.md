# Repositório de Demonstração de Conhecimentos

Bem-vindo! 🚀  
Este projeto foi criado com o objetivo de demonstrar meus conhecimentos em desenvolvimento de software, seguindo boas práticas e implementando conceitos avançados.

---

## Objetivo Principal

A ideia deste repositório é servir como uma **base sólida** para mostrar minhas habilidades em:

- **Serviços desacoplados**: Cada componente do sistema é independente, permitindo fácil manutenção e escalabilidade.
- **Testes unitários**: Garantia de qualidade e confiabilidade do código através de testes automatizados.
- **Boas práticas de desenvolvimento**: Código limpo, organização de camadas e princípios SOLID, TDD e DDD.

Além disso, o uso de bibliotecas como **Prisma** e **TypeORM** tem um propósito **didático**: demonstrar que os serviços estão desacoplados a um nível onde a mudança de ORM não afeta a regra de negócio ou a camada de domínio.

---

## Estrutura do Projeto

O projeto está organizado em camadas bem definidas para garantir a separação de responsabilidades:

src/
├── domain/ # Camada de domínio (regras de negócio)
├── infra/ # Camada de infraestrutura (ORM, banco de dados, etc.)
├── usecases/ # Casos de uso (orquestração de regras de negócio)
├── tests/ # Testes unitários e de integração
├── shared/ # Utilitários e códigos compartilhados
└── main.ts # Ponto de entrada da aplicação

---

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript.
- **NestJS**: Framework para construção de aplicações escaláveis e eficientes.
- **Prisma**: ORM moderno para acesso ao banco de dados.
- **TypeORM**: Outro ORM utilizado para fins didáticos.
- **Jest**: Framework para testes unitários e de integração.
- **SQLite**: Banco de dados leve para desenvolvimento e testes.
