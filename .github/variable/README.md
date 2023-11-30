# $REPO

[![tests](https://github.com/$OWNER/$REPO/actions/workflows/ci.yml/badge.svg?event=pull_request)](https://github.com/$OWNER/$REPO/actions/workflows/ci.yml)
[![deploy](https://github.com/$OWNER/$REPO/actions/workflows/cd.yml/badge.svg?event=push)](https://github.com/$OWNER/$REPO/actions/workflows/cd.yml)
[![license](https://img.shields.io/badge/license-GPL%203.0-purple.svg)](https://github.com/$OWNER/Database-Model/blob/main/LICENSE)

This is an example of service written in `TypeScript`, it provides a base from which make other microservices. The implementation uses `Node.js` and `express` as its base. Not sure how to reach out? Visit our Slack server, and remember to read our [Contributing Guidelines](https://github.com/$OWNER/$REPO/tree/main/CONTRIBUTING.md)!


## Installation

To run this service locally, you require `Node.js` which can be downloaded [here](https://nodejs.org/) and you may require the `Docker` daemon as well, which can be easily obtained with [Docker Desktop](https://www.docker.com/products/docker-desktop/) or [Colima](https://github.com/abiosoft/colima). However, if you plan to run this service on the cloud, the best way is to fork this repo and edit the `cd.yml` file to deploy it with Continous Deployment. (CD) Also, after forking you can set the CD with your provider, it must be possible for sure.

Following the local installation, run the following commands in order:

```sh
git clone https://github.com/$OWNER/$REPO
cd $NAME
```

Now you should be on the service folder, from where you can run it with either `Node.js` or `Docker`, depending on your needs.

## Running

If you plan on editing this service to your needs, you may prefer `Node.js`, as it can continously tested with `Nodemon`. To run this example using `Node.js`, install the dependencies and run the `dev` script, like this:

```sh
npm install -D
npm run dev
```

In the other hand, if you plan to just run the service in your local server, the best option is to use containers, for reliability and security. With that on mind, `Docker` is your option. First enable the Docker daemon, and right after run these commands:

```sh
docker build -t $NAME .
docker run -p 8080:8080 $NAME
```

In any way you run the service, it will block your terminal, so don't worry about that. Now, to test the server responses, you can try any HTTP request emitter, such as Postman, Axios or cURL. The following example shows a GET request over the service with cURL

```sh
curl --head localhost:8080/status
```

If everything is working as intended, the answer to that response should be a 200, which means that everything is okay! (The 200 should be in the first line or so)

## Requests

As this is just an example, this service only has one extra route asides from the `status` one. This service provides the route `example`, with the following command:

```sh
curl localhost:8080/example
```

The output should be something with this shape:

```json
{
    "hello": "world"
}
```
