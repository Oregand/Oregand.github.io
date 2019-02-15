---
title: Graceful Depreciation
date: '2019-02-12'
spoiler: Keeping a path open for improvement
---

_How do we depreciate code in a safe way for a user while still allowing a developer room for improvement?_

It is, a tough question.

Lets say for instance, we have a application which maintains a dependency to a external toolbox. This external tool box uses strict semantic versions to help keep some measure of santiy.

```json
{
  "name": "@namelessorganization/core",
  "private": true,
  "dependencies": {
    "@namelessorganization/toolbox": "5.9.5"
  }
}
```

Our toolbox represents a collection of components, each of which maintain a workable API contract with the core application. Each component lives under this version and different components are leveraged all over our core application like so:

```js
import { Button } from '@namelessorganization/toolbox'
```

Now, lets say we have a set of defined forms in a handful of locations which re-use the same component set.

```js
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

The benefits of our previously contract between `toolbox` and `core` now become a burden. To illustrate why this contract has now become a burden, lets look at a few possible migration paths.

## Multiple Versions

This is probably the most widely assumed and used strategy for a depreciation of "generic" components. In our `toolbox` we now create a second version of our component in question and begin to replace the instances in `core`.

```js
// toolbox

export default ButtonOld

export default ButtonNew
```

```js
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

## HOC / Composing

## `next`
