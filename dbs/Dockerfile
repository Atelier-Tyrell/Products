FROM postgres:alpine

COPY *.sql /docker-entrypoint-initdb.d/

ADD setup.sql /docker-entrypoint-initdb.d