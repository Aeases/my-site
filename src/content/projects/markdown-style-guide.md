---
title: "Markdown Style Guide"
description: "'what is a markdown?'"
pubDate: "Feb 03 2024"
heroImage: "../images/markdownsyntax.excalidraw.svg"
---
>**(This is a test document)**
# Headings

The following HTML `<h1>`—`<h6>` elements represent six levels of section headings. `<h1>` is the highest section level while `<h6>` is the lowest.

# H1

## H2

### H3

#### H4

##### H5

###### H6

## Paragraph

Xerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum, voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma dolestendit peritin re plis aut quas inctum laceat est volestemque commosa as cus endigna tectur, offic to cor sequas etum rerum idem sintibus eiur? Quianimin porecus evelectur, cum que nis nust voloribus ratem aut omnimi, sitatur? Quiatem. Nam, omnis sum am facea corem alique molestrunt et eos evelece arcillit ut aut eos eos nus, sin conecerem erum fuga. Ri oditatquam, ad quibus unda veliamenimin cusam et facea ipsamus es exerum sitate dolores editium rerore eost, temped molorro ratiae volorro te reribus dolorer sperchicium faceata tiustia prat.

Itatur? Quiatae cullecum rem ent aut odis in re eossequodi nonsequ idebis ne sapicia is sinveli squiatum, core et que aut hariosam ex eat.

## Blockquotes

The blockquote element represents content that is quoted from another source, optionally with a citation which must be within a `footer` or `cite` element, and optionally with in-line changes such as annotations and abbreviations.

### Blockquote without attribution

#### Syntax

```markdown
> Tiam, ad mint andaepu dandae nostion secatur sequo quae.  
> ***MARKDOWN*** *syntax* works within blockquotes, but def not codeblocks
```

#### Output

> Tiam, ad mint andaepu dandae nostion secatur sequo quae.  
> ***MARKDOWN*** *syntax* works within blockquotes, but def not codeblocks

### Blockquote with citation

#### Syntax

```markdown
> Don't communicate by sharing memory, share memory by communicating.<br>
> — <cite>Rob Pike[^1]</cite>
```

#### Output

> Don't communicate by sharing memory, share memory by communicating.<br>
> — <cite>Rob Pike[^1]</cite>

[^1]: The above quote is excerpted from Rob Pike's [talk](https://www.youtube.com/watch?v=PAAkCSZUG1c) during Gopherfest, November 18, 2015.

## Dividers & Callouts

Some text
<hr> <br>

some more text

>[!info] This is a callout
>
>Do you feel called out?

<br>



## Tables

#### Syntax

```markdown
| Italics   | Bold     | Code   |
| --------- | -------- | ------ |
| _italics_ | **bold** | `code` |
```

#### Output

| Italics   | Bold     | Code   |
| --------- | -------- | ------ |
| _italics_ | **bold** | `code` |

## Code Blocks
```
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 239.16665649414062 239.16665649414062" width="239.16665649414062" height="239.16665649414062" filter="invert(93%) hue-rotate(180deg)" class="excalidraw-svg">
  <!-- svg-source:excalidraw -->
  
  <defs>
    <style class="style-fonts">
      @font-face {
        font-family: "Virgil";
        src: url("https://excalidraw.com/Virgil.woff2");
      }
      @font-face {
        font-family: "Cascadia";
        src: url("https://excalidraw.com/Cascadia.woff2");
      }
      @font-face {
        font-family: "Assistant";
        src: url("https://excalidraw.com/Assistant-Regular.woff2");
      } 
    </style>
    
  </defs>
  <g stroke-linecap="round" transform="translate(5 5) rotate(0 114.58332824707031 114.58332824707031)"><path d="M32 0 C86.77 0.25, 144.8 0.67, 197.17 0 M32 0 C77.27 -1.08, 121.08 -0.4, 197.17 0 M197.17 0 C217.74 -1.11, 229.59 9.27, 229.17 32 M197.17 0 C218.41 -0.98, 230.56 8.77, 229.17 32 M229.17 32 C229.44 87.11, 231.26 145.4, 229.17 197.17 M229.17 32 C231.15 73.16, 230.04 115.37, 229.17 197.17 M229.17 197.17 C228.27 217.53, 219.88 230.93, 197.17 229.17 M229.17 197.17 C231.18 216.35, 219 230.57, 197.17 229.17 M197.17 229.17 C153.45 228.75, 112.88 228.66, 32 229.17 M197.17 229.17 C148.29 231.41, 99.65 229.61, 32 229.17 M32 229.17 C11.36 230.06, -1.68 217.81, 0 197.17 M32 229.17 C10.63 228.39, 1.63 217.94, 0 197.17 M0 197.17 C1.17 163.48, 0.48 126.83, 0 32 M0 197.17 C-0.87 143.76, -0.15 91.15, 0 32 M0 32 C-0.35 10.26, 10 -0.33, 32 0 M0 32 C0.08 8.99, 8.39 0.54, 32 0" stroke="#1e1e1e" stroke-width="2" fill="none"/></g><g stroke-linecap="round" transform="translate(11.25 9.861114501953125) rotate(0 107.63888549804688 107.63888549804688)"><path d="M88.94 0.52 C100.87 -3.06, 116.76 0.32, 129.46 2.98 C142.16 5.64, 154.24 9.74, 165.13 16.5 C176.02 23.25, 187.08 32.77, 194.8 43.5 C202.53 54.23, 208.34 68.27, 211.49 80.88 C214.64 93.48, 215.02 106.49, 213.72 119.12 C212.43 131.74, 209.63 144.96, 203.73 156.62 C197.83 168.29, 188.18 180.55, 178.31 189.09 C168.43 197.62, 156.55 203.51, 144.47 207.84 C132.4 212.16, 118.62 215.05, 105.87 215.05 C93.11 215.04, 79.9 212.5, 67.95 207.8 C56.01 203.09, 43.66 195.78, 34.18 186.81 C24.71 177.85, 16.7 165.68, 11.1 154 C5.51 142.31, 1.57 129.57, 0.61 116.69 C-0.34 103.82, 1.56 89.45, 5.37 76.75 C9.18 64.05, 15.64 50.68, 23.47 40.5 C31.29 30.32, 40.2 22.33, 52.32 15.67 C64.44 9.01, 87.86 2.89, 96.16 0.55 C104.47 -1.79, 102.16 -0.11, 102.17 1.63 M78.55 5.55 C90.02 0.8, 106.07 0.07, 118.73 0.85 C131.39 1.63, 143.05 4.28, 154.5 10.23 C165.95 16.17, 178.55 26.59, 187.42 36.52 C196.29 46.45, 203.05 58.04, 207.73 69.8 C212.4 81.55, 215.61 94.26, 215.45 107.07 C215.28 119.88, 211.22 134.31, 206.73 146.66 C202.23 159.02, 197.06 171.63, 188.46 181.2 C179.86 190.77, 166.89 198.55, 155.14 204.06 C143.39 209.58, 130.78 213.17, 117.95 214.28 C105.13 215.39, 90.51 214.18, 78.19 210.73 C65.88 207.29, 54.44 201.38, 44.05 193.6 C33.67 185.82, 22.72 174.95, 15.89 164.06 C9.05 153.17, 5.63 141.02, 3.05 128.26 C0.47 115.5, -2 100.39, 0.41 87.49 C2.83 74.59, 10.32 61.73, 17.55 50.85 C24.77 39.98, 33.71 30.05, 43.75 22.23 C53.79 14.41, 71.99 6.38, 77.79 3.94 C83.58 1.5, 77.88 5.77, 78.53 7.57" stroke="#1e1e1e" stroke-width="2" fill="none"/></g></svg>
```
#### Syntax

we can use 3 backticks ``` in new line and write snippet and close with 3 backticks on new line and to highlight language specific syntac, write one word of language name after first 3 backticks, for eg. html, javascript, css, markdown, typescript, txt, bash

````markdown
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Example HTML5 Document</title>
  </head>
  <body>
    <p>Test</p>
  </body>
</html>
```
````

Output

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Example HTML5 Document</title>
  </head>
  <body>
    <p>Test</p>
  </body>
</html>
```

## List Types

### Ordered List

#### Syntax

```markdown
1. First item
2. Second item
3. Third item
```

#### Output

1. First item
2. Second item
3. Third item

### Unordered List

#### Syntax

```markdown
- List item
- Another item
- And another item
```

#### Output

- List item
- Another item
- And another item

### Nested list

#### Syntax

```markdown
- Fruit
  - Apple
  - Orange
  - Banana
- Dairy
  - Milk
  - Cheese
```

#### Output

- Fruit
  - Apple
  - Orange
  - Banana
- Dairy
  - Milk
  - Cheese

## Other Elements — abbr, sub, sup, kbd, mark

#### Syntax

```markdown
<abbr title="Graphics Interchange Format">GIF</abbr> is a bitmap image format.

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

Press <kbd><kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Delete</kbd></kbd> to end the session.

Most <mark>salamanders</mark> are nocturnal, and hunt for insects, worms, and other small creatures.
```

#### Output

<abbr title="Graphics Interchange Format">GIF</abbr> is a bitmap image format.

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

Press <kbd><kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Delete</kbd></kbd> to end the session.

Most <mark>salamanders</mark> are nocturnal, and hunt for insects, worms, and other small creatures.
