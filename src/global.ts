declare global {
  interface Window {
    global: {
      setUserName: (name: string|null|undefined) => void;
      getUserName: () => string |null|undefined;
    };
  }
}

window.global = {
  setUserName: (name: string|null|undefined) => {
    localStorage.setItem("userName", name ?? "Cliente");
  },

  getUserName: () => {
    return localStorage.getItem("userName");
  },
};

export {};
