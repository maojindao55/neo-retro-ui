# NeoRetro UI with Tailwind CSS - Usage Guide
[![npm](https://img.shields.io/npm/v/neo-retro-ui)](https://www.npmjs.com/package/)
[![GitHub license](https://img.shields.io/github/license/maojindao55/neo-retro-ui)](https://github.com/sailui/ui/blob/master/LICENSE.md)

This guide will help you integrate the NeoRetro UI components into your Tailwind CSS project.

[Preview Demo](https://neoretroui.com/)
## Installation

1. First, make sure you have Tailwind CSS installed in your project. If not, follow the [official Tailwind CSS installation guide](https://tailwindcss.com/docs/installation).

2. Install the NeoRetro UI libaray

    ```
    npm install neo-retro-ui
    ````

3. In your `tailwind.config.js` file, require and spread the NeoRetro UI configuration:

   ```javascript
    const neoretroUI = require('neo-retro-ui')
    module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {},
    },
    plugins: [neoretroUI],
    }
   ```

## Components

### Buttons

```html
<button class="btn">Default Button</button>
<button class="btn bg-secondary text-white">Secondary Button</button>
<button class="btn bg-transparent text-secondary border-secondary hover:bg-secondary hover:text-white">Outline Button</button>
```

### Cards


```html
<div class="card bg-white">
    <h3 class="text-xl font-semibold mb-2">Default Card</h3>
    <p>This is a default card in the NeoRetro style.</p>
</div>
<div class="card bg-primary text-primary-dark">
    <h3 class="text-xl font-semibold mb-2">Primary Card</h3>
    <p>This is a primary colored card in the NeoRetro style.</p>
</div>
```

### Form Elements

```html
<form class="space-y-4 max-w-md mb-6">
<div>
    <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Name</label>
    <input type="text" id="name" name="name" class="w-full px-3 py-2 border border-secondary rounded-md shadow-neoretro focus:outline-none focus:ring-2 focus:ring-primary">
</div>
<div>
    <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
    <input type="email" id="email" name="email" class="w-full px-3 py-2 border border-secondary rounded-md shadow-neoretro focus:outline-none focus:ring-2 focus:ring-primary">
</div>
<div>
    <label for="country" class="block text-sm font-medium text-gray-700 mb-1">Country</label>
    <select id="country" name="country" class="w-full px-3 py-2 border border-secondary rounded-md shadow-neoretro focus:outline-none focus:ring-2 focus:ring-primary">
    <option>Select a country</option>
    <option>USA</option>
    <option>Canada</option>
    <option>UK</option>
    </select>
</div>
<div class="flex items-center">
    <input type="checkbox" id="terms" name="terms" class="h-4 w-4 text-primary focus:ring-primary border-secondary rounded">
    <label for="terms" class="ml-2 block text-sm text-gray-700">I agree to the terms and conditions</label>
</div>
<div>
    <button type="submit" class="btn">Submit</button>
</div>
</form>
```

### Badges 
```html
<span class="badge badge-primary">primary</span>
<span class="badge badge-secondary">secondary</span>
```

### Alerts 
```html
<div class="alert alert-success">This is a success alert!</div>
<div class="alert alert-warning">This is a warning alert!</div>
<div class="alert alert-danger">This is a danger alert!</div>
```

## Additional Components

As we continue to develop the NeoRetro UI, we'll add more components and utility classes. Stay tuned for updates!

If you have any questions or need further assistance, please don't hesitate to reach out.