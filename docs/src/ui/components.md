# **Components**

## **Intro**

While we use BootstrapVue as our CSS/UI framework, our UI library is made up of a customized amalgam of components and "interactions" not limited to Bootstrap.

While we do us BS tabs, navs/navbar, modals, and accordions, our carousel is from a (great) third party library, Swiper.js, and other components (flipcards, sticky scroll section, overlay/expand cards) are not BS components except for using native Bootstrap css styles/classes.

## **Component concept**

RTE components are not actually "components" in the modern sense. They are not self contained, they are not easily reused or reusable, they are not imported or shared throughout an application, and they are highly customized/differentiated from course to course (styling, javascript, JSON, LMS: see below). **This makes them very difficult to port from one project to another.**

## **Issues**

Components all rely heavily on context-specific code to function: this includes JSON/data structures, javascript, LMS functions, css, and images. As such, **if the base HTML of a component is copied and pasted from one project into another - or even from one page to another in the same project - it will not work.**

### Example

#### **Carousels**

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

## Suggestions

While TAM has begun a component repository to act as a global component reference, there needs to be a readily available, working example of each component (a la Bootstrap docs) without all the specific project-related code attached. 

For example a carousel could come out of the box with:

1. Core HTML
2. Hard coded text as opposed to JSON.keys
3. Placeholder images (unsplash etc) for slides
4. Basic, functional `css` classes
5. Basic, functional javascript
6. All specific javascript related to LMS, specialized directives, @assetLoaded or image functions, mobile detection, etc. can be referenced along with, but outside of the component so it will still function.

## Example: Flipcard component

For this example, context specific code has been commented out. Loops and v-html directives, i18n, functions, etc. are included but commented so they allow the component to function. A placeholder unsplash image is included for the img url.

#### HTML

```
<b-container class="my-5 pt-5">
    <b-row class="">
        <b-col data-aos="fade" class="py-3" md="6" xl="4">
            // <h2 class="callout-2" v-html="$t('page_3.section_1.title')"></h2>
            <h2 class="callout-2">Dummy title</h2>
            <ul class="">
                // <span v-for="item in $t('page_3.section_1.text_list')" :key="item.id">
                <span>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                    <li>Item 4</li>
                </span>
            </ul>
        </b-col>
        // <b-col data-aos="fade" class="py-3" md="6" xl="4" style="perspective: 1000px;" v-for="(card, index) in $t('page_3.section_1.cards_list')" :key="index">
        <b-col data-aos="fade" class="py-3" md="6" xl="4" style="perspective: 1000px;">
            // <a href="#" role="button" class="card flip h-100 2_1_flipcard" @click="flipCard('2_1_flipcard', $event)">
            <a href="#" role="button" class="card flip h-100 2_1_flipcard" @click="flipCard('2_1_flipcard', $event)">
                <div class="bg-citi-blue front d-flex flex-column justify-content-end">
                    <div class="py-4 w-100">
                        <b-img src="https://source.unsplash.com/700x700/?nature" @load="assetLoaded" class="w-100 absolute z-0 top left"></b-img>
                        <p class="callout-3 m-0 text-center text-white p-3">Dummy Card title</p>
                    </div>
                </div>
                <div aria-live="polite" class="back position-absolute invisible p-4 back_nobg">
                    <p class="mt-3">Dummy card text stuff</p>
                </div>
            </a>
        </b-col>
    </b-row>
</b-container>
```
#### CSS
```
// flip cards

.flip,
.flip:hover {
    transform-style: preserve-3d;
    color: inherit;
    text-decoration: none;
    border-radius: 0;
    box-shadow: 0px 0px 5px -3px #000000;
    min-height: 270px;
}

.front {
    background-color: #002D72;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}

.front,
.back {
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    min-height: 470px;
}

.back {
    transform: rotateY(-180deg);
    background-color: #fff;
    overflow: auto;
}

// flip cards
```
#### Javascript

Contextual Javascript resides in the `mixin.js` file under the `flipCard()` function.