# **Styling**

## Native Bootstrap classes + Atomic CSS

Where possible TAM uses Bootstrap's utility classes for everything from layout to spacing and accessibility.

## Semantic HTML vs. styling

Currently a dev practice is to use multiple `<p>` tags in a section of text content, and then style them differently with `CSS` - as opposed to using semantic `HTML` tags. This has come up in response to - at least in part - the fact that TAM does not so much need to worry about SEO and traditional ranking and searchability of text and HTML tags.

The problem with this however is that it makes navigation of the `HTML` for editing or maintenance extremely difficult - especially when trying to match JSON keys with their `HTML` counterparts in the code.

TAM in the process of refactoring this process to shoot for more semantic use of HTML to create traditional DOM hierarchy, and make it easier for developers to parse and maintain.