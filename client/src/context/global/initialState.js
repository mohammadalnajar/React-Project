export const initialState = {
  user: { name: '', email: '', userRole: '' },
  status: { loggedIn: '' },
  devices: [
    {
      _id: '',
      name: '',
      brand: '',
      type: '',
      price: 0,
      imageUrl: '',
      specs: {
        releaseDate: '',
        display: {
          type: '',
          size: '',
          resolution: '',
        },
        platform: {
          OS: '',
          chipSet: '',
          cpu: '',
          gpu: '',
        },
        memory: {
          ram: [''],
          storage: ['', '', ''],
        },
        camera: {
          main: '',
          selfie: '',
        },
        battery: {
          capacity: '',
          charging: '',
        },
      },
    },
  ],
  shoppingCartItems: [
    {
      _id: '',
      name: '',
      storage: '',
      imageUrl: '',
      price: 0,
      quantity: 0,
    },
  ],
};
