# Japanese Dictionary Search

#### Multiple dictionaries, one request

I often find myself looking at the same handful of sites when looking up a Japanese word, so the plan with this app is to collect results from the following sites, and then display them all in one place.

1. [weblio辞書](https://www.weblio.jp/): Japanese-Japanese dictionary
2. [weblio類語辞典](https://thesaurus.weblio.jp/): Japanese thesaurus
3. [jisho](https://jisho.org/): Japanese-English dictionary

## Routes

- GET `/`
  - This will eventually be a page with an input form for the search query, and a display for the dictionary results.

- GET `/api/search?query`
  - API route for retrieving definition data.
