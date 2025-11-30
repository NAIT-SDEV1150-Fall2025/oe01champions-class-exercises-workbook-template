const template = document.createElement('template');
template.innerHTML = `
<style>
a, button {
  display: inline-block;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  background-color: #eee;
  color: #000;
  cursor: pointer;
  font-size: initial;
  text-decoration: none;
}
a:hover, button:hover {
  background-color: #333;
  color: #fff;
}
</style>
  <button>
    Click Me
  </button>
`;

class AppButton extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    connectedCallBack() {
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

customElements.define('app-button', AppButton);
