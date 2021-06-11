(window.webpackJsonp=window.webpackJsonp||[]).push([[238],{309:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return d})),a.d(t,"default",(function(){return c}));var n=a(3),o=a(7),i=(a(0),a(733)),r={id:"modal",title:"Modal"},l={unversionedId:"modal",id:"modal",isDocsHomePage:!1,title:"Modal",description:"A Modal is a window overlaid on either the primary window or another dialog window. Content behind a modal dialog is inert, meaning that users cannot interact with it.",source:"@site/docs/modal.md",slug:"/modal",permalink:"/next/modal",editUrl:"https://github.com/nativebase/website/tree/main/docs/modal.md",version:"current",sidebar:"componentsSidebar",previous:{title:"Menu",permalink:"/next/menu"},next:{title:"Popover",permalink:"/next/popOver"}},d=[{value:"Import",id:"import",children:[]},{value:"Examples",id:"examples",children:[{value:"Basic",id:"basic",children:[]},{value:"Modal Sizes",id:"modal-sizes",children:[]},{value:"intialFocusRef and finalFocusRef Example",id:"intialfocusref-and-finalfocusref-example",children:[]},{value:"Modal with avoidKeyboard",id:"modal-with-avoidkeyboard",children:[]},{value:"Modal Placement",id:"modal-placement",children:[]}]},{value:"Accessibility",id:"accessibility",children:[{value:"Keyboard Interactions",id:"keyboard-interactions",children:[]}]},{value:"Props",id:"props",children:[{value:"Modal",id:"modal",children:[]},{value:"Children components",id:"children-components",children:[]}]}],s={toc:d};function c(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"A Modal is a window overlaid on either the primary window or another dialog window. Content behind a modal dialog is ",Object(i.b)("strong",{parentName:"p"},"inert"),", meaning that users cannot interact with it."),Object(i.b)("h2",{id:"import"},"Import"),Object(i.b)("p",null,"NativeBase exports Modal Compound component:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Modal"),": The wrapper that provides context for its children."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Modal.Content"),": The container for the modal dialog's content."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Modal.Header"),": The header that labels the modal dialog."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Modal.Footer"),": The footer that houses the modal actions."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Modal.Body"),": The wrapper that houses the modal's main content."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Modal.CloseButton"),": The button that closes the modal.")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"import { Modal } from 'native-base';\n")),Object(i.b)("h2",{id:"examples"},"Examples"),Object(i.b)("h3",{id:"basic"},"Basic"),Object(i.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%0Aimport%20%7B%20Button%2C%20Modal%2C%20Center%2C%20NativeBaseProvider%20%7D%20from%20%22native-base%22%0Aimport%20%7B%20useState%20%7D%20from%20%22react%22%0Aexport%20const%20Example%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20%5BshowModal%2C%20setShowModal%5D%20%3D%20useState(false)%0A%20%20return%20(%0A%20%20%20%20%3C%3E%0A%20%20%20%20%20%20%3CButton%20onPress%3D%7B()%20%3D%3E%20setShowModal(true)%7D%3EButton%3C%2FButton%3E%0A%20%20%20%20%20%20%3CModal%20isOpen%3D%7BshowModal%7D%20onClose%3D%7B()%20%3D%3E%20setShowModal(false)%7D%3E%0A%20%20%20%20%20%20%20%20%3CModal.Content%20maxWidth%3D%22400px%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3CModal.CloseButton%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CModal.Header%3EModal%20Title%3C%2FModal.Header%3E%0A%20%20%20%20%20%20%20%20%20%20%3CModal.Body%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20Sit%20nulla%20est%20ex%20deserunt%20exercitation%20anim%20occaecat.%20Nostrud%0A%20%20%20%20%20%20%20%20%20%20%20%20ullamco%20deserunt%20aute%20id%20consequat%20veniam%20incididunt%20duis%20in%20sint%0A%20%20%20%20%20%20%20%20%20%20%20%20irure%20nisi.%20Mollit%20officia%20cillum%20Lorem%20ullamco%20minim%20nostrud%20elit%0A%20%20%20%20%20%20%20%20%20%20%20%20officia%20tempor%20esse%20quis.%20Sunt%20ad%20dolore%20quis%20aute%20consequat.%20Magna%0A%20%20%20%20%20%20%20%20%20%20%20%20exercitation%20reprehenderit%20magna%20aute%20tempor%20cupidatat%20consequat%0A%20%20%20%20%20%20%20%20%20%20%20%20elit%20dolor%20adipisicing.%20Mollit%20dolor%20eiusmod%20sunt%20ex%20incididunt%0A%20%20%20%20%20%20%20%20%20%20%20%20cillum%20quis.%20Velit%20duis%20sit%20officia%20eiusmod%20Lorem%20aliqua%20enim%0A%20%20%20%20%20%20%20%20%20%20%20%20ullamco%20deserunt%20aute%20id%20consequat%20veniam%20incididunt%20duis%20in%20sint%0A%20%20%20%20%20%20%20%20%20%20%20%20irure%20nisi.%20Mollit%20officia%20cillum%20Lorem%20ullamco%20minim%20nostrud%20elit%0A%20%20%20%20%20%20%20%20%20%20%20%20officia%20tempor%20esse%20quis.%20Sunt%20ad%20dolore%20quis%20aute%20consequat.%20Magna%0A%20%20%20%20%20%20%20%20%20%20%20%20exercitation%20reprehenderit%20magna%20aute%20tempor%20cupidatat%20consequat%0A%20%20%20%20%20%20%20%20%20%20%20%20elit%20dolor%20adipisicing.%20Mollit%20dolor%20eiusmod%20sunt%20ex%20incididunt%0A%20%20%20%20%20%20%20%20%20%20%20%20cillum%20quis.%20Velit%20duis%20sit%20officia%20eiusmod%20Lorem%20aliqua%20enim%0A%20%20%20%20%20%20%20%20%20%20%20%20exercitation%20reprehenderit%20magna%20aute%20tempor%20cupidatat%20consequat%0A%20%20%20%20%20%20%20%20%20%20%20%20elit%20dolor%20adipisicing.%20Mollit%20dolor%20eiusmod%20sunt%20ex%20incididunt%0A%20%20%20%20%20%20%20%20%20%20%20%20cillum%20quis.%20Velit%20duis%20sit%20officia%20eiusmod%20Lorem%20aliqua%20enim%0A%20%20%20%20%20%20%20%20%20%20%20%20ullamco%20deserunt%20aute%20id%20consequat%20veniam%20incididunt%20duis%20in%20sint%0A%20%20%20%20%20%20%20%20%20%20%20%20irure%20nisi.%20Mollit%20officia%20cillum%20Lorem%20ullamco%20minim%20nostrud%20elit%0A%20%20%20%20%20%20%20%20%20%20%20%20officia%20tempor%20esse%20quis.%20Sunt%20ad%20dolore%20quis%20aute%20consequat.%20Magna%0A%20%20%20%20%20%20%20%20%20%20%20%20exercitation%20reprehenderit%20magna%20aute%20tempor%20cupidatat%20consequat%0A%20%20%20%20%20%20%20%20%20%20%20%20elit%20dolor%20adipisicing.%20Mollit%20dolor%20eiusmod%20sunt%20ex%20incididunt%0A%20%20%20%20%20%20%20%20%20%20%20%20cillum%20quis.%20Velit%20duis%20sit%20officia%20eiusmod%20Lorem%20aliqua%20enim%0A%20%20%20%20%20%20%20%20%20%20%3C%2FModal.Body%3E%0A%20%20%20%20%20%20%20%20%20%20%3CModal.Footer%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CButton.Group%20variant%3D%22ghost%22%20space%3D%7B2%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CButton%3ELEARN%20MORE%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20setShowModal(false)%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20ACCEPT%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FButton.Group%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FModal.Footer%3E%0A%20%20%20%20%20%20%20%20%3C%2FModal.Content%3E%0A%20%20%20%20%20%20%3C%2FModal%3E%0A%20%20%20%20%3C%2F%3E%0A%20%20)%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient","data-snack-sdkversion":"40.0.0"}),Object(i.b)("h3",{id:"modal-sizes"},"Modal Sizes"),Object(i.b)("p",null,"You can pass ",Object(i.b)("inlineCode",{parentName:"p"},"size")," prop to NativeBase Modal , it can take ",Object(i.b)("inlineCode",{parentName:"p"},"sm"),", ",Object(i.b)("inlineCode",{parentName:"p"},"md"),", ",Object(i.b)("inlineCode",{parentName:"p"},"lg"),", ",Object(i.b)("inlineCode",{parentName:"p"},"full")," that maps to ",Object(i.b)("strong",{parentName:"p"},"60%"),", ",Object(i.b)("strong",{parentName:"p"},"75%"),", ",Object(i.b)("strong",{parentName:"p"},"90%"),", ",Object(i.b)("strong",{parentName:"p"},"100%"),", or a string or a numerical width of the Modal."),Object(i.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"%2F%2F%20%40ts-nocheck%0Aimport%20React%20from%20%22react%22%0Aimport%20%7B%20Modal%2C%20Button%2C%20VStack%2C%20Center%2C%20NativeBaseProvider%20%7D%20from%20%22native-base%22%0Aexport%20function%20Example()%20%7B%0A%20%20const%20%5BmodalVisible%2C%20setModalVisible%5D%20%3D%20React.useState(false)%0A%20%20const%20%5Bsize%2C%20setSize%5D%20%3D%20React.useState(%22md%22)%0A%0A%20%20const%20handleSizeClick%20%3D%20(newSize)%20%3D%3E%20%7B%0A%20%20%20%20setSize(newSize)%0A%20%20%20%20setModalVisible(!modalVisible)%0A%20%20%7D%0A%0A%20%20return%20(%0A%20%20%20%20%3C%3E%0A%20%20%20%20%20%20%3CModal%20isOpen%3D%7BmodalVisible%7D%20onClose%3D%7BsetModalVisible%7D%20size%3D%7Bsize%7D%3E%0A%20%20%20%20%20%20%20%20%3CModal.Content%3E%0A%20%20%20%20%20%20%20%20%20%20%3CModal.CloseButton%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CModal.Header%3EModal%20Title%3C%2FModal.Header%3E%0A%20%20%20%20%20%20%20%20%20%20%3CModal.Body%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20Sit%20nulla%20est%20ex%20deserunt%20exercitation%20anim%20occaecat.%20Nostrud%0A%20%20%20%20%20%20%20%20%20%20%20%20ullamco%20deserunt%20aute%20id%20consequat%20veniam%20incididunt%20duis%20in%20sint%0A%20%20%20%20%20%20%20%20%20%20%20%20irure%20nisi.%20Mollit%20officia%20cillum%20Lorem%20ullamco%20minim%20nostrud%20elit%0A%20%20%20%20%20%20%20%20%20%20%20%20officia%20tempor%20esse%20quis.%20Sunt%20ad%20dolore%20quis%20aute%20consequat.%20Magna%0A%20%20%20%20%20%20%20%20%20%20%20%20exercitation%20reprehenderit%20magna%20aute%20tempor%20cupidatat%20consequat%0A%20%20%20%20%20%20%20%20%20%20%20%20elit%20dolor%20adipisicing.%20Mollit%20dolor%20eiusmod%20sunt%20ex%20incididunt%0A%20%20%20%20%20%20%20%20%20%20%20%20cillum%20quis.%20Velit%20duis%20sit%20officia%20eiusmod%20Lorem%20aliqua%20enim%0A%20%20%20%20%20%20%20%20%20%20%20%20laboris%20do%20dolor%20eiusmod.%20Et%20mollit%20incididunt%20nisi%20consectetur%20esse%0A%20%20%20%20%20%20%20%20%20%20%20%20laborum%20eiusmod%20pariatur%0A%20%20%20%20%20%20%20%20%20%20%3C%2FModal.Body%3E%0A%20%20%20%20%20%20%20%20%20%20%3CModal.Footer%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CButton.Group%20variant%3D%22ghost%22%20space%3D%7B2%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CButton%3ESAVE%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20setModalVisible(!modalVisible)%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20colorScheme%3D%22muted%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20CLOSE%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FButton.Group%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FModal.Footer%3E%0A%20%20%20%20%20%20%20%20%3C%2FModal.Content%3E%0A%20%20%20%20%20%20%3C%2FModal%3E%0A%20%20%20%20%20%20%3CVStack%20space%3D%7B2%7D%3E%0A%20%20%20%20%20%20%20%20%7B%5B%22sm%22%2C%20%22md%22%2C%20%22lg%22%2C%20%22full%22%5D.map((size)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20return%20(%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20handleSizeClick(size)%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20key%3D%7Bsize%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3E%7B%60Open%20%24%7Bsize%7D%20Modal%60%7D%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%20%20)%0A%20%20%20%20%20%20%20%20%7D)%7D%0A%20%20%20%20%20%20%3C%2FVStack%3E%0A%20%20%20%20%3C%2F%3E%0A%20%20)%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient","data-snack-sdkversion":"40.0.0"}),Object(i.b)("h3",{id:"intialfocusref-and-finalfocusref-example"},"intialFocusRef and finalFocusRef Example"),Object(i.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%0Aimport%20%7B%20Modal%2C%20Button%2C%20Input%2C%20Center%2C%20NativeBaseProvider%20%7D%20from%20%22native-base%22%0Aexport%20function%20Example()%20%7B%0A%20%20const%20%5BmodalVisible%2C%20setModalVisible%5D%20%3D%20React.useState(false)%0A%20%20const%20initialRef%20%3D%20React.useRef(null)%0A%20%20const%20finalRef%20%3D%20React.useRef(null)%0A%20%20return%20(%0A%20%20%20%20%3C%3E%0A%20%20%20%20%20%20%3CModal%0A%20%20%20%20%20%20%20%20isOpen%3D%7BmodalVisible%7D%0A%20%20%20%20%20%20%20%20onClose%3D%7BsetModalVisible%7D%0A%20%20%20%20%20%20%20%20initialFocusRef%3D%7BinitialRef%7D%0A%20%20%20%20%20%20%20%20finalFocusRef%3D%7BfinalRef%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3CModal.Content%3E%0A%20%20%20%20%20%20%20%20%20%20%3CModal.CloseButton%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CModal.Header%3EWant%20to%20set%20focus%20somewhere%3F%3C%2FModal.Header%3E%0A%20%20%20%20%20%20%20%20%20%20%3CModal.Body%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20The%20below%20input%20will%20get%20focus%20upon%20opening%20of%20the%20Modal%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CInput%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20mt%3D%7B4%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20ref%3D%7BinitialRef%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20placeholder%3D%22I'll%20recieve%20focus%20on%20Modal's%20opening%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FModal.Body%3E%0A%20%20%20%20%20%20%20%20%20%20%3CModal.Footer%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CButton.Group%20variant%3D%22ghost%22%20space%3D%7B2%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CButton%3ESAVE%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20setModalVisible(!modalVisible)%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20colorScheme%3D%22secondary%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20CLOSE%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FButton.Group%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FModal.Footer%3E%0A%20%20%20%20%20%20%20%20%3C%2FModal.Content%3E%0A%20%20%20%20%20%20%3C%2FModal%3E%0A%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20setModalVisible(!modalVisible)%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20Open%20Modal%0A%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%20%20%3CInput%20mt%3D%7B4%7D%20ref%3D%7BfinalRef%7D%20placeholder%3D%22I'll%20receive%20focus%20on%20close%22%20%2F%3E%0A%20%20%20%20%3C%2F%3E%0A%20%20)%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient","data-snack-sdkversion":"40.0.0"}),Object(i.b)("h3",{id:"modal-with-avoidkeyboard"},"Modal with avoidKeyboard"),Object(i.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%0Aimport%20%7B%0A%20%20Modal%2C%0A%20%20Button%2C%0A%20%20Input%2C%0A%20%20VStack%2C%0A%20%20Text%2C%0A%20%20Center%2C%0A%20%20NativeBaseProvider%2C%0A%7D%20from%20%22native-base%22%0Aexport%20function%20Example()%20%7B%0A%20%20const%20%5BmodalVisible%2C%20setModalVisible%5D%20%3D%20React.useState(false)%0A%20%20return%20(%0A%20%20%20%20%3C%3E%0A%20%20%20%20%20%20%3CModal%20isOpen%3D%7BmodalVisible%7D%20onClose%3D%7BsetModalVisible%7D%20avoidKeyboard%3E%0A%20%20%20%20%20%20%20%20%3CModal.Content%3E%0A%20%20%20%20%20%20%20%20%20%20%3CModal.CloseButton%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CModal.Header%3EModal%20in%20keyboardAvoidView%3C%2FModal.Header%3E%0A%20%20%20%20%20%20%20%20%20%20%3CModal.Body%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20Try%20typing%20something%20in%20the%20Input.%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CInput%20mt%3D%7B4%7D%20placeholder%3D%22Click%20here...%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FModal.Body%3E%0A%20%20%20%20%20%20%20%20%20%20%3CModal.Footer%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CButton.Group%20variant%3D%22ghost%22%20space%3D%7B2%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CButton%3ESAVE%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20setModalVisible(!modalVisible)%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20colorScheme%3D%22secondary%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20CLOSE%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FButton.Group%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FModal.Footer%3E%0A%20%20%20%20%20%20%20%20%3C%2FModal.Content%3E%0A%20%20%20%20%20%20%3C%2FModal%3E%0A%20%20%20%20%20%20%3CVStack%20space%3D%7B2%7D%3E%0A%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20setModalVisible(!modalVisible)%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20Open%20Modal%0A%20%20%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%3CText%3E%0A%20%20%20%20%20%20%20%20%20%20Open%20modal%20and%20focus%20on%20the%20input%20element%20to%20see%20the%20effect.%0A%20%20%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FVStack%3E%0A%20%20%20%20%3C%2F%3E%0A%20%20)%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient","data-snack-sdkversion":"40.0.0"}),Object(i.b)("h3",{id:"modal-placement"},"Modal Placement"),Object(i.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"%2F%2F%40ts-nocheck%0Aimport%20React%20from%20%22react%22%0Aimport%20%7B%20Button%2C%20Modal%2C%20VStack%2C%20Center%2C%20NativeBaseProvider%20%7D%20from%20%22native-base%22%0Aimport%20%7B%20useState%20%7D%20from%20%22react%22%0Aexport%20const%20Example%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20%5Bplacement%2C%20setPlacement%5D%20%3D%20useState(undefined)%0A%20%20const%20%5Bopen%2C%20setOpen%5D%20%3D%20useState(false)%0A%0A%20%20const%20openModal%20%3D%20(placement)%20%3D%3E%20%7B%0A%20%20%20%20setOpen(true)%0A%20%20%20%20setPlacement(placement)%0A%20%20%7D%0A%0A%20%20return%20(%0A%20%20%20%20%3C%3E%0A%20%20%20%20%20%20%3CVStack%20space%3D%7B2%7D%3E%0A%20%20%20%20%20%20%20%20%3CButton%20onPress%3D%7B()%20%3D%3E%20openModal(%22top%22)%7D%3ETop%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%3CButton%20onPress%3D%7B()%20%3D%3E%20openModal(%22bottom%22)%7D%3EBottom%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%3CButton%20onPress%3D%7B()%20%3D%3E%20openModal(%22center%22)%7D%3ECenter%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%3CButton%20onPress%3D%7B()%20%3D%3E%20openModal(%22left%22)%7D%3ELeft%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%3CButton%20onPress%3D%7B()%20%3D%3E%20openModal(%22right%22)%7D%3ERight%3C%2FButton%3E%0A%20%20%20%20%20%20%3C%2FVStack%3E%0A%20%20%20%20%20%20%3CModal%20isOpen%3D%7Bopen%7D%20onClose%3D%7B()%20%3D%3E%20setOpen(false)%7D%3E%0A%20%20%20%20%20%20%20%20%3CModal.Content%20maxWidth%3D%22400px%22%20%7B...styles%5Bplacement%5D%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CModal.CloseButton%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CModal.Header%3EModal%20Title%3C%2FModal.Header%3E%0A%20%20%20%20%20%20%20%20%20%20%3CModal.Body%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20Sit%20nulla%20est%20ex%20deserunt%20exercitation%20anim%20occaecat.%20Nostrud%0A%20%20%20%20%20%20%20%20%20%20%20%20ullamco%20deserunt%20aute%20id%20consequat%20veniam%20incididunt%20duis%20in%20sint%0A%20%20%20%20%20%20%20%20%20%20%20%20irure%20nisi.%20Mollit%20officia%20cillum%20Lorem%20ullamco%20minim%20nostrud%20elit%0A%20%20%20%20%20%20%20%20%20%20%3C%2FModal.Body%3E%0A%20%20%20%20%20%20%20%20%20%20%3CModal.Footer%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CButton.Group%20variant%3D%22ghost%22%20space%3D%7B2%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CButton%3ELEARN%20MORE%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20setOpen(false)%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20ACCEPT%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FButton.Group%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FModal.Footer%3E%0A%20%20%20%20%20%20%20%20%3C%2FModal.Content%3E%0A%20%20%20%20%20%20%3C%2FModal%3E%0A%20%20%20%20%3C%2F%3E%0A%20%20)%0A%7D%0Aconst%20styles%20%3D%20%7B%0A%20%20top%3A%20%7B%0A%20%20%20%20marginBottom%3A%20%22auto%22%2C%0A%20%20%20%20marginTop%3A%200%2C%0A%20%20%7D%2C%0A%20%20bottom%3A%20%7B%0A%20%20%20%20marginBottom%3A%200%2C%0A%20%20%20%20marginTop%3A%20%22auto%22%2C%0A%20%20%7D%2C%0A%20%20left%3A%20%7B%0A%20%20%20%20marginLeft%3A%200%2C%0A%20%20%20%20marginRight%3A%20%22auto%22%2C%0A%20%20%7D%2C%0A%20%20right%3A%20%7B%0A%20%20%20%20marginLeft%3A%20%22auto%22%2C%0A%20%20%20%20marginRight%3A%200%2C%0A%20%20%7D%2C%0A%20%20center%3A%20%7B%7D%2C%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient","data-snack-sdkversion":"40.0.0"}),Object(i.b)("br",null),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"Tip")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"If you want a specifically aligned Modal, pass ",Object(i.b)("inlineCode",{parentName:"p"},"justifyContent")," and ",Object(i.b)("inlineCode",{parentName:"p"},"alignItems")," to Modal."))),Object(i.b)("h2",{id:"accessibility"},"Accessibility"),Object(i.b)("p",null,"Uses React Native ARIA ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://react-native-aria.geekyants.com/docs/FocusScope"}),"@react-native-aria/focus")," which follows the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.w3.org/TR/wai-aria-practices-1.2/#dialog_modal"}),"Dialog Modal WAI-ARIA design pattern"),"."),Object(i.b)("h3",{id:"keyboard-interactions"},"Keyboard Interactions"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Key"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"Tab")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Moves focus to the next tabbable element inside the dialog. If focus is on the last tabbable element inside the dialog, moves focus to the first tabbable element inside the dialog.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"Shift")," + ",Object(i.b)("inlineCode",{parentName:"td"},"Tab")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Moves focus to the previous tabbable element inside the dialog. If focus is on the first tabbable element inside the dialog, moves focus to the last tabbable element inside the dialog.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"Escape")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Closes the dialog")))),Object(i.b)("h2",{id:"props"},"Props"),Object(i.b)("h3",{id:"modal"},"Modal"),Object(i.b)("undefined",null,Object(i.b)("table",null,"\n  ",Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},"\n    ",Object(i.b)("th",{parentName:"tr"},"\n      Name\n    "),"\n    ",Object(i.b)("th",{parentName:"tr"},"\n      Type\n    "),"\n    ",Object(i.b)("th",{parentName:"tr"},"\n      Description\n    "),"\n    ",Object(i.b)("th",{parentName:"tr"},"\n      Default\n    "),"\n  "),"\n  ",Object(i.b)("tr",{parentName:"tbody"},"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        isOpen\n      "),"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        boolean\n      "),"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        If true, the modal will open. Useful for controllable state behaviour\n      "),"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(i.b)("tr",{parentName:"tbody"},"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        onClose\n      "),"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        any\n      "),"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        Callback invoked when the modal is closed\n      "),"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(i.b)("tr",{parentName:"tbody"},"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        defaultIsOpen\n      "),"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        boolean\n      "),"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        If true, the modal will be opened by default\n      "),"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(i.b)("tr",{parentName:"tbody"},"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        size\n      "),"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        string | number\n      "),"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        The size of the modal\n      "),"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(i.b)("tr",{parentName:"tbody"},"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        initialFocusRef\n      "),"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        any\n      "),"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        The ref of element to receive focus when the modal opens.\n      "),"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(i.b)("tr",{parentName:"tbody"},"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        finalFocusRef\n      "),"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        any\n      "),"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        The ref of element to receive focus when the modal closes.\n      "),"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(i.b)("tr",{parentName:"tbody"},"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        avoidKeyboard\n      "),"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        boolean\n      "),"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        If true and the keyboard is opened, the modal will move up equvivalent to the keyboard height.\n      "),"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        false\n      "),"\n    "),Object(i.b)("tr",{parentName:"tbody"},"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        closeOnOverlayClick\n      "),"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        boolean\n      "),"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        If true, the modal will close when the overlay is clicked\n      "),"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        true\n      "),"\n    "),Object(i.b)("tr",{parentName:"tbody"},"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        isKeyboardDismissable\n      "),"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        boolean\n      "),"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        If true, the modal will close when Escape key is pressed\n      "),"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        true\n      "),"\n    "),Object(i.b)("tr",{parentName:"tbody"},"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        overlayVisible\n      "),"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        boolean\n      "),"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        If true, a backdrop element is visible\n      "),"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        true\n      "),"\n    "))),"\n ",Object(i.b)("p",null,"Modal implements ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"box#props"}),"Box"))),Object(i.b)("h3",{id:"children-components"},"Children components"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Modal.Header"),",\xa0",Object(i.b)("inlineCode",{parentName:"li"},"Modal.Footer"),"\xa0and\xa0",Object(i.b)("inlineCode",{parentName:"li"},"Modal.Body"),"\xa0composes the\xa0",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/next/box"}),Object(i.b)("inlineCode",{parentName:"a"},"Box")),"\xa0component."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Modal.CloseButton"),"\xa0composes the\xa0",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/next/button"}),Object(i.b)("inlineCode",{parentName:"a"},"Button")),".")))}c.isMDXComponent=!0},733:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return u}));var n=a(0),o=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=o.a.createContext({}),c=function(e){var t=o.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},b=function(e){var t=c(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,r=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),b=c(a),m=n,u=b["".concat(r,".").concat(m)]||b[m]||p[m]||i;return a?o.a.createElement(u,l(l({ref:t},s),{},{components:a})):o.a.createElement(u,l({ref:t},s))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,r=new Array(i);r[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:n,r[1]=l;for(var s=2;s<i;s++)r[s]=a[s];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);