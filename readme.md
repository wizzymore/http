# HTTP

[![version][version-badge]][npm]
[![downloads][downloads-badge]][npm]
[![size][size-badge]][bundlephobia]
[![github actions][github-actions-badge]][github-actions]
[![coverage][codecov-badge]][codecov]
[![typescript][typescript-badge]][typescript]
[![contributing][contributing-badge]][contributing]
[![CodeFactor][codefactor-badge]][codefactor]

_http request library heavily inspired by [axios][axios] and [bradgarropy/http][bradgarropy/http]_

Most of the time, `fetch` is used to interact with a JSON API. This library is a thin wrapper around `fetch` that converts the request and response body to JSON by default.

## 📦 Installation

This package is hosted on [npm][npm].

```bash
npm install @eptic/http
```

## 🥑 Usage

This library's API is very similar to [axios][axios]. You can issue HTTP requests which are assumed to be JSON by default. It returns a `Promise` with the response data.

```javascript
// get all posts
const posts = await get("https://jsonplaceholder.typicode.com/posts")

// get posts by user
const posts = await get("https://jsonplaceholder.typicode.com/posts", {
    params: {
        userId: 1,
    },
})

// get one post
const post = await get("https://jsonplaceholder.typicode.com/posts/1")

// create a post
const newPost = await post("https://jsonplaceholder.typicode.com/posts", {
    body: {
        title: "My post title",
        body: "This is my post body.",
        userId: 1,
    },
})

// update a post or create a new one
const updatePost = await post(
    "https://jsonplaceholder.typicode.com/posts/101",
    {
        body: {
            title: "My post title",
            body: "This is my post body.",
            userId: 1,
        },
    },
)
```

## 📖 API Reference

### `get(url, options)`

| Name             | Required | Default                                               | Example                                      | Description                                                             |
| ---------------- | -------- | ----------------------------------------------------- | -------------------------------------------- | ----------------------------------------------------------------------- |
| `url`            | `true`   |                                                       | `https://jsonplaceholder.typicode.com/posts` | Web address of the API.                                                 |
| `options.params` | `false`  | `{}`                                                  | `{userId: 1}`                                | Query parameters object.                                                |
| `options...`     | `false`  | `{ headers: { 'content-type': 'application/json' } }` | `{ body: {first: "Brad", last: "Garropy"} }` | The default `fetch` options with `application/json` as a default header |

Perform an HTTP GET request. The response is automatically converted to JSON.

```javascript
// get without options
get("https://jsonplaceholder.typicode.com/posts")

// get with  options
get("https://jsonplaceholder.typicode.com/posts", {
    params: {userId: 1},
})
```

### `post(url, options)`

| Name             | Required | Default                                               | Example                                      | Description                                                             |
| ---------------- | -------- | ----------------------------------------------------- | -------------------------------------------- | ----------------------------------------------------------------------- |
| `url`            | `true`   |                                                       | `https://jsonplaceholder.typicode.com/posts` | Web address of the API.                                                 |
| `options.params` | `false`  | `{}`                                                  | `{ userId: 1 }`                              | Query parameters object.                                                |
| `options.method` | `false`  | `POST`                                                | `PUT`                                        | The method of the request.                                              |
| `options...`     | `false`  | `{ headers: { 'content-type': 'application/json' } }` | `{ body: {first: "Brad", last: "Garropy"} }` | The default `fetch` options with `application/json` as a default header |

Perform an HTTP POST request. If a `body` is supplied, it's automatically converted to a string before being sent in the request. The response is automatically converted to JSON.
Post can be used for `POST` | `PUT` | `PATCH` | `DELETE`

```javascript
// post without options
post("https://jsonplaceholder.typicode.com/posts")

// post with options
post("https://jsonplaceholder.typicode.com/posts", {
    params: {userId: 1},
    body: {
        first: "Test",
        last: "User",
    },
})

// put request
post("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PUT"
    params: {userId: 1},
    body: {
        first: "Test",
        last: "User",
    },
})
```

## ❔ Questions

🐛 report bugs by filing [issues][issues]

## ✨ contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center">
      <a href="https://eptic.ro">
        <img src="https://avatars.githubusercontent.com/u/25827787?v=4?s=100" width="100px;" alt=""/>
        <br />
        <sub>
          <b>
            Cristian Bilu
          </b>
        </sub>
      </a>
      <br />
      <a href="https://github.com/wizzymore/http/commits?author=wizzymore" title="Code">
        💻
      </a>
      <a href="https://github.com/wizzymore/http/commits?author=wizzymore" title="Documentation">
        📖
      </a>
      <a href="https://github.com/wizzymore/http/commits?author=wizzymore" title="Tests">
        ⚠️
      </a>
    </td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

[codecov]: https://app.codecov.io/gh/wizzymore/http
[contributing]: https://github.com/wizzymore/http/blob/master/contributing.md
[contributors]: #-contributors
[npm]: https://www.npmjs.com/package/@eptic/http
[codecov-badge]: https://img.shields.io/codecov/c/github/wizzymore/http?style=flat-square
[version-badge]: https://img.shields.io/npm/v/@eptic/http.svg?style=flat-square
[downloads-badge]: https://img.shields.io/npm/dt/@eptic/http?style=flat-square
[contributing-badge]: https://img.shields.io/badge/PRs-welcome-success?style=flat-square
[contributors-badge]: https://img.shields.io/github/all-contributors/wizzymore/http?style=flat-square
[issues]: https://github.com/wizzymore/http/issues
[bundlephobia]: https://bundlephobia.com/result?p=@eptic/http
[size-badge]: https://img.shields.io/bundlephobia/minzip/@eptic/http?style=flat-square
[github-actions]: https://github.com/wizzymore/http/actions
[github-actions-badge]: https://img.shields.io/github/workflow/status/wizzymore/http/%F0%9F%9A%80%20release?style=flat-square
[typescript]: https://www.typescriptlang.org/dt/search?search=%40wizzymore%2Fhttp
[typescript-badge]: https://img.shields.io/npm/types/@eptic/http?style=flat-square
[axios]: https://github.com/axios/axios
[bradgarropy/http]: https://github.com/bradgarropy/http
[codefactor-badge]: https://www.codefactor.io/repository/github/wizzymore/http/badge
[codefactor]: https://www.codefactor.io/repository/github/wizzymore/http
