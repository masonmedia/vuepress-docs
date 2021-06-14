# **Components**

## **Intro**

While we use BootstrapVue as our CSS/UI framework, our UI library is made up of a customized amalgam of components and "interactions" not limited to Bootstrap.

While we do us BS tabs, navs/navbar, modals, and accordions, our carousel is from a (great) third party library, Swiper.js, and other components (flipcards, sticky scroll section, overlay/expand cards) are not BS components except for using native Bootstrap css styles/classes.

## **Component concept**

RTE components are not actually "components" in the modern sense. They are not self contained, they are not easily reused or reusable, they are not imported or shared throughout an application, and they are highly customized/differentiated from course to course (styling, javascript, JSON, LMS: see below). **This makes them very difficult to port from one project to another.**

## **Issues**

Components all rely heavily on context-specific code to function: this includes JSON/data structures, javascript, LMS functions, css, and images. As such, **if the base HTML of a component is copied and pasted from one project into another - or even from one page to another in the same project - it will not work.**

### Example

##### **Carousels**

TAM carousels current have code divided into the base HTML structure, text content in JSON, image/slide urls in an array in the data() option, initialization in the mounted option/hook, and css located in both on-page style tags and separate css files. This means devs need to go to multiple places if edits need to be made to this component.

#### **Locating components**

Component code is most often divided between (at minimum) `HTML` and `JSON` files. To copy a component from one project to another is a multistep process: 

+ First the component must be found in the project; this usually entails cloning the repo and clicking through the course to find which page it's on;
+ The first problem occurs when **the pages of the course and the pages of HTML/JSON do not match:**
    - i.e. in `citi_euc`, page 3 of the actual WBT is page 4 of HTML and JSON.
+ The component then must be located on the page, and copied, in addition to the related JSON, as well as any related javascript and css
    - it can be a difficult task locating and parsing what custom JS and LMS functions go along with the component (see below).

#### JSON

All TAM content (increasingly, including images) is delivered via JSON and i18n for translation. If any keys do not match or are not found, the component will not dislay or function. As JSON data structures are unique to every course (as is JS, etc.), there is currently no way we can have a "component" that functions when pulled out of the context it's built in.

#### LMS & Javascript

LMS calls (submitted, completed, etc) while standard, are also unique to every course and to every component. When trying to copy/paste a component, all related LMS/javascript code is also required to come along for it to work.

#### CSS

Unique, contextual `css` classes, or dynamic or inline styles applied to a component will render it either unusable or misshapen if it is pulled out of its original context and put into another project as-is.

#### Images

This also applies to all images associated with a component, be it coming from JSON or the `img` folder.

## A **short example**

A flipcard component from one course was referenced for use in another's storyboard.

First the above process for locating the component was undertaken. The HTML, JSON, and CSS were copied over. Images were commented out. Component did not work. Back to the original course; there was a tangle of related javascript functions in various of the Vue options (data, methods), which were trial and errored to see what was needed.

After 30 minutes, the component finally worked. But with sections commented out, and all the original code still named as such, with keys and IDs from the old/original course.

The next step would be to rename all those keys and IDs to import the proper JSON and images from the current course.

## Suggestions

While TAM has begun a component repository to act as a global component reference, there needs to be a readily available, working example of each component (a la Bootstrap docs) without all the specific project-related code attached. 

For example a carousel could come out of the box with:

1. Core HTML
2. Hard coded text as opposed to JSON.keys
3. Placeholder images (unsplash etc) for slides
4. Basic, functional `css` classes
5. Basic, functional javascript
6. All specific javascript related to LMS, specialized directives, @assetLoaded or image functions, mobile detection, etc. can be referenced along with, but outside of the component so it will still function.