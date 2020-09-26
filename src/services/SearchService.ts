export default class SearchService {
  async loadProfile(username: string) {
    let response = await fetch(`https://api.github.com/users/${username}`)
    let data = await response.json()

    return data
  }
}