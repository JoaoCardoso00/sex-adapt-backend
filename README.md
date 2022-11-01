# Sex Adapt - Back End

## Links:
- [Diagrama UML](https://www.figma.com/file/Cd2JEqC6xwE6xUdFibFOoG/Back-end-Diagrama-ER?node-id=0%3A1)
- [Diagrama de Rotas](https://www.figma.com/file/V9Jp8f1AIjtT0KH4WPcwsm/Back-End-Routes)

## Dependencies:

- [Docker](https://www.docker.com/)
	- [PostgreSQL](https://hub.docker.com/_/postgres)
- [NodeJS](https://nodejs.org/)
	- Stable version (v18.7.0^) is recommended
- [NestJS/cli](https://docs.nestjs.com/cli/overview)
- [Bash](https://git-scm.com/downloads)

## Setup after installing [docker](https://www.docker.com/):
1.  `bash ./start.sh`
2. `yarn install -g @nestjs/cli` || `npm install -g @nestjs/cli` || `pnpm install -g @nestjs/cli`
3. `yarn` || `npm i` || `pnpm i`

## Docker infos:
	Docker will be running on port 5432 (default)
	Docker container default name is postgres-sex-adapt

## Known Errors:

1. ECONNREFUSED ::1:5432
	- Docker might not be running
		- Solution 1: `sudo service run docker`;
		- Solution 2: Run setup step 1 again;
		- Solution 3: Check your firewall;
2. error: database "sex_adapt" does not exist
	- Database was created
		- Solution: 
			1. Execute `docker exec -it postgres-sex-adapt psql -U postgres`;
			2. Execute `CREATE DATABASE "sex_adapt"`;
			3. Quit with \q and try again;
