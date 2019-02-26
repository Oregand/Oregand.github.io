---
title: Graceful Depreciation
date: '2019-02-12'
spoiler: Keeping a path open for improvement
---

_How do we depreciate code in a safe way for a user while still allowing a developer room for improvement?_

It is, a tough question.

Lets say for instance, we have a application which maintains a dependency to a external toolbox. This external tool box uses strict semantic versions to help keep some measure of santiy.

```javascript
{
  "name": "@namelessorganization/core",
  "private": true,
  "dependencies": {
    "@namelessorganization/toolbox": "5.9.5"
  }
}
```

Our toolbox represents a collection of components, each of which maintain a workable API contract with the core application. Each component lives under this version and different components are leveraged all over our core application like so:

```javascript
import { Button } from '@namelessorganization/toolbox'
```

Now, lets say we have a set of defined forms in a handful of locations which re-use the same component set.

```javascript
import {
  Button,
  Form,
  FormGroup,
  Label,
  CheckBox
} from '@namelessorganization/toolbox'
;<Form>
  <FormGroup>
    <Label>Form 1 Input</Label>
    <Checkbox />
  </FormGroup>
  <div>
    <Button color={'primary'}>Submit</Button>
  </div>
</Form>
```

Our component set is used in a handful of locations which creates a established, understood and hopefully predicable API contract between `toolbox` and `core`. Such that, our `<Form>` can be developed in confidence as the functionality of our component set is expected.

But, what happens when we need to depreciate a current component in lue of a better implementation?

The benefits of our previously contract between `toolbox` and `core` now become a burden. To illustrate why this contract has now become a burden, lets look at what I consider the best migration path.

## Depreciating / Maintaining Multiple Versions

This is probably the most widely assumed and used strategy for a depreciation of "generic" components. In our `toolbox` we now create a second version of our component in question and begin to replace the instances in `core`.

```javascript
// toolbox

export default ButtonOld

export default ButtonNew
```

```javascript
// core

import { ButtonOld, ButonNew } from '@namelessorganization/toolbox'


// Comp A

<ButtonOld />

// Comp B

<ButtonNew />
```

Over time, `<ButtonOld />` will be removed from our `core` application to ensure a graceful migration from the old depreciated code base without shattering the current application.

### Pros

- Easy to implement a non-breaking migration
- Easy to track versions and ensure proper refractoring
- Depreciated components can be planned for full removal during a major release

### Cons

- Must be mindful to keep a very strict rules for amount of components available
- Harder to keep track of changes as they are in multiple files
- Doucmentation is harder

## `next`

Given we have a open migration path with the above pattern, we can make use of a experimental branch `next` as a place for our major breaking changes to be published and tested.

```javascript
{
  "name": "@namelessorganization/core",
  "private": true,
  "dependencies": {
    "@namelessorganization/toolbox": "next"
  }
}
```

This allows developers to test, push and pull code from the bleeding edge in a fearless way.

Our `toolbox` can benifit from aggresive pushing of imporvement, while `core` can remain functionally safe for our end users.

The most important aspect of this style of development is promoting a sense of _failing forward_. Which for a sucessful project is one of the most overlooked aspects of sucess.

As mark Z said; "Move fast, break shit, fix it".

### Caveeat

For this migration strategy to work, there must be a _strict_ deployment process in agreement between the developers, QA and ops team.

```javascript
Major: >>> Every 6 months for a break

Minor: >>> Every week with no breaks

Patch: >>> Night release `next`
```

Users need to keep faith in an applications resiliance, and so during major breaks, companies need to work harder in terms of timing and response to ensure users dont suffer.
