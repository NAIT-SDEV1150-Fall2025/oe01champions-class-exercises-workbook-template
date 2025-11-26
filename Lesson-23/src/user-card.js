// Self-contained user card web component with Shadow DOM
const template = document.createElement('template');
template.innerHTML = `
  <style>
    :host {
      --card-bg: var(--global-card-bg, #ffffff);
      --card-color: var(--global-card-color, #222222);
      --card-accent: var(--global-card-accent, #0077ff);
      display: block;
    }
    .card {
      background: var(--card-bg);
      color: var(--card-color);
      border: 1px solid #e6e6e6;
      padding: 12px;
      border-radius: 8px;
      display: flex;
      gap: 12px;
      align-items: center;
      width: 320px;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
    }
    .name {
      color: var(--card-accent);
      display: block;
      font-size: 1.2em;
      font-weight: bold;
      margin: 0;
    }
    .description {
      font-size: 0.9rem;
      color: #666;
      display: block;
      margin-top: 4px;
    }
    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      object-fit: cover;
      flex: 0 0 80px;
    }
  </style>
  
  <div class="card">
    <img src="" width="80" height="80" alt="avatar">
    <div class="info">
      <slot name="name" class="name"></slot>
      <slot name="description" class="description"></slot>
      <button>Follow</button>
    </div>
  </div>
`;
document.body.appendChild(template);

class UserCard extends HTMLElement {
  #followed;
  #user;
  constructor() {
    super();

    // Added property to track follow state
    this.#followed = false;
    // created user property that should help to set the values in the UI or front view.
    this.#user = false;
    const shadow = this.attachShadow({ mode: 'open' });
    const content = template.content.cloneNode(true);
    this._img = content.querySelector('img');
    // below line got commented out because we need to fetch the data from user property.
    // img.src = this.getAttribute('avatar') || 'https://placehold.co/80x80/0077ff/ffffff';
    this._btn = content.querySelector('button');
    this._btn.addEventListener('click', () => this._onFollow());
    shadow.appendChild(content);
  }

  // define the renderFromUser here.
  _renderFromUser() {
    if (this.#user) {
      // update the image from the object that is now stored in user property.
      if (this.#user.avatar) {
        this._img.src = this.#user.avatar;
      } else {
        this._img.src = 'https://placehold.co/80x80/0077ff/ffffff';
      }
      this.setAttribute('user-id', this.#user.id);

      // Update the internal slot values via shadow DOM for text nodes.
      const nameSlot = this.shadowRoot.querySelector('[name="name"]');
      if (nameSlot) {
        nameSlot.textContent = this.#user.name || '';
      }

      const descSlot = this.shadowRoot.querySelector('[name="description"]');

      if (descSlot) {
        descSlot.textContent = this.#user.description || '';
      }
    }
  }

  // create a user property that holds the information.
  set user(obj) {
    this.#user = obj;

    // Rendering the information to front end.
    this._renderFromUser();
  }

  // getter method
  get user() {
    return this.#user;
  }


  follow() {
    this._setFollow(true);
  }

  unfollow() {
    this._setFollow(false);
  }

  // Property to read followed state
  get followed() {
    return this.#followed;
  }

  _setFollow(value) {
    this.#followed = value;
    this._btn.textContent = this.#followed ? 'Following' : 'Follow';
    this.dispatchEvent(new CustomEvent('follow-change', {
      detail: { id: this.getAttribute('user-id') || null, followed: this.#followed },
      bubbles: true,
      composed: true,
    }));
  }

  // Follow button handler
  _onFollow() {
    this._setFollow(!this.#followed);
  }

  // Respond to attribute changes if needed in the future
  static get observedAttributes() {
    return ['avatar'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'avatar' && this.shadowRoot) {
      const img = this.shadowRoot.querySelector('img');
      if (img) {
        img.src = newValue;
      }
    }
  }
}

customElements.define('user-card', UserCard);

export default UserCard;
