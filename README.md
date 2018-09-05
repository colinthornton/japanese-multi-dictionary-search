# Japanese Dictionary Search

#### Multiple dictionaries, one request

I often find myself looking at the same handful of sites when looking up a Japanese word, so the plan with this app is to collect results from the following sites, and then display them all in one place.

1. [x] [weblio辞書](https://www.weblio.jp/): Japanese-Japanese dictionary
2. [ ] [weblio類語辞典](https://thesaurus.weblio.jp/): Japanese thesaurus
3. [x] [jisho](https://jisho.org/): Japanese-English dictionary

## Routes

- `GET /`
  - (WIP) Hosts the [client](https://github.com/colinthornton/japanese-multi-dictionary-search-client).

- `GET /api/search`
  - Parameters: query

```
Ex) /api/search?query=検索

"query": "検索",
"results": [
  {
    "site": "Weblio辞書",
    "url": "https://www.weblio.jp/content/検索",
    "content": [
      {
        "word": "けん さく ［0］ 【検索】",
        "definitions": [
          "（ 名 ） スル 書物・カードなどから、必要な事柄を探し出すこと。 「索引があるので－するのに便利だ」"
        ]
      }
    ]
  },
  {
    "site": "Jisho.org",
    "url": "https://www.jisho.org/search/検索",
    "content": [...]
  }
]
```
