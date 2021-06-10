# **Components**

## Intro

While we use BootstrapVue as our CSS/UI framework, our component library is made up of a customized amalgam of "interactions" not limited only to Bootstrap.

While we do us BS tabs, navs/navbar, modals, and accordions, our carousel is from a (great) third party library, Swiper.js, and other components (flipcards, sticky scroll section, overlay/expand cards) are not BS components except for using native Bootstrap css styles/classes.

## Component concept

RTE Components are not actually "components" in the modern sense of the word. They are not self contained, they are not easily "reused" or reusable, they are not imported or shared throughout an application, and they are highly customized/differentiated from course to course (styling, javascript, JSON, LMS: see below). **This makes them very difficult to port from one project to another.**

## Javascript, JSON, LMS interactions

Components all rely heavily on context-specific code to function: this includes JSON/data structures, javascript, LMS functions, css, and images. As such, **if the base HTML of a component is copied and pasted from one project into another, or even from one page to another in the same project, it will not work.**

#### JSON

All TAM content (increasingly, including images) is delivered via JSON and i18n for translation. If any keys do not match or are not found, the component will not dislay or function. As JSON data structures are unique to every course (as is JS, etc.), there is currently no way we can have a "component" that functions when pulled out of the context it's built in.

#### LMS & Javascript

LMS calls (submitted, completed, etc) while standard, are also unique to every course and to every component. When trying to copy/paste a component, all related LMS/javascript code is also required to come along for it to work.

#### CSS

Unique, contextual `css` classes, or dynamic or inline styles applied to a component will render it either unusable or misshapen if it is pulled out of its original context and put into another project as-is.

#### Images

This also applies to all images associated with a component, be it coming from JSON or the `img` folder.

## Suggestions

While TAM has begun a component repository to act as a global component reference, there needs to be a readily available, working example of each component (a la Bootstrap docs) without all the specific project-related code attached. 

For example a carousel could come out of the box with:

1. Core HTML
2. Hard coded text as opposed to JSON.keys
3. Placeholder images (unsplash etc) for slides
4. Basic, functional `css` classes
5. Basic, functional javascript
6. All specific javascript related to LMS, specialized directives, @assetLoaded or image functions, mobile detection, etc. can be referenced along with, but outside of the component so it will still function.