
## Sex Adapt - Back End

  

## Dependencies:

- [Docker](https://www.docker.com/)
- [NodeJS](https://nodejs.org/)
	- Stable version (v18.7.0^) is recommended
- [NestJS/cli](https://docs.nestjs.com/cli/overview)
- [Bash](https://git-scm.com/downloads)

## Setup after installing [docker](https://www.docker.com/):
1.  `bash ./start.sh`
2. `yarn install -g @nestjs/cli` || `npm install -g @nestjs/cli` || `pnpm install -g @nestjs/cli`
3. `yarn install` || `npm ` || `pnpm i`

## Docker infos:
	Docker will be running on port 5432 (default)
	Docker container default name is postgres-sex-adapt

## Known Errors:

1. ECONNREFUSED ::1:5432
	- Docker might not be running
		- Solution 1: `sudo service run docker`;
		- Solution 2: Run setup step 1 again;
		- Solution 3: Check your firewall

## Checklist:
 - [ ] TAMO INDO
