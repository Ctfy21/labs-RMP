FROM golang:1.23.2

RUN go version
ENV GOPATH=/

COPY ./ ./

# install psql
RUN apt-get update

# build go app
RUN go mod download
RUN go build -o main ./cmd/main.go

CMD ["./main"]