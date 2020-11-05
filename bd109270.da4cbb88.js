(window.webpackJsonp=window.webpackJsonp||[]).push([[273],{398:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return l}));var o=t(1),r=t(9),i=(t(0),t(490)),a={id:"function-after-focusing-screen",title:"Call a function when focused screen changes",sidebar_label:"Call a function when focused screen changes"},c={id:"version-5.x/function-after-focusing-screen",title:"Call a function when focused screen changes",description:"In this guide we will call a function or render something on screen focusing. This is useful for making additional API calls when a user revisits a particular screen in a Tab Navigator, or to track user events as they tap around our app.",source:"@site/versioned_docs/version-5.x/function-after-focusing-screen.md",permalink:"/docs/function-after-focusing-screen",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-5.x/function-after-focusing-screen.md",version:"5.x",sidebar_label:"Call a function when focused screen changes",sidebar:"version-5.x/docs",previous:{title:"Preventing going back",permalink:"/docs/preventing-going-back"},next:{title:"Access the navigation prop from any component",permalink:"/docs/connecting-navigation-prop"}},s=[{value:"Triggering an action with a <code>&#39;focus&#39;</code> event listener",id:"triggering-an-action-with-a-focus-event-listener",children:[]},{value:"Triggering an action with the <code>useFocusEffect</code> hook",id:"triggering-an-action-with-the-usefocuseffect-hook",children:[]},{value:"Re-rendering screen with the <code>useIsFocused</code> hook",id:"re-rendering-screen-with-the-useisfocused-hook",children:[]}],u={rightToc:s};function l(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"In this guide we will call a function or render something on screen focusing. This is useful for making additional API calls when a user revisits a particular screen in a Tab Navigator, or to track user events as they tap around our app."),Object(i.b)("p",null,"There are multiple approaches available to us:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Listening to the ",Object(i.b)("inlineCode",{parentName:"li"},"'focus'")," event with an event listener."),Object(i.b)("li",{parentName:"ol"},"Using the ",Object(i.b)("inlineCode",{parentName:"li"},"useFocusEffect")," hook provided by react-navigation."),Object(i.b)("li",{parentName:"ol"},"Using the ",Object(i.b)("inlineCode",{parentName:"li"},"useIsFocused")," hook provided by react-navigation.")),Object(i.b)("h2",{id:"triggering-an-action-with-a-focus-event-listener"},"Triggering an action with a ",Object(i.b)("inlineCode",{parentName:"h2"},"'focus'")," event listener"),Object(i.b)("p",null,"We can also listen to the ",Object(i.b)("inlineCode",{parentName:"p"},"'focus'")," event with an event listener. After setting up an event listener, we must also stop listening to the event when the screen is unmounted."),Object(i.b)("p",null,"With this approach, we will only be able to call an action when the screen focuses. This is useful for performing an action such as logging the screen view for analytics."),Object(i.b)("p",null,"Example:"),Object(i.b)("samp",{id:"focus-event-listener"}),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"import * as React from 'react';\nimport { View } from 'react-native';\n\nfunction ProfileScreen({ navigation }) {\n  React.useEffect(() => {\n    const unsubscribe = navigation.addListener('focus', () => {\n      // The screen is focused\n      // Call any action\n    });\n\n    // Return the function to unsubscribe from the event so it gets removed on unmount\n    return unsubscribe;\n  }, [navigation]);\n\n  return <View />;\n}\n")),Object(i.b)("p",null,"In most cases, it's recommended to use the ",Object(i.b)("inlineCode",{parentName:"p"},"useFocusEffect")," hook instead of adding the listener manually. See below for details."),Object(i.b)("h2",{id:"triggering-an-action-with-the-usefocuseffect-hook"},"Triggering an action with the ",Object(i.b)("inlineCode",{parentName:"h2"},"useFocusEffect")," hook"),Object(i.b)("p",null,"React Navigation provides a ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://reactjs.org/docs/hooks-intro.html"}),"hook")," that runs an effect when the screen comes into focus and cleans it up when it goes out of focus. This is useful for cases such as adding event listeners, for fetching data with an API call when a screen becomes focused, or any other action that needs to happen once the screen comes into view."),Object(i.b)("p",null,"This is particularly handy when we are trying to stop something when the page is unfocused, like stopping a video or audio file from playing, or stopping the tracking of a user's location."),Object(i.b)("samp",{id:"simple-focus-effect"}),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"import { useFocusEffect } from '@react-navigation/native';\n\nfunction Profile({ userId }) {\n  const [user, setUser] = React.useState(null);\n\n  useFocusEffect(\n    React.useCallback(() => {\n      const unsubscribe = API.subscribe(userId, user => setUser(data));\n\n      return () => unsubscribe();\n    }, [userId])\n  );\n\n  return <ProfileContent user={user} />;\n}\n")),Object(i.b)("h2",{id:"re-rendering-screen-with-the-useisfocused-hook"},"Re-rendering screen with the ",Object(i.b)("inlineCode",{parentName:"h2"},"useIsFocused")," hook"),Object(i.b)("p",null,"React Navigation provides a ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://reactjs.org/docs/hooks-intro.html"}),"hook")," that returns a boolean indicating whether the screen is focused or not."),Object(i.b)("p",null,"The hook will return ",Object(i.b)("inlineCode",{parentName:"p"},"true")," when the screen is focused and ",Object(i.b)("inlineCode",{parentName:"p"},"false")," when our component is no longer focused. This enables us to render something conditionally based on whether the user is on the screen or not."),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"useIsFocused")," hook will cause our component to re-render when we focus and unfocus a screen. Using this hook component may introduce unnecessary component re-renders as a screen comes in and out of focus. This could cause issues depending on the type of action we're calling on focusing. Hence we recommend to use this hook only if you need to trigger a re-render. For side-effects such as subscribing to events or fetching data, use the methods described above."),Object(i.b)("samp",{id:"use-is-focused"}),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"import * as React from 'react';\nimport { Text } from 'react-native';\nimport { useIsFocused } from '@react-navigation/native';\n\nfunction Profile() {\n  // This hook returns `true` if the screen is focused, `false` otherwise\n  const isFocused = useIsFocused();\n\n  return <Text>{isFocused ? 'focused' : 'unfocused'}</Text>;\n}\n")),Object(i.b)("p",null,"This example is also documented in the ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/use-is-focused"}),Object(i.b)("inlineCode",{parentName:"a"},"useIsFocused")," API documentation"),"."))}l.isMDXComponent=!0},490:function(e,n,t){"use strict";t.d(n,"a",(function(){return f})),t.d(n,"b",(function(){return h}));var o=t(0),r=t.n(o);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=r.a.createContext({}),l=function(e){var n=r.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c({},n,{},e)),t},f=function(e){var n=l(e.components);return r.a.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},p=Object(o.forwardRef)((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=l(t),p=o,h=f["".concat(a,".").concat(p)]||f[p]||d[p]||i;return t?r.a.createElement(h,c({ref:n},u,{components:t})):r.a.createElement(h,c({ref:n},u))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=p;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=t[u];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);