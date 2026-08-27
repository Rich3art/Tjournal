# Journedge cPanel Build

This repository builds a cPanel/Passenger deployment artifact for the open-source Journedge app from:

https://github.com/TheQuantum-Dev/journedge

It does not contain production secrets, `.env`, SQLite database files, cPanel credentials, or user data.

## What the workflow does

- Clones upstream Journedge.
- Applies the minimal cPanel deployment overlay.
- Blocks the upstream self-update endpoints from public use.
- Builds with Node.js 22 on GitHub Actions.
- Packages a release asset named `journedge-cpanel-artifact.tar.gz`.

## Deployment target

- Production URL: https://journal.ranksmedia.com
- cPanel app directory: `/home/thesite1/journedge-app`
- Runtime: cPanel Setup Node.js App / CloudLinux Node.js selector / Passenger
- Database: SQLite, created on the cPanel server via Prisma migrations
