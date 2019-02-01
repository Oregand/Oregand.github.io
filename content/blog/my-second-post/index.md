---
title: Being Ok With Deploying Shitty Code
date: '2019-02-01'
spoiler: When is it good enough to deploy?
---

_Good_ API design is memorable and unambiguous. It encourages readable, correct and performant code, and helps developers fall into [the pit of success](https://blog.codinghorror.com/falling-into-the-pit-of-success/).

I call these design aspects “first order” because they are the first things a library developer tends to focus on. You might have to compromise on some of them and make tradeoffs but at least they’re always on your mind.

However, unless you’re sending a rover to Mars, your code will probably change over time. And so will the code of your API consumers.

The best API designers I know don’t stop at the “first order” aspects like readability. They dedicate just as much, if not more, effort to what I call the “second order” API design: **how code using this API would evolve over time.**

A slight change in requirements can make the most elegant code fall apart.

_Great_ APIs anticipate that. They anticipate that you’ll want to move some code. Copy and paste some part. Rename it. Unify special cases into a generic reusable helper. Unwind an abstraction back into specific cases. Add a hack. Optimize a bottleneck. Throw away a part and start it anew. Make a mistake. Navigate between the cause and the effect. Fix a bug. Review the fix.

Great APIs not only let you fall into a pit of success, but help you _stay_ there.

They’re optimized for change.
