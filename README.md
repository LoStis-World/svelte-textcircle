![textcircle-min](https://user-images.githubusercontent.com/83787591/220706445-772e4de3-5265-4ceb-83b1-31a875271149.jpg)

# Astro TextCircle
If you want to showcase your text in a circular layout, give this Astro component a try.
> **While this component isn't inherently responsive, you can easily create multiple circles that adjust to fit the viewport - just keep this in mind.**


### [Live Demo](https://stackblitz.com/edit/withastro-astro-wu7yqp?file=src%2Fpages%2Findex.astro)


## Instalation
> using npm
```
npm install astro-textcircle
```
> using pnpm
```
pnpm add astro-textcircle
```


## Possible Props 
If Visual Studio Code is your preferred IDE, simply press CRTL+SPACE / CMD+SPACE to reveal the valid properties.
- **text** [sting]
- **class** [sting] 
- **options** [object]
- **animation** [object]

| Property           | Object    | Type              | Default | Desctription                                         |
| ------------------ | :-------: | :---------------: | :-----: | ---------------------------------------------------- |
| class              | -         | string            | -       | Add classes to the circle contaner                   |
| text               | -         | string            | -       | Shows the added text in a circular layout            |
| spacing            | options   | number            | 1       | Spacing between the letters                          |
| textTransform      | options   | string            | -       | Will add text-transform with the given value         |
| fontSizeInRem      | options   | number            | 1       | Will change the font-size to the given number in rem |
| fontWeight         | options   | string / number   | normal  | Will change the font-weight to the given value       |
| divider            | options   | string            | -       | Change the spaces to the given value                 |
| dividerColor       | options   | string            | -       | Change the text color to the given color code        |
| rotate             | options   | number            | -       | Rotate the circle to the given value in deg          |
| duration           | animation | string            | -       | Change the animation speed                           |
| timing             | animation | string            | -       | Animation timing function                            |
| delay              | animation | string            | 0s      | Animation delay                                      |
| direction          | animation | normal / reverse  | normal  | Animation rotation direction                         |
| count              | animation | infinite / number | infinit | Animation rotation count                             |
| animateOnHover     | animation | boolean           | false   | Start animation on mouse hover                       |
| stopAnimateOnHover | animation | boolean           | false   | Stop animation on hover                              |


### **divider and dividerColor**
> Give your text a stylish twist with a divider instead of spacing - just use the **divider** property and set a custom color with **dividerColor**.
> Keep in mind that in order to use the **dividerColor** property, the **divider** property must be set beforehand.

### **animation**
> If you are using the **animation** property, you need to declare the **duration** poperty! 

> Keep in mind that using **animateOnHover** + **stopAnimateOnHover** will result in **animateOnHover**


## How to use
```html
---
import { TextCircle } from 'astro-textcircle';
---

<div>

  <!-- basic -->
  <TextCircle text="Display text in a circle" />

  <!-- using class with tailwind -->
  <Textcircle 
    text="Display text in a circle" 
    class="text-red-500 absolute top-8 left-8"
  />

  <!-- using options -->
  <TextCircle 
    text="Display text in a circle"
    options={{ 
      uppercase: true,
      fontSizeInRem: 0.75,
      fontWeight: 'bold',
      divider: '-',
      dividerColor: 'red',
      rotation: 45
    }}
  />

  <!-- using animation -->
  <TextCircle 
    text="Display text in a circle"
    animation={{ 
      duration: '12s',
      timing: 'linear',
      delay: '5s',
      direction: 'reverse',
      count: 'infinite',
      animateOnHover: true
    }}
  />

</div>
```
> Notice that every letter and spacing in your text will be outputed as **set:html={}** 



## Using Slot
While **slot** can be used in this component, note that the height of the **slot-container** is dependent on the size of the text-circle.

```html
  <TextCircle text="Display text in a circle">
    <img src="/my-image.jpg" alt="" />
  <TextCircle>
```

## CSS Classes
```html
<div class="lw-textcircle">
  <div class="lw-textcircle__inner">
    <p class="lw-textcircle-circle">
      Circle Text
    </p>
    <div class="lw-textcircle-slot">
      <slot />
    </div>
  </div>
</div>
```