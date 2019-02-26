---
title: VueJS Amsterdam 2019 - The Best Bits
date: '2019-02-15'
spoiler: The best things I saw at VueJS Amsterdam 2019
---

_VueJS Amsterdam 2019 - The Best Bits_

https://www.vuejs.amsterdam/

So this week I attended VueJS Amsterdam and it was a blast. Over the years Ive been to various software conferences(UX/DX, ReactConf, JSConf, JSBrazil, etc) and out of all of the conferences Ive been to, VueJS Amsterdam might have been the best.

2 years ago my company, VSWare adopted a very early Vue.js setup as our main FE framework over others we had considered(react, Rivets, backbone, ember). We had needed something plug and play that would sit into our main application's architecture without too much time being wasted on integration. Our stack today is: tomcat, Java 8, maven, SQL, Vue, jQuery and SCSS.

Given Vue has picked up so much popularity in the FE world over the last year, I wanted to see what the state of the community was in, and pick up a few tricks for my own work life.

_This is what I learned_

## The state of Vue 3.0

Evan You kicked things off on the Thursday with a breakdown of the current state of things within the Vue ecosystem and whats new in not only Vue 2.6 but also Vue 3.0.

We were all hoping he might consider a early release during the conference but alas, it was not to be.

Evan pointed out some interesting metrics about Vue, such as the jsDelivr stats:

```json
Just found out Vue has 461M hits/month on jsDelivr:
https://data.jsdelivr.com/v1/package/npm/vue/badge … that’s… a lot
```

Which completely blew me away given I remember using Vue a few years ago when no one had ever even heard of it in Ireland!

Check out the full breakdown here:

[plans-for-the-next-iteration-of-vue-js](https://medium.com/the-vue-point/plans-for-the-next-iteration-of-vue-js-777ffea6fabf)

## Composing Components

_The was my favouriye talk_

This talk was given by:

[Damian Dulisz](https://twitter.com/DamianDulisz).

He lead the talk with a quote from Eric Elliot: "Favour composition over inheritance" and demonstrated this to the audience by having us mentally build a `Button` component in our minds.

More than 60% of us built this mental component using a prop based approach, he was quick to point out the drawbacks of this method and demonstrate a better method using a compositional pattern.

As someone who has never been able to let go of my love for functional programming, his talk was music to my ears and I enjoyed seeing someone from the core team objectively showing the pros && cons of both approaches.

_(Loved it when some people from the audience answered they use scoped slots but not slots)_

You can find the repo here and try it yourself:

[Composing Components](https://github.com/shentao/composing-components)

## 5 rules for performant Vue Applications

This talk was given by:

[Filip Rakowski](https://twitter.com/filrakowski)

> 1. Lazy Load All Routes

> 2. Vendor Bundle Anti Pattern

> 3. Lazy Loading Vuex Store

> 4. Finding smaller libaries

> 5. Prefetching Components

Check it out in more detail here:

[vue-js-app-performance-optimization-part-2](https://itnext.io/vue-js-app-performance-optimization-part-2-lazy-loading-routes-and-vendor-bundle-anti-pattern-4a62236e09f9)

## NuxtJS - Whats new?

Before this talk I had actually never heard of the Nuxt framework(I'm a react kinda guy so Next.js was the closest thing I knew of).

By the end of the 45 minute presentation I was utterly blown away by how cool some of the features of this framework were. I was especially taken aback by DOM driven preFetched components!

The Copain brothers take a: _less is more_ approach, abstracting away config or in Sebastiens own words: "I wanted to focus on writing `.vue` files."

This includes auto route generation, a full vuex setup, auto updated core deps, webpack config with best practices

([Sean Larkin](https://twitter.com/TheLarkInn) approved).

Find the presentation here: https://nuxtjs.org/

## Accessability in a Vue SPA

_Maya Shavin gave a great breakdown of how to tink in terms of accessability._

I learned a lot from [Maya](https://twitter.com/mayashavin) about accessability during her demo. Everything from color issues, using icons properly to why Beyonce got sued.

Her talk was really informative in terms of writing `aria` labels correctly and how we can begin to think in terms of accessability when writing websites.

Her demo can be found here: https://github.com/mayashavin/vue-accessibility-demo

## Mixologly with NativeScript && Kraggle

_Being Irish, this one has a special place in my heart_

So in the Vue community Jen Looper(Crazy Aunt Jen) is a pretty special lady being the founder of Vue Vixens and helping drive the mobile Vue community via NativeScript.

Check here our here:

[Crazy Aunt Jen Looper](https://twitter.com/jenlooper)

Her talk focused on a mobile application she developed using NativeScript and some base Machine Learning to figure out what cocktails you can make from your hotel minibar.

I learned a good deal about NativeScript with its new Vue support and how best to massage data from kraggle when training sets for any ML.

Check it out here:

[Mixology with Vue.js && ML](https://slides.com/telerikdevrel/minibar#/)
