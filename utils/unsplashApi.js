class UnsplashApi {
  constructor(accessKey) {
    this.accessKey = accessKey;
    this.baseUrl = 'https://api.unsplash.com';
  }

  async fetchWorkImages(query = 'branding', count = 4) {
    try {
      const response = await fetch(
        `${this.baseUrl}/search/photos?query=${query}&per_page=${count}`,
        {
          headers: {
            Authorization: `Client-ID ${this.accessKey}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Unsplash API error: ${response.status}`);
      }

      const data = await response.json();
      return data.results.map((img) => ({
        id: img.id,
        url: img.urls.small,
        title: img.alt_description || 'Untitled',
      }));
    } catch (error) {
      console.error('Error fetching Unsplash images:', error);
      return [];
    }
  }
}

const accessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
const unsplashApi = new UnsplashApi(accessKey);

export default unsplashApi;
