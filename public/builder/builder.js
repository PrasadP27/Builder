const editor = grapesjs.init({
  container: '#editor',
  height: '100%',
  width: '100%',
  fromElement: true,
  storageManager: false,

  // styleManager: {
  //   files: [
  //     {
  //       path: 'styles/tailwind.css',
  //       contents: null,
  //     },
  //   ],
  // },

  canvas: {
    styles: [
      'https://cdn.jsdelivr.net/npm/tailwindcss@2.2.16/dist/tailwind.min.css',
    ],
  },

  panels: {
    defaults: [
      {
        id: "panel-devices",
        el: ".panel_devices",
        buttons: [
          {
            id: "device-desktop",
            label: '<img src="assets/icons/desktop.svg" alt="desktop">',
            command: "set-device-desktop",
            active: true,
            togglable: false,
          },
          {
            id: 'device-tablet',
            label: '<img src="assets/icons/tablet.svg" alt="tablet">',
            command: 'set-device-tablet',
            togglable: false,
          },
          {
            id: "device-mobile",
            label: '<img src="assets/icons/mobile.svg" alt="mobile">',
            command: "set-device-mobile",
            togglable: false
          }
        ]
      },
      {
        id: "panel-basic-actions",
        el: ".panel_basic_actions",
        buttons: [
          {
            id: "visibility",
            active: true,
            className: "btn-toggle-borders",
            label: '<img src="assets/icons/view-components.svg" alt="code">',
            command: "sw-visibility",
          },
          {
            id: 'export',
            className: 'btn-open-export',
            label: '<img src="assets/icons/code.svg" alt="code">',
            command: 'export-template',
            context: 'export-template',
          }
        ]
      }
    ]
  },

  deviceManager: {
    devices: [
      {
        name: "Desktop",
        width: ""
      },
      {
        name: "Tablet",
        width: "768px",
        widthMedia: "992px"
      },
      {
        name: "Mobile",
        width: "320px",
        widthMedia: "480px"
      }
    ]
  },

  blockManager: {
    appendTo: '#blocks',
    blocks: [
      {
        id: 'h1',
        label: 'Header',
        content: `
        <header class="text-gray-600 body-font">
          <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span class="ml-3 text-xl">Tailblocks</span>
            </a>
          <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a class="mr-5 hover:text-gray-900">First Link</a>
            <a class="mr-5 hover:text-gray-900">Second Link</a>
            <a class="mr-5 hover:text-gray-900">Third Link</a>
            <a class="mr-5 hover:text-gray-900">Fourth Link</a>
          </nav>
          <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
          </div>
        </header>`,
        category: 'Header'
      },
      {
        id: 'hero',
        label: `<img src="/assets/images/angry Unicorn.png"`,
        content: `<section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold out
              <br class="hidden lg:inline-block">readymade gluten
            </h1>
            <p class="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
            <div class="flex justify-center">
              <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
              <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
            </div>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600">
          </div>
        </div>
      </section>`,
        category: 'Header'
      }
    ]
  },

  layerManager: {
    appendTo: '#layers-container'
  },

  selectorManager: {
    appendTo: '#styles-container'
  },

  traitManager: {
    appendTo: '#trait-container',
  },


});


//for devices
editor.Commands.add('set-device-desktop', {
  run: (editor) => editor.setDevice('Desktop'),
});

editor.Commands.add('set-device-tablet', {
  run: (editor) => editor.setDevice('Tablet'),
});

editor.Commands.add('set-device-mobile', {
  run: (editor) => editor.setDevice('Mobile'),
});

// Set the initial device
editor.setDevice('Desktop');