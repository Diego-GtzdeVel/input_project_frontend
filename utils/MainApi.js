class Api {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
    this._token = null;
  }

  setToken(token) {
    this._token = token;
  }

  _getHeaders() {
    return {
      "Content-Type": "application/json",
      ...(this._token && { Authorization: `Bearer ${this._token}` }),
    };
  }

  _handleResponse(res) {
    if (!res.ok) {
      return Promise.reject(`Error: ${res.status} ${res.statusText}`);
    }
    return res.json();
  }

  getUserInfo() {
    return fetch(`${this.baseUrl}users/me`, {
      method: "GET",
      headers: this._getHeaders(),
    }).then(this._handleResponse);
  }

  addProject({ title, text, link }) {
    return fetch(`${this.baseUrl}projects`, {
      method: "POST",
      headers: this._getHeaders(),
      body: JSON.stringify({ title, text, link }),
    }).then(this._handleResponse);
  }

  deleteProject(cardId) {
    return fetch(`${this.baseUrl}projects/${projectId}`, {
      method: "DELETE",
      headers: this._getHeaders(),
    }).then(this._handleResponse);
  }
}

const api = new Api("https://api.input.serverpit.com/");

export default api;
