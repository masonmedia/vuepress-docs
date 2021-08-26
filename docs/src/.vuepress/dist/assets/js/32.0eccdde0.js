(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{420:function(e,t,a){"use strict";a.r(t);var o=a(26),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"components"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#components"}},[e._v("#")]),e._v(" "),a("strong",[e._v("Components")])]),e._v(" "),a("h2",{attrs:{id:"intro"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#intro"}},[e._v("#")]),e._v(" "),a("strong",[e._v("Intro")])]),e._v(" "),a("p",[e._v('While we use BootstrapVue as our CSS/UI framework, our UI library is made up of a customized amalgam of components and "interactions" not limited to Bootstrap.')]),e._v(" "),a("p",[e._v("While we do us BS tabs, navs/navbar, modals, and accordions, our carousel is from a (great) third party library, Swiper.js, and other components (flipcards, sticky scroll section, overlay/expand cards) are not BS components except for using native Bootstrap css styles/classes.")]),e._v(" "),a("h2",{attrs:{id:"component-concept"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#component-concept"}},[e._v("#")]),e._v(" "),a("strong",[e._v("Component concept")])]),e._v(" "),a("p",[e._v('RTE components are not actually "components" in the modern sense. They are not self contained, they are not easily reused or reusable, they are not imported or shared throughout an application, and they are highly customized/differentiated from course to course (styling, javascript, JSON, LMS: see below). '),a("strong",[e._v("This makes them very difficult to port from one project to another.")])]),e._v(" "),a("h2",{attrs:{id:"issues"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#issues"}},[e._v("#")]),e._v(" "),a("strong",[e._v("Issues")])]),e._v(" "),a("p",[e._v("TAM components all rely heavily on context-specific code to function: this includes JSON/data structures, javascript, LMS functions, css, and images. As such, "),a("strong",[e._v("if the base HTML of a component is copied and pasted from one project into another - or even from one page to another in the same project - it will not work.")])]),e._v(" "),a("h3",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" Example")]),e._v(" "),a("h4",{attrs:{id:"carousels"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#carousels"}},[e._v("#")]),e._v(" "),a("strong",[e._v("Carousels")])]),e._v(" "),a("p",[e._v("TAM carousels current have code divided into the base HTML structure, text content in JSON, image/slide urls in an array in the "),a("code",[e._v("data()")]),e._v(" option, initialization in the "),a("code",[e._v("mounted()")]),e._v(" option/hook, and css located in both on-page style tags and separate css files. This means devs need to go to multiple places if edits need to be made or if the component is required for another project (see below).")]),e._v(" "),a("h4",{attrs:{id:"locating-components"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#locating-components"}},[e._v("#")]),e._v(" "),a("strong",[e._v("Locating components")])]),e._v(" "),a("p",[e._v("Component code is most often divided between (at minimum) "),a("code",[e._v("HTML")]),e._v(" and "),a("code",[e._v("JSON")]),e._v(" files. To copy a component from one project to another is a multistep process:")]),e._v(" "),a("ul",[a("li",[e._v("First the component must be found in the project; this usually entails cloning the original repo and clicking through the course to find which page it's on;")]),e._v(" "),a("li",[e._v("The first problem occurs when "),a("strong",[e._v("the pages of the course and the pages of HTML/JSON do not match:")]),e._v(" "),a("ul",[a("li",[e._v("i.e. in "),a("code",[e._v("citi_euc")]),e._v(", page 3 of the actual WBT is page 4 of HTML and JSON.")])])]),e._v(" "),a("li",[e._v("The component then must be located on the page and copied, in addition to the related JSON, as well as any related javascript and css.\n"),a("ul",[a("li",[e._v("it can be a difficult task locating and parsing what custom JS and LMS functions go along with the component (see below).")])])])]),e._v(" "),a("h4",{attrs:{id:"json"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#json"}},[e._v("#")]),e._v(" JSON")]),e._v(" "),a("p",[e._v('All TAM content (increasingly, including images) is delivered via JSON and i18n for translation. If any keys do not match or are not found, the component will not dislay or function. As JSON data structures are unique to every course (as is JS, etc.), there is currently no way we can have a "component" that functions when pulled out of the context it\'s built in.')]),e._v(" "),a("h4",{attrs:{id:"lms-javascript"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lms-javascript"}},[e._v("#")]),e._v(" LMS & Javascript")]),e._v(" "),a("p",[e._v("LMS calls (submitted, completed, etc) while standard, are also unique to every course and to every component. When trying to copy/paste a component, all related LMS/javascript code is also required to come along for it to work.")]),e._v(" "),a("h4",{attrs:{id:"css"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css"}},[e._v("#")]),e._v(" CSS")]),e._v(" "),a("p",[e._v("Unique, contextual "),a("code",[e._v("css")]),e._v(" classes, or dynamic or inline styles applied to a component will render it either unusable or misshapen if it is pulled out of its original context and put into another project as-is.")]),e._v(" "),a("h4",{attrs:{id:"images"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#images"}},[e._v("#")]),e._v(" Images")]),e._v(" "),a("p",[e._v("This also applies to all images associated with a component, be it coming from JSON or the "),a("code",[e._v("img")]),e._v(" folder.")]),e._v(" "),a("h2",{attrs:{id:"suggestions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#suggestions"}},[e._v("#")]),e._v(" Suggestions")]),e._v(" "),a("p",[e._v("While TAM has begun a component repository to act as a global component reference, there needs to be a readily available, working example of each component (a la Bootstrap docs) without all the specific project-related code attached.")]),e._v(" "),a("p",[e._v("For example a carousel could come out of the box with:")]),e._v(" "),a("ol",[a("li",[e._v("Core HTML")]),e._v(" "),a("li",[e._v("Hard coded text as opposed to JSON.keys")]),e._v(" "),a("li",[e._v("Placeholder images (unsplash etc) for slides")]),e._v(" "),a("li",[e._v("Basic, functional "),a("code",[e._v("css")]),e._v(" classes")]),e._v(" "),a("li",[e._v("Basic, functional javascript")]),e._v(" "),a("li",[e._v("All specific javascript related to LMS, specialized directives, @assetLoaded or image functions, mobile detection, etc. can be referenced along with, but outside of the component so it will still function.")])]),e._v(" "),a("h2",{attrs:{id:"example-flipcard-component"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-flipcard-component"}},[e._v("#")]),e._v(" Example: Flipcard component")]),e._v(" "),a("p",[e._v("For this example, context specific code has been commented out. Loops and v-html directives, i18n, functions, etc. are included but commented so they allow the component to function. A placeholder unsplash image is included for the img url.")]),e._v(" "),a("h4",{attrs:{id:"html"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#html"}},[e._v("#")]),e._v(" HTML")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('<b-container class="my-5 pt-5">\n    <b-row class="">\n        <b-col data-aos="fade" class="py-3" md="6" xl="4">\n            // <h2 class="callout-2" v-html="$t(\'page_3.section_1.title\')"></h2>\n            <h2 class="callout-2">Dummy title</h2>\n            <ul class="">\n                // <span v-for="item in $t(\'page_3.section_1.text_list\')" :key="item.id">\n                <span>\n                    <li>Item 1</li>\n                    <li>Item 2</li>\n                    <li>Item 3</li>\n                    <li>Item 4</li>\n                </span>\n            </ul>\n        </b-col>\n        // <b-col data-aos="fade" class="py-3" md="6" xl="4" style="perspective: 1000px;" v-for="(card, index) in $t(\'page_3.section_1.cards_list\')" :key="index">\n        <b-col data-aos="fade" class="py-3" md="6" xl="4" style="perspective: 1000px;">\n            // <a href="#" role="button" class="card flip h-100 2_1_flipcard" @click="flipCard(\'2_1_flipcard\', $event)">\n            <a href="#" role="button" class="card flip h-100 2_1_flipcard" @click="flipCard(\'2_1_flipcard\', $event)">\n                <div class="bg-citi-blue front d-flex flex-column justify-content-end">\n                    <div class="py-4 w-100">\n                        <b-img src="https://source.unsplash.com/700x700/?nature" @load="assetLoaded" class="w-100 absolute z-0 top left"></b-img>\n                        <p class="callout-3 m-0 text-center text-white p-3">Dummy Card title</p>\n                    </div>\n                </div>\n                <div aria-live="polite" class="back position-absolute invisible p-4 back_nobg">\n                    <p class="mt-3">Dummy card text stuff</p>\n                </div>\n            </a>\n        </b-col>\n    </b-row>\n</b-container>\n')])])]),a("h4",{attrs:{id:"css-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css-2"}},[e._v("#")]),e._v(" CSS")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// flip cards\n\n.flip,\n.flip:hover {\n    transform-style: preserve-3d;\n    color: inherit;\n    text-decoration: none;\n    border-radius: 0;\n    box-shadow: 0px 0px 5px -3px #000000;\n    min-height: 270px;\n}\n\n.front {\n    background-color: #002D72;\n    background-position: center;\n    background-size: cover;\n    background-repeat: no-repeat;\n}\n\n.front,\n.back {\n    backface-visibility: hidden;\n    -webkit-backface-visibility: hidden;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n    min-height: 470px;\n}\n\n.back {\n    transform: rotateY(-180deg);\n    background-color: #fff;\n    overflow: auto;\n}\n\n// flip cards\n")])])]),a("h4",{attrs:{id:"javascript"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#javascript"}},[e._v("#")]),e._v(" Javascript")]),e._v(" "),a("p",[e._v("Contextual Javascript resides in the "),a("code",[e._v("mixin.js")]),e._v(" file under the "),a("code",[e._v("flipCard()")]),e._v(" function.")])])}),[],!1,null,null,null);t.default=s.exports}}]);