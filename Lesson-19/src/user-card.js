class UserCard extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    const template = document.getElementById('user-card-template');
    const content = template.content.cloneNode(true);

    const img = content.querySelector('img');
    // if no avatar value is provied, fallback to the placeholder
    img.src = this.getAttribute('avatar') || 'https://placehold.co/80x80';

    shadow.appendChild(content);
  }
}
customElements.define('user-card', UserCard);
export default UserCard;
